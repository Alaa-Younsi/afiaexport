import { useLanguage } from '../context/useLanguage';
import { useTranslation } from '../i18n/translations';

const activityIcons = [
  // Factory / cement
  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" key="0">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  // Package / clinker
  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" key="1">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4-8-4m8 4v10M4 7v10l8 4 8-10V7" />
  </svg>,
  // Stack / bulk
  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" key="2">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  </svg>,
  // Ship / logistics
  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" key="3">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>,
];

export default function Activities() {
  const { language } = useLanguage();
  const { t, tActivities } = useTranslation(language);
  const isRtl = language === 'ar';
  const fontAr = language === 'ar' ? { fontFamily: '"Cairo", sans-serif' } : {};
  const items = tActivities();

  return (
    <section id="activities" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">

        {/* Section header */}
        <div className={`text-center mb-14 ${isRtl ? '' : ''}`}>
          <span className={`inline-block text-xs font-semibold uppercase text-secondary mb-3 ${language === 'ar' ? '' : 'tracking-widest'}`} style={fontAr}>
            {t('activities.label')}
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-dark"
            style={{ fontFamily: language === 'ar' ? '"Cairo", sans-serif' : '"Playfair Display", serif', ...fontAr }}
          >
            {t('activities.title')}
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`bg-white border border-blue-light rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ${isRtl ? 'text-right' : ''}`}
            >
              <div className={`mb-4 ${isRtl ? 'flex justify-end' : ''}`}>
                <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center">
                  {activityIcons[i]}
                </div>
              </div>
              <h3 className="text-dark font-bold text-base md:text-lg mb-2" style={fontAr}>
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed" style={fontAr}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
