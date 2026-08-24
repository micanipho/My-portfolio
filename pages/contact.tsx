// pages/contact.tsx
import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const formspreeResponse = await fetch('https://formspree.io/f/mldlglyq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (formspreeResponse.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage('Failed to send message. Please try again, or email me directly.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 bg-unit-strip border border-unit-border text-unit-bone placeholder-unit-steel focus:outline-none focus:border-unit-orange transition-colors duration-200';
  const labelClasses = 'block font-display text-xs font-medium tracking-[0.14em] uppercase text-unit-steel mb-2';

  return (
    <div className="bg-unit-bg text-unit-bone">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-[3px] h-5 bg-unit-orange inline-block" aria-hidden="true" />
          <span className="font-display text-sm font-semibold tracking-[0.2em] uppercase text-unit-orange">
            Contact
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6 max-w-xl text-pretty">
          Let's talk.
        </h1>
        <p className="text-lg font-light leading-relaxed text-unit-steel-3 max-w-xl text-pretty">
          Hiring, or want to talk through something I've built — the fastest way to reach me is email. The form
          below goes straight there too.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid lg:grid-cols-[minmax(0,1fr)_260px] gap-10">
        {/* Form */}
        <form onSubmit={handleSubmit} className="border border-unit-border bg-unit-panel p-6 sm:p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className={labelClasses}>Name *</label>
              <input
                type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}
                required className={inputClasses} placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClasses}>Email *</label>
              <input
                type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}
                required className={inputClasses} placeholder="you@company.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className={labelClasses}>Subject *</label>
            <input
              type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange}
              required className={inputClasses} placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>Message *</label>
            <textarea
              id="message" name="message" value={formData.message} onChange={handleInputChange}
              required rows={6} className={`${inputClasses} resize-none`} placeholder="Tell me a bit about the role or the project."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full font-display text-sm font-semibold tracking-[0.14em] uppercase bg-unit-orange text-unit-bg px-6 py-3 hover:bg-unit-orange-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isSubmitting ? 'Sending…' : 'Send message'}
          </button>

          {submitStatus === 'success' && (
            <div className="p-4 border border-[#1E4A52] bg-[#0C1F24] text-unit-teal text-sm">
              Message sent — I'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-4 border border-[#5A2A1B] bg-[#1C120D] text-unit-orange text-sm">
              {errorMessage}
            </div>
          )}
        </form>

        {/* Direct contact */}
        <div className="flex flex-col gap-6">
          <div>
            <div className={labelClasses}>Email</div>
            <a href="mailto:nqmasilela777@gmail.com" className="text-sm text-unit-bone hover:text-unit-orange transition-colors duration-200 break-all">
              nqmasilela777@gmail.com
            </a>
          </div>
          <div>
            <div className={labelClasses}>Base</div>
            <p className="text-sm text-unit-bone">Johannesburg, South Africa</p>
          </div>
          <div>
            <div className={labelClasses}>Elsewhere</div>
            <div className="flex flex-col gap-1.5">
              <a href="https://github.com/micanipho" target="_blank" rel="noopener noreferrer" className="text-sm text-unit-bone hover:text-unit-orange transition-colors duration-200">GitHub</a>
              <a href="https://linkedin.com/in/nqmasilela" target="_blank" rel="noopener noreferrer" className="text-sm text-unit-bone hover:text-unit-orange transition-colors duration-200">LinkedIn</a>
            </div>
          </div>
          <div className="pt-2">
            <Link href="/projects" className="font-display text-sm font-semibold tracking-[0.14em] uppercase text-unit-steel-2 hover:text-unit-orange transition-colors duration-200">
              See the work first &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
