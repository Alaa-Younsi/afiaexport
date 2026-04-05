import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../i18n/translations';

// Europe — Eiffel Tower silhouette
const EuropeIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4" aria-hidden="true">
    <circle cx="28" cy="28" r="26" fill="#EFF6FF"/>
    {/* Outer tower silhouette: two angled legs + narrow upper body + spire tip */}
    <polygon points="10,44 19,32 26,18 28,8 30,18 37,32 46,44" fill="#3B82F6" opacity="0.8"/>
    {/* Background-colored cutout — creates the open arch between the two legs */}
    <polygon points="21,44 24,30 28,14 32,30 35,44" fill="#EFF6FF"/>
    {/* First platform crossbar */}
    <rect x="18" y="31" width="20" height="3" rx="1.5" fill="#3B82F6"/>
    {/* Mid-body crossbar */}
    <rect x="23" y="22" width="10" height="2" rx="1" fill="#3B82F6"/>
    {/* Ground platform */}
    <rect x="9" y="44" width="38" height="2.5" rx="1.25" fill="#3B82F6"/>
    {/* Spire tip */}
    <line x1="28" y1="8" x2="28" y2="5" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// Africa — Pyramid with sun
const AfricaIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4" aria-hidden="true">
    <circle cx="28" cy="28" r="26" fill="#FFF5F0"/>
    {/* Desert sun */}
    <circle cx="28" cy="8" r="4.5" fill="#CC1A1A"/>
    {/* Pyramid main face */}
    <polygon points="28,15 11,43 45,43" fill="#CC1A1A" opacity="0.85"/>
    {/* Pyramid shadow face — right half darker */}
    <polygon points="28,15 28,43 45,43" fill="#991010" opacity="0.4"/>
    {/* Sand base */}
    <rect x="10" y="43" width="36" height="3" rx="1.5" fill="#CC1A1A" opacity="0.3"/>
  </svg>
);

// Middle East — Mosque silhouette (dome + two minarets)
const MiddleEastIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4" aria-hidden="true">
    <circle cx="28" cy="28" r="26" fill="#F0FDF4"/>
    {/* Left minaret */}
    <rect x="12" y="22" width="5" height="22" rx="1.5" fill="#16a34a"/>
    <polygon points="14.5,15 12,22 17,22" fill="#16a34a"/>
    {/* Right minaret */}
    <rect x="39" y="22" width="5" height="22" rx="1.5" fill="#16a34a"/>
    <polygon points="41.5,15 39,22 44,22" fill="#16a34a"/>
    {/* Main building body */}
    <rect x="18" y="30" width="20" height="14" rx="1" fill="#16a34a"/>
    {/* Pointed dome arch */}
    <path d="M18,30 Q18,16 28,12 Q38,16 38,30 Z" fill="#16a34a"/>
    {/* Pointed door arch cutout */}
    <path d="M24,44 L24,37 Q28,33 32,37 L32,44 Z" fill="#F0FDF4"/>
  </svg>
);

// Globe SVG for expanding strip
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block mr-2 mb-0.5" aria-hidden="true">
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
    <ellipse cx="12" cy="12" rx="4" ry="10" stroke="white" strokeWidth="1.2"/>
    <line x1="2" y1="12" x2="22" y2="12" stroke="white" strokeWidth="1.2"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="white" strokeWidth="1"/>
  </svg>
);

const marketData = [
  {
    key: 'europe' as const,
    Icon: EuropeIcon,
    descKey: 'markets.europe.desc' as const,
    color: 'bg-blue-50 border-blue-200',
    accentColor: 'text-secondary',
  },
  {
    key: 'africa' as const,
    Icon: AfricaIcon,
    descKey: 'markets.africa.desc' as const,
    color: 'bg-red-50 border-red-200',
    accentColor: 'text-secondary',
  },
  {
    key: 'middleeast' as const,
    Icon: MiddleEastIcon,
    descKey: 'markets.middleeast.desc' as const,
    color: 'bg-green-50 border-green-200',
    accentColor: 'text-green-600',
  },
];

export default function Markets() {
  const { language } = useLanguage();
  const { t, tArr } = useTranslation(language);
  const fontAr = language === 'ar' ? { fontFamily: '"Cairo", sans-serif' } : {};
  const marketNames = tArr('markets.list');

  return (
    <section id="markets" className="relative bg-white py-20 md:py-28 overflow-hidden">

      {/* Decorative world map SVG background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <svg width="900" height="500" viewBox="0 0 900 500" className="text-blue-light opacity-20 w-full max-w-5xl">
          <ellipse cx="450" cy="250" rx="440" ry="240" fill="none" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="450" cy="250" rx="300" ry="240" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <ellipse cx="450" cy="250" rx="160" ry="240" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <line x1="10" y1="250" x2="890" y2="250" stroke="currentColor" strokeWidth="0.8" />
          <line x1="450" y1="10" x2="450" y2="490" stroke="currentColor" strokeWidth="0.8" />
          <ellipse cx="450" cy="250" rx="440" ry="120" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <ellipse cx="450" cy="250" rx="440" ry="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">

        {/* Section header */}
        <div className="text-center mb-14">
          <span className={`inline-block text-xs font-semibold uppercase text-secondary mb-3 ${language === 'ar' ? '' : 'tracking-widest'}`} style={fontAr}>
            {t('markets.label')}
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-dark mb-4"
            style={{ fontFamily: language === 'ar' ? '"Cairo", sans-serif' : '"Playfair Display", serif', ...fontAr }}
          >
            {t('markets.title')}
          </h2>
        </div>

        {/* Market cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {marketData.map((m, i) => (
            <div
              key={m.key}
              className={`border rounded-2xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ${m.color}`}
            >
              <m.Icon />
              <h3 className={`text-xl font-bold mb-3 ${m.accentColor}`} style={fontAr}>
                {marketNames[i]}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" style={fontAr}>
                {t(m.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Expanding note strip */}
        <div className="bg-primary rounded-2xl px-8 py-5 text-center">
          <p className="inline-flex items-center justify-center text-white font-semibold text-base md:text-lg" style={fontAr}>
            <GlobeIcon />
            {t('markets.expanding')}
          </p>
        </div>
      </div>
    </section>
  );
}
