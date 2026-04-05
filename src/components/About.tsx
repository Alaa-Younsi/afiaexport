import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../i18n/translations';

export default function About() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const isRtl = language === 'ar';
  const fontAr = language === 'ar' ? { fontFamily: '"Cairo", sans-serif' } : {};

  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left: Text block */}
          <div className={isRtl ? 'text-right' : ''}>
            <span className={`inline-block text-xs font-semibold uppercase text-primary mb-3 ${language === 'ar' ? '' : 'tracking-widest'}`} style={fontAr}>
              {t('about.label')}
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight"
              style={{ fontFamily: language === 'ar' ? '"Cairo", sans-serif' : '"Playfair Display", serif', ...fontAr }}
            >
              {t('about.title')}
            </h2>
            <div
              className={`${isRtl ? 'border-r-4 border-primary pr-6' : 'border-l-4 border-primary pl-6'} py-1`}
            >
              <p className="text-gray-600 text-base md:text-lg leading-relaxed" style={fontAr}>
                {t('about.description')}
              </p>
            </div>
          </div>

          {/* Right: Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              { num: t('about.stat1.number'), label: t('about.stat1.label') },
              { num: t('about.stat2.number'), label: t('about.stat2.label') },
              { num: t('about.stat3.number'), label: t('about.stat3.label') },
            ].map(({ num, label }) => (
              <div
                key={label}
                className={`bg-surface rounded-2xl p-6 shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200 ${isRtl ? 'text-right' : ''}`}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-playfair" style={fontAr}>
                  {num}
                </div>
                <div className="text-sm text-gray-500 font-medium" style={fontAr}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
