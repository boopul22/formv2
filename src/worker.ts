
export interface Env {
    WEB3_FORM_API: string;
    ASSETS: Fetcher;
}

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        const url = new URL(request.url);

        // Form submission proxy: injects the visitor IP + source info, then
        // forwards to Web3Forms using the secret access key (kept server-side).
        if (url.pathname === '/api/submit' && request.method === 'POST') {
            let payload: Record<string, unknown> = {};
            try {
                payload = await request.json();
            } catch {
                return new Response(JSON.stringify({ success: false, message: 'Invalid request body' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                });
            }

            // Authoritative network data straight from Cloudflare's edge — no
            // third-party lookup, no rate limits, can't be spoofed by the client.
            const cf = (request as any).cf || {};
            const ip = request.headers.get('CF-Connecting-IP') || 'Unknown';
            const location = [cf.city, cf.region, cf.postalCode, cf.country]
                .filter(Boolean).join(', ') || 'Unknown';
            const isp = [cf.asOrganization, cf.asn ? `AS${cf.asn}` : '']
                .filter(Boolean).join(' ') || 'Unknown';
            const coordinates = (cf.latitude && cf.longitude)
                ? `${cf.latitude}, ${cf.longitude}` : 'Unknown';
            // The page the visitor submitted from (sent by the client), with the
            // Referer header as a fallback.
            const sourceUrl = (payload.page_url as string) || request.headers.get('Referer') || 'Unknown';
            const website = url.hostname;

            const forwarded = {
                ...payload,
                access_key: env.WEB3_FORM_API,
                website,
                source_url: sourceUrl,
                ip_address: ip,
                location,
                isp_network: isp,
                coordinates,
                edge_timezone: cf.timezone || 'Unknown',
            };
            delete (forwarded as any).page_url;

            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(forwarded),
            });

            return new Response(await res.text(), {
                status: res.status,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Serve static assets for all other requests
        return env.ASSETS.fetch(request);
    },
};
