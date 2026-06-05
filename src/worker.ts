
export interface Env {
    WEB3_FORM_API: string;
    ASSETS: Fetcher;
}

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
        const url = new URL(request.url);

        // Same-origin metadata endpoint. The browser calls this just before it
        // submits the form (Web3Forms requires the POST to come from the client,
        // so we can't proxy it). We hand back the access key plus authoritative
        // network data from Cloudflare's edge — the IP/geo here belong to the
        // visitor's own request, with no third-party lookup or rate limits.
        if (url.pathname === '/api/meta') {
            const cf = (request as any).cf || {};
            const ip = request.headers.get('CF-Connecting-IP') || 'Unknown';
            const location = [cf.city, cf.region, cf.postalCode, cf.country]
                .filter(Boolean).join(', ') || 'Unknown';
            const isp = [cf.asOrganization, cf.asn ? `AS${cf.asn}` : '']
                .filter(Boolean).join(' ') || 'Unknown';
            const coordinates = (cf.latitude && cf.longitude)
                ? `${cf.latitude}, ${cf.longitude}` : 'Unknown';

            return new Response(JSON.stringify({
                access_key: env.WEB3_FORM_API,
                ip_address: ip,
                location,
                isp_network: isp,
                coordinates,
                edge_timezone: cf.timezone || 'Unknown',
            }), {
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store',
                    'Access-Control-Allow-Origin': '*',
                },
            });
        }

        // Serve static assets for all other requests
        return env.ASSETS.fetch(request);
    },
};
