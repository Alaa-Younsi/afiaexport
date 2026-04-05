import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../i18n/translations';

function TargetIcon() {
  return (
    <svg className="w-10 h-10 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="6" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" strokeWidth="1.5" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg className="w-10 h-10 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C12 2 8 6 8 12c0 2.5 1 4.5 2 6l2 2 2-2c1-1.5 2-3.5 2-6 0-6-4-10-4-10z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12c-2 1-3.5 2.5-4 4.5M16 12c2 1 3.5 2.5 4 4.5" />
      <circle cx="12" cy="12" r="2" strokeWidth="1.5" />
    </svg>
  );
}

export default function Mission() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const isRtl = language === 'ar';
  const fontAr = language === 'ar' ? { fontFamily: '"Cairo", sans-serif' } : {};

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Mission Card */}
          <div
            className={`bg-primary rounded-2xl p-8 md:p-10 text-white shadow-lg ${isRtl ? 'text-right' : ''}`}
          >
            <div className={`mb-5 ${isRtl ? 'flex justify-end' : ''}`}>
              <TargetIcon />
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: language === 'ar' ? '"Cairo", sans-serif' : '"Playfair Display", serif', ...fontAr }}
            >
              {t('mission.title')}
            </h3>
            <p className="text-white/85 leading-relaxed text-base md:text-lg" style={fontAr}>
              {t('mission.text')}
            </p>
          </div>

          {/* Vision Card */}
          <div
            className={`bg-secondary rounded-2xl p-8 md:p-10 text-white shadow-lg ${isRtl ? 'text-right' : ''}`}
          >
            <div className={`mb-5 ${isRtl ? 'flex justify-end' : ''}`}>
              <RocketIcon />
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: language === 'ar' ? '"Cairo", sans-serif' : '"Playfair Display", serif', ...fontAr }}
            >
              {t('vision.title')}
            </h3>
            <p className="text-white/85 leading-relaxed text-base md:text-lg" style={fontAr}>
              {t('vision.text')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
