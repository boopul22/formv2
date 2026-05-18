import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Loader2, AlertCircle, Lock, ShieldCheck, Star } from 'lucide-react';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  claimType: string;
  description: string;
  optIn: boolean;
}

const initialFormState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  claimType: 'car_finance',
  description: '',
  optIn: false,
};

const ClaimForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string>('');

  useEffect(() => {
    // Attempt to fetch API key from worker
    fetch('/api/config')
      .then(res => res.json())
      .then((data: { WEB3_FORM_API?: string }) => {
        if (data && data.WEB3_FORM_API) setApiKey(data.WEB3_FORM_API);
      })
      .catch(() => console.log('Using default form config'));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, optIn: e.target.checked }));
    if (e.target.checked) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.optIn) {
      setError("Please agree to the Terms & Privacy Policy to proceed.");
      return;
    }
    setError(null);
    setIsSubmitting(true);

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: apiKey,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          subject: `New Claim Enquiry - ${formData.firstName} ${formData.lastName}`,
          claim_type: formData.claimType,
          message: formData.description,
          consent: 'User agreed to Terms & Privacy Policy and consented to contact',
        }),
      });
    } catch (err) {
      // Lead capture is best-effort; always proceed to redirect.
    }

    window.location.href = 'https://im.c3claims.co.uk/';
  };

  if (submissionResult) {
    return (
      <div className="bg-white rounded-2xl shadow-xl px-5 sm:px-10 py-8 sm:py-10 text-center border-t-4 border-green-500 animate-fade-up relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-green-50 opacity-50 pointer-events-none"></div>
        
        <div className="mx-auto flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-green-100 mb-5 relative">
          <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-green-600 animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
        
        <h3 className="font-serif text-2xl sm:text-3xl text-navy-950 mb-3">Claim Received</h3>
        <p className="text-navy-700/80 mb-6 max-w-sm mx-auto leading-relaxed text-sm sm:text-base">
          Thank you! Your details have been securely submitted. An expert from our FCA-authorised panel will be in touch within 24 hours.
        </p>
        
        <button
          onClick={() => {
            setSubmissionResult(false);
            setFormData(initialFormState);
          }}
          className="w-full text-navy-600 font-bold hover:text-navy-800 transition-colors py-3 px-6 rounded-xl border border-navy-100 hover:bg-navy-50"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <div id="claim-form" className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-amber-500 relative">
      {/* Form Header */}
      <div className="px-4 sm:px-8 pt-3 sm:pt-8 pb-2 sm:pb-4 text-center">
        <div className="inline-flex items-center justify-center gap-1.5 bg-amber-100 text-amber-700 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-4">
          <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Free Eligibility Check
        </div>
        <h2 className="font-serif text-xl sm:text-3xl text-navy-950 leading-tight mb-1 sm:mb-2">
          Check Your Eligibility
        </h2>
        <p className="text-navy-700/70 text-[10px] sm:text-sm">Takes 60 seconds • No obligation</p>
      </div>

      <form onSubmit={handleSubmit} className="px-4 sm:px-8 pb-3 sm:pb-8 space-y-2 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
          <div>
            <label htmlFor="firstName" className="block text-[10px] sm:text-xs font-bold text-navy-900 mb-1 sm:mb-1.5 tracking-wide">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-cream/50 border border-navy-900/10 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-navy-950 placeholder:text-navy-900/30 text-base"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-[10px] sm:text-xs font-bold text-navy-900 mb-1 sm:mb-1.5 tracking-wide">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-cream/50 border border-navy-900/10 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-navy-950 placeholder:text-navy-900/30 text-base"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
          <div className="col-span-1">
            <label htmlFor="email" className="block text-[10px] sm:text-xs font-bold text-navy-900 mb-1 sm:mb-1.5 tracking-wide">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-cream/50 border border-navy-900/10 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-navy-950 placeholder:text-navy-900/30 text-base"
              placeholder="you@example.com"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="phone" className="block text-[10px] sm:text-xs font-bold text-navy-900 mb-1 sm:mb-1.5 tracking-wide">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-cream/50 border border-navy-900/10 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-navy-950 placeholder:text-navy-900/30 text-base"
              placeholder="07700 900000"
            />
          </div>
        </div>

        {/* Claim Type - Hidden visually but kept in form state to maintain structure if they want to expand later. Hardcoded visually to car finance for now to streamline, or we can leave the select. The prompt is for car finance claims specifically. Let's make it a select with Car Finance as default. */}
        <div>
          <label htmlFor="claimType" className="block text-[10px] sm:text-xs font-bold text-navy-900 mb-1 sm:mb-1.5 tracking-wide">Type of Claim</label>
          <div className="relative">
            <select
              id="claimType"
              name="claimType"
              value={formData.claimType}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-cream/50 border border-navy-900/10 rounded-xl focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none text-navy-950 font-medium text-base"
            >
              <option value="car_finance">Car Finance (DCA) Claim</option>
              <option value="housing">Housing Disrepair</option>
              <option value="injury">Personal Injury</option>
              <option value="medical">Medical Negligence</option>
              <option value="other">Other Enquiry</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-navy-400">
              <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>

        {/* Opt-in Section */}
        <div className={`px-2.5 py-2 sm:p-4 rounded-xl border transition-all duration-200 ${error && !formData.optIn ? 'bg-red-50 border-red-200 shadow-[0_0_0_2px_rgba(220,38,38,0.1)]' : 'bg-cream border-navy-900/5 hover:border-amber-500/30'}`}>
          <label className="flex items-start gap-2.5 cursor-pointer group">
            <div className="flex items-center h-4 mt-0.5 flex-shrink-0">
              <input
                type="checkbox"
                name="optIn"
                checked={formData.optIn}
                onChange={handleCheckboxChange}
                className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 border-navy-200 rounded focus:ring-amber-500 focus:ring-offset-1 cursor-pointer transition-colors"
              />
            </div>
            <div className="text-[10px] sm:text-[11px] text-navy-700/80 leading-snug group-hover:text-navy-900 transition-colors">
              <span className="font-bold text-navy-950">I agree to the <Link to="/terms" className="underline hover:text-amber-600" target="_blank">Terms</Link> & <Link to="/privacy-policy" className="underline hover:text-amber-600" target="_blank">Privacy Policy</Link></span>. 
              I consent to my details being shared with FCA-authorised claims companies to discuss a potential mis-sold vehicle finance claim.
            </div>
          </label>
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-xl border border-red-100 animate-fade-up">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <span className="font-medium">{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full relative flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:from-amber-600 active:to-amber-700 text-navy-950 text-base sm:text-lg font-bold py-3 sm:py-4 px-6 rounded-xl shadow-gold hover:shadow-glow transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none overflow-hidden group mt-1 sm:mt-4"
        >
          {/* Button shine effect */}
          <div className="absolute inset-0 -translate-x-full bg-white/20 group-hover:animate-[shimmer_1.5s_infinite] skew-x-12"></div>
          
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Processing Securely...
            </>
          ) : (
            <>
              Check My Eligibility <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        {/* Trust Signals Under Button — hidden on mobile to save space */}
        <div className="hidden sm:flex flex-row items-center justify-center sm:justify-between gap-4 sm:gap-3 pt-4 border-t border-navy-900/5 mt-4 sm:mt-6 flex-wrap">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-navy-700/60 uppercase tracking-wider">
            <Lock className="h-3.5 w-3.5" /> 256-bit Secure
          </div>
          <div className="flex items-center gap-1">
            <div className="flex text-amber-500">
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
            </div>
            <span className="text-[11px] font-bold text-navy-700/60 ml-1">4.8/5 RATING</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClaimForm;
