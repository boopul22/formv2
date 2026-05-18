import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden bg-noise">
      {/* Top accent border */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-amber-500 text-navy-950 p-2 rounded-lg">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <span className="font-serif text-2xl tracking-wide">ukclaims.online</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Helping UK residents claim what they are owed with professional, transparent, and efficient legal assistance. No Win, No Fee.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {/* Trust Badges placeholder styled */}
              <div className="flex items-center justify-center bg-white/5 border border-white/10 rounded-md px-3 py-1.5 text-xs font-bold tracking-wider text-white/90">
                FCA AUTHORISED PARTNERS
              </div>
              <div className="flex items-center justify-center bg-white/5 border border-white/10 rounded-md px-3 py-1.5 text-xs font-bold tracking-wider text-white/90">
                ICO REGISTERED
              </div>
            </div>
            <p className="text-[11px] leading-relaxed text-white/50 pt-3">
              C3 Claims is a trading style of Bamboo Marketing NW Limited. Bamboo Marketing NW Limited is authorised and regulated by the Financial Conduct Authority. C3 Claims may receive a referral fee from a regulated solicitor or claims management company if your claim proceeds. This does not increase the cost to you. You do not need to use a claims management company. You can complain directly to the lender or use the Financial Ombudsman Service.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/70 hover:text-amber-400 flex items-center gap-2 transition-colors"><ArrowRight className="h-3 w-3" /> Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-amber-400 flex items-center gap-2 transition-colors"><ArrowRight className="h-3 w-3" /> About Us</Link></li>
              <li><a href="/#how-it-works" className="text-white/70 hover:text-amber-400 flex items-center gap-2 transition-colors"><ArrowRight className="h-3 w-3" /> How It Works</a></li>
              <li><a href="/#faq" className="text-white/70 hover:text-amber-400 flex items-center gap-2 transition-colors"><ArrowRight className="h-3 w-3" /> FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-white">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-white/70 hover:text-amber-400 flex items-center gap-2 transition-colors"><ArrowRight className="h-3 w-3" /> Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/70 hover:text-amber-400 flex items-center gap-2 transition-colors"><ArrowRight className="h-3 w-3" /> Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy#cookies" className="text-white/70 hover:text-amber-400 flex items-center gap-2 transition-colors"><ArrowRight className="h-3 w-3" /> Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:support@ukclaims.online" className="flex items-start gap-3 text-white/70 hover:text-amber-400 transition-colors group">
                  <div className="mt-1 bg-white/10 p-1.5 rounded-full group-hover:bg-amber-500/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-white/50 mb-0.5">Email Support</span>
                    <span className="text-white group-hover:text-amber-400">support@ukclaims.online</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <div className="mt-1 bg-white/10 p-1.5 rounded-full">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-white/50 mb-0.5">Location</span>
                  <span className="text-white">United Kingdom</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-16 pt-8 border-t border-white/10 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="max-w-3xl text-[11px] leading-relaxed text-white/40 space-y-2">
            <p>
              <strong className="text-white/60 font-semibold">Important Disclosure:</strong> You are not required to use a claims management company to pursue your claim. You can contact the responsible lender directly at no cost. If your claim is unsuccessful, you may refer it to the Financial Ombudsman Service (<a href="https://www.financial-ombudsman.org.uk" className="underline hover:text-white">financial-ombudsman.org.uk</a>) or the Financial Services Compensation Scheme (<a href="https://www.fscs.org.uk" className="underline hover:text-white">fscs.org.uk</a>) free of charge.
            </p>
            <p>
              ukclaims.online is operated by Immaculate Ltd. Registered in England & Wales. ICO Registration No.: ZB932467. We do not provide legal advice.
            </p>
          </div>
          
          <div className="text-xs text-white/50 whitespace-nowrap">
            &copy; {new Date().getFullYear()} ukclaims.online. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
