import React from 'react';
import ClaimForm from '../components/ClaimForm';
import { CheckCircle2 } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-start lg:items-center bg-navy-950 bg-noise overflow-hidden pt-20 sm:pt-24 pb-10 sm:pb-12 lg:pt-28 lg:pb-16">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-navy-800 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-8 items-center">
          {/* Left content — shown below form on mobile, left on desktop */}
          <div className="lg:col-span-7 lg:pr-8 animate-fade-up order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-5">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-white/80">Taking on new claims today</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-4 sm:mb-5">
              Were You Overcharged on <span className="text-amber-400">Car Finance?</span>
            </h1>

            <p className="text-sm sm:text-lg text-white/70 leading-relaxed max-w-2xl mb-5 sm:mb-6">
              Thousands of UK drivers are owed money from mis-sold car finance agreements. Find out if you qualify in under 60 seconds.
            </p>

            <ul className="space-y-2.5 sm:space-y-3 text-white/90 font-medium mb-2 lg:mb-0">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-amber-500/20 p-1 rounded-full text-amber-400 flex-shrink-0"><CheckCircle2 className="h-5 w-5" /></div>
                <span>100% No Win, No Fee*</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-amber-500/20 p-1 rounded-full text-amber-400 flex-shrink-0"><CheckCircle2 className="h-5 w-5" /></div>
                <span>Free Eligibility Assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-amber-500/20 p-1 rounded-full text-amber-400 flex-shrink-0"><CheckCircle2 className="h-5 w-5" /></div>
                <span>Partners Authorised by the FCA</span>
              </li>
            </ul>
          </div>

          {/* Form — shown first on mobile, right on desktop */}
          <div className="lg:col-span-5 relative animate-fade-up animation-delay-200 order-1 lg:order-2">
            <ClaimForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
