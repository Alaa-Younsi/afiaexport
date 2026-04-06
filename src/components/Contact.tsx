import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../i18n/translations';

const BUSINESS_EMAIL = 'contact@afiaexport.com';
const WHATSAPP_NUMBER = '+213561993175';
const BUSINESS_PHONE = '0554219575';
const BUSINESS_LOCATION = '12 CHEMIN ROMAIN BIRKHADEM ALGER';

export default function Contact() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const isRtl = language === 'ar';
  const fontAr = language === 'ar' ? { fontFamily: '"Cairo", sans-serif' } : {};

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();
    // Basic email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    const subject = encodeURIComponent(`Inquiry from ${name} — AFIA EXPORT Website`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClass = `w-full border border-gray-200 rounded-xl px-4 py-3 text-dark bg-white focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-sm md:text-base ${
    isRtl ? 'text-right' : 'text-left'
  }`;

  return (
    <section id="contact" className="bg-surface py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">

        {/* Section header */}
        <div className="text-center mb-14">
          <span className={`inline-block text-xs font-semibold uppercase text-secondary mb-3 ${language === 'ar' ? '' : 'tracking-widest'}`} style={fontAr}>
            {t('contact.label')}
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-dark"
            style={{ fontFamily: language === 'ar' ? '"Cairo", sans-serif' : '"Playfair Display", serif', ...fontAr }}
          >
            {t('contact.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Contact Form — 2 cols */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-dark font-semibold text-lg text-center" style={fontAr}>
                  {t('contact.success')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium text-dark mb-1.5 ${isRtl ? 'text-right' : ''}`} style={fontAr}>
                      {t('contact.name')} <span className="text-secondary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      style={fontAr}
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium text-dark mb-1.5 ${isRtl ? 'text-right' : ''}`} style={fontAr}>
                      {t('contact.email')} <span className="text-secondary">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      style={fontAr}
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className={`block text-sm font-medium text-dark mb-1.5 ${isRtl ? 'text-right' : ''}`} style={fontAr}>
                    {t('contact.phone')}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    maxLength={30}
                    onChange={handleChange}
                    className={inputClass}
                    style={fontAr}
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium text-dark mb-1.5 ${isRtl ? 'text-right' : ''}`} style={fontAr}>
                    {t('contact.message')} <span className="text-secondary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={2000}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    style={fontAr}
                  />
                </div>
                <button
                  type="submit"
                  className={`bg-primary hover:bg-red-800 text-white rounded-xl px-8 py-3.5 font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${isRtl ? 'w-full' : 'w-full sm:w-auto'}`}
                  style={fontAr}
                >
                  {t('contact.send')}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className={`lg:col-span-1 flex flex-col gap-5 ${isRtl ? 'items-end' : ''}`}>

            {/* WhatsApp button */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl px-6 py-4 font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg w-full ${isRtl ? 'flex-row-reverse text-right' : ''}`}
              style={fontAr}
            >
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t('contact.whatsapp')}
            </a>

            {/* Email card */}
            <div className={`bg-white rounded-2xl p-6 shadow-sm w-full ${isRtl ? 'text-right' : ''}`}>
              <div className={`flex items-center gap-3 mb-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-9 h-9 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-semibold text-dark text-sm" style={fontAr}>Email</span>
              </div>
              <a href={`mailto:${BUSINESS_EMAIL}`} className="text-secondary hover:underline text-sm break-all">
                {BUSINESS_EMAIL}
              </a>
            </div>

            {/* Phone card */}
            <div className={`bg-white rounded-2xl p-6 shadow-sm w-full ${isRtl ? 'text-right' : ''}`}>
              <div className={`flex items-center gap-3 mb-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-9 h-9 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-semibold text-dark text-sm" style={fontAr}>Phone</span>
              </div>
              <a href={`tel:${BUSINESS_PHONE}`} className="text-secondary hover:underline text-sm">
                {BUSINESS_PHONE}
              </a>
            </div>

            {/* Location card */}
            <div className={`bg-white rounded-2xl p-6 shadow-sm w-full ${isRtl ? 'text-right' : ''}`}>
              <div className={`flex items-center gap-3 mb-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-9 h-9 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-dark text-sm" style={fontAr}>Location</span>
              </div>
              <p className="text-secondary text-sm leading-relaxed" style={fontAr}>
                {BUSINESS_LOCATION}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
