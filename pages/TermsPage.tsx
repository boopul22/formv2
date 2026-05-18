import React, { useEffect } from 'react';
import { Scale, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 bg-navy-950 text-amber-500 rounded-2xl mb-6 shadow-lg">
            <Scale className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-navy-950 mb-4">Terms & Conditions</h1>
          <p className="text-navy-600">Last updated: April 24, 2026</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-navy-900/5 p-8 md:p-12 prose prose-navy max-w-none text-navy-700 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-navy-950 mt-10 mb-4 border-b border-navy-100 pb-2">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your access to and use of the ukclaims.online website (the "Site") and any services provided by Immaculate Ltd ("we", "our", or "us"). 
            </p>
            <p className="mt-4">
              By accessing our Site, submitting a form, or using our services, you confirm that you accept these Terms and agree to comply with them. If you do not agree to these Terms, you must not use our Site or services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-950 mt-10 mb-4 border-b border-navy-100 pb-2">2. Our Services</h2>
            <p>
              ukclaims.online is a claims marketing platform. We assist individuals in determining whether they might be eligible to make a claim for financial mis-selling (such as car finance DCA claims), housing disrepair, or personal injury. 
            </p>
            <div className="bg-navy-50 rounded-xl p-6 border border-navy-100 mt-4">
              <h3 className="font-bold text-navy-950 mb-2 mt-0">Important Disclosure</h3>
              <p className="m-0 text-sm">
                We are <strong>not</strong> a law firm, a solicitors' firm, or an insurance company. We do not provide legal advice. We act as a bridge, introducing your enquiry to FCA-authorised claims management companies and regulated solicitors who can manage your claim.
              </p>
            </div>
            <p className="mt-4">
              You are not required to use a claims management company to pursue your claim. You can contact the responsible party directly for free. If your claim is unsuccessful, you can refer it to the Financial Ombudsman Service or the Financial Services Compensation Scheme for free.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-950 mt-10 mb-4 border-b border-navy-100 pb-2">3. Eligibility</h2>
            <p>To use our services, you must:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Be a resident of the United Kingdom.</li>
              <li>Be at least 18 years of age.</li>
              <li>Have the legal capacity to enter into binding contracts.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-950 mt-10 mb-4 border-b border-navy-100 pb-2">4. User Responsibilities</h2>
            <p>When using our Site and submitting an enquiry, you agree that you will:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Provide accurate, honest, and complete information regarding your potential claim.</li>
              <li>Not submit false or misleading information.</li>
              <li>Not use our Site in any way that breaches any applicable local, national, or international law or regulation.</li>
              <li>Not attempt to gain unauthorised access to our Site, the server on which our Site is stored, or any server, computer, or database connected to our Site.</li>
            </ul>
            <p className="mt-4">
              Providing false information may result in your claim being rejected by our partners and could lead to financial penalties from the solicitors if they incur costs investigating a fraudulent claim.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-950 mt-10 mb-4 border-b border-navy-100 pb-2">5. "No Win, No Fee" Agreements</h2>
            <p>
              If your enquiry is accepted by one of our legal partners, they will typically offer to represent you on a "No Win, No Fee" basis (Conditional Fee Agreement). 
            </p>
            <p className="mt-4">
              This means you will not pay any upfront costs, and you will only pay a fee if your claim is successful. The specific fee percentage will be agreed upon directly between you and the solicitor before you instruct them. We do not set or collect these fees. Cancellation charges may apply if you cancel the agreement with the solicitor outside of the statutory cooling-off period.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-950 mt-10 mb-4 border-b border-navy-100 pb-2">6. Intellectual Property</h2>
            <p>
              All intellectual property rights in our Site and the material published on it (including text, graphics, logos, images, and software) are owned by or licensed to Immaculate Ltd. Those works are protected by copyright laws and treaties around the world. All such rights are reserved.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-950 mt-10 mb-4 border-b border-navy-100 pb-2">7. Limitation of Liability</h2>
            <p>
              Nothing in these Terms excludes or limits our liability for death or personal injury arising from our negligence, or our fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by English law.
            </p>
            <p className="mt-4">
              To the extent permitted by law, we exclude all conditions, warranties, representations, or other terms which may apply to our Site or any content on it, whether express or implied.
            </p>
            <p className="mt-4">
              We will not be liable to any user for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Use of, or inability to use, our Site.</li>
              <li>Use of or reliance on any content displayed on our Site.</li>
              <li>The outcome of any claim processed by a third-party legal partner.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-950 mt-10 mb-4 border-b border-navy-100 pb-2">8. Data Protection</h2>
            <p>
              We will only use your personal information as set out in our <Link to="/privacy-policy" className="text-amber-600 hover:text-amber-700 underline">Privacy Policy</Link>. By using our Site, you consent to such processing and you warrant that all data provided by you is accurate.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-950 mt-10 mb-4 border-b border-navy-100 pb-2">9. Changes to These Terms</h2>
            <p>
              We may revise these Terms at any time by amending this page. Please check this page from time to time to take notice of any changes we made, as they are binding on you.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-navy-950 mt-10 mb-4 border-b border-navy-100 pb-2">10. Governing Law and Jurisdiction</h2>
            <p>
              These Terms, their subject matter and their formation, are governed by English law. You and we both agree that the courts of England and Wales will have exclusive jurisdiction.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-navy-100">
            <h2 className="font-serif text-2xl text-navy-950 mb-6">Need to speak with us?</h2>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="mailto:support@ukclaims.online" className="flex items-center justify-between gap-4 bg-navy-950 text-white p-6 rounded-xl hover:bg-navy-900 transition-colors group flex-1">
                <div>
                  <p className="text-sm text-navy-200 mb-1 uppercase tracking-wider font-bold">Email Support</p>
                  <p className="text-xl font-bold">support@ukclaims.online</p>
                </div>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link to="/#claim-form" className="flex items-center justify-between gap-4 bg-amber-500 text-navy-950 p-6 rounded-xl hover:bg-amber-400 transition-colors group flex-1">
                <div>
                  <p className="text-sm text-navy-900/70 mb-1 uppercase tracking-wider font-bold">Ready to proceed?</p>
                  <p className="text-xl font-bold">Start Your Claim</p>
                </div>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
