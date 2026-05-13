import React, { useEffect } from 'react';
import { ShieldCheck, Award, Users, Scale, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up', 'opacity-100');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-cream min-h-screen pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-28 bg-navy-950 bg-noise overflow-hidden">
        <div className="absolute top-0 right-0 w-full max-w-3xl h-full bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-amber-400 font-bold uppercase tracking-widest text-sm mb-5 sm:mb-6">
            <span className="h-px w-8 bg-amber-400"></span> About Us <span className="h-px w-8 bg-amber-400"></span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6 leading-tight">
            Fighting for What's <span className="text-amber-400">Rightfully Yours</span>
          </h1>
          <p className="text-base sm:text-xl text-navy-200 leading-relaxed max-w-2xl mx-auto">
            We are a dedicated claims management service helping UK consumers navigate the complexities of financial mis-selling.
          </p>
        </div>
      </section>

      {/* 2. WHO WE ARE & MISSION */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal-on-scroll opacity-0">
              <h2 className="font-serif text-4xl text-navy-950 mb-6">Our Mission</h2>
              <div className="w-16 h-1 bg-amber-500 mb-8"></div>
              <p className="text-lg text-navy-700 leading-relaxed mb-6">
                ukclaims.online was founded on a simple principle: <strong>everyone should have access to justice, regardless of their financial situation.</strong>
              </p>
              <p className="text-lg text-navy-700 leading-relaxed mb-6">
                The financial services industry can be intimidating. When large banks and dealerships engage in unfair practices like hidden Discretionary Commission Arrangements (DCAs), consumers often feel powerless to fight back.
              </p>
              <p className="text-lg text-navy-700 leading-relaxed">
                That's why we built a service that removes the barriers to claiming. We partner exclusively with FCA-authorised solicitors who operate on a strict No Win, No Fee basis, ensuring you never face upfront costs or financial risk to pursue what you're owed.
              </p>
            </div>
            <div className="relative reveal-on-scroll opacity-0 animation-delay-200">
              <div className="aspect-square bg-navy-900 rounded-2xl overflow-hidden relative shadow-2xl p-8 flex flex-col justify-center border-b-8 border-amber-500">
                <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
                <ShieldCheck className="h-24 w-24 text-amber-500 mb-8 opacity-80" />
                <h3 className="font-serif text-3xl text-white mb-4">Integrity First</h3>
                <p className="text-navy-200 text-lg leading-relaxed">
                  We don't make false promises. If we believe you have a strong case, we'll tell you. If we don't, we'll explain why with complete transparency.
                </p>
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[radial-gradient(var(--amber-500)_2px,transparent_2px)] [background-size:16px_16px] opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VALUES */}
      <section className="py-20 bg-white border-y border-navy-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-on-scroll opacity-0">
            <h2 className="font-serif text-4xl text-navy-950 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-navy-600">The pillars of our service commitment to you.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Scale />, title: "No Win, No Fee", desc: "You carry zero financial risk. If your claim isn't successful, you pay absolutely nothing." },
              { icon: <Users />, title: "Expert Partners", desc: "We only work with rigorously vetted, FCA-authorised claims management companies and solicitors." },
              { icon: <Award />, title: "Transparent Process", desc: "No legal jargon. No hidden fees. Just clear, honest communication every step of the way." }
            ].map((value, idx) => (
              <div key={idx} className={`bg-cream rounded-2xl p-8 border border-navy-900/5 hover:border-amber-500/30 transition-colors reveal-on-scroll opacity-0 animation-delay-${(idx+1)*100}`}>
                <div className="bg-amber-100 w-14 h-14 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-3">{value.title}</h3>
                <p className="text-navy-700 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACCREDITATIONS & LEGAL */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-950 rounded-3xl p-10 lg:p-16 text-white relative overflow-hidden shadow-xl reveal-on-scroll opacity-0">
            <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Accreditations & Regulation</h2>
              <div className="w-12 h-1 bg-amber-500 mb-8"></div>
              
              <div className="space-y-6 text-navy-200 leading-relaxed text-lg">
                <p>
                  ukclaims.online is a trading style of <strong className="text-white">Immaculate Ltd</strong>, a company registered in England & Wales.
                </p>
                <p>
                  We take your data privacy seriously. We are registered with the Information Commissioner's Office (ICO) under registration number <strong className="text-white">ZB932467</strong> and adhere strictly to UK GDPR requirements.
                </p>
                <p>
                  We do not provide legal advice ourselves. Instead, we act as a secure bridge, connecting you with specialist solicitors and FCA-authorised claims management companies who have the specific expertise required for your claim type.
                </p>
                
                <div className="pt-6 border-t border-white/10 mt-8">
                  <div className="flex items-center gap-3 text-amber-400 font-bold">
                    <CheckCircle2 className="h-6 w-6" /> Fully compliant with UK marketing regulations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-14 sm:py-20 bg-amber-500 text-navy-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-navy-900 to-transparent"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10 reveal-on-scroll opacity-0">
          <h2 className="font-serif text-3xl sm:text-4xl mb-4 sm:mb-6">Let's find out if you have a claim.</h2>
          <p className="text-base sm:text-xl text-navy-900/80 mb-8 sm:mb-10 font-medium">It's free, secure, and takes less than a minute.</p>
          <Link 
            to="/#claim-form" 
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-navy-950 hover:bg-navy-800 text-white text-lg sm:text-xl font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
          >
            Start My Free Check <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
