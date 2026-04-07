import { useLanguage } from '../context/useLanguage';
import { useTranslation } from '../i18n/translations';

const strengthIcons = [
  // Upward trend
  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" key="0">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
  // Shield check
  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" key="1">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // Truck / delivery
  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" key="2">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0l-8 4-8-4" />
  </svg>,
  // Building / project
  <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" key="3">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
];

export default function Strengths() {
  const { language } = useLanguage();
  const { t, tArr } = useTranslation(language);
  const isRtl = language === 'ar';
  const fontAr = language === 'ar' ? { fontFamily: '"Cairo", sans-serif' } : {};
  const items = tArr('strengths.items');

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage: "url('/background2.jpeg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/60 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">

        {/* Section header */}
        <div className={`text-center mb-14 ${isRtl ? 'font-cairo' : ''}`}>
          <span className={`inline-block text-xs font-semibold uppercase text-white/70 mb-3 ${language === 'ar' ? '' : 'tracking-widest'}`} style={fontAr}>
            {t('strengths.label')}
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: language === 'ar' ? '"Cairo", sans-serif' : '"Playfair Display", serif', ...fontAr }}
          >
            {t('strengths.title')}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ${isRtl ? 'text-right' : ''}`}
            >
              <div className={`mb-4 ${isRtl ? 'flex justify-end' : ''}`}>
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  {strengthIcons[i]}
                </div>
              </div>
              <p className="text-dark font-semibold text-sm md:text-base leading-snug" style={fontAr}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
