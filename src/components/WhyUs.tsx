import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../i18n/translations';

export default function WhyUs() {
  const { language } = useLanguage();
  const { t, tArr } = useTranslation(language);
  const isRtl = language === 'ar';
  const fontAr = language === 'ar' ? { fontFamily: '"Cairo", sans-serif' } : {};
  const reasons = tArr('whyus.reasons');

  return (
    <section className="bg-primary py-20 md:py-28 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">

        {/* Section header */}
        <div className="text-center mb-14">
          <span className={`inline-block text-xs font-semibold uppercase text-secondary mb-3 ${language === 'ar' ? '' : 'tracking-widest'}`} style={fontAr}>
            {t('whyus.label')}
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: language === 'ar' ? '"Cairo", sans-serif' : '"Playfair Display", serif', ...fontAr }}
          >
            {t('whyus.title')}
          </h2>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:-translate-y-1 transition-all duration-200 ${isRtl ? 'text-right' : 'text-center'}`}
            >
              <div className={`mb-4 ${isRtl ? 'flex justify-end' : 'flex justify-center'}`}>
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-white font-semibold text-sm md:text-base leading-snug" style={fontAr}>
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
