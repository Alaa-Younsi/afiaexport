import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../i18n/translations';

const trustBadges = [
  {
    key: 'hero.badge1' as const,
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11" aria-hidden="true">
        {/* Factory / industrial plant */}
        <rect x="4" y="28" width="40" height="16" rx="2" fill="#D94E2A" opacity="0.9"/>
        <rect x="8" y="20" width="8" height="8" rx="1" fill="#D94E2A"/>
        <rect x="22" y="16" width="6" height="12" rx="1" fill="#D94E2A"/>
        <rect x="34" y="22" width="6" height="6" rx="1" fill="#D94E2A"/>
        {/* Smokestacks */}
        <rect x="9" y="10" width="3" height="10" rx="1.5" fill="white" opacity="0.8"/>
        <rect x="23" y="6" width="3" height="10" rx="1.5" fill="white" opacity="0.8"/>
        <rect x="35" y="12" width="3" height="10" rx="1.5" fill="white" opacity="0.8"/>
        {/* Crescent + star Algeria motif */}
        <circle cx="38" cy="8" r="4" fill="none" stroke="white" strokeWidth="1.2"/>
        <circle cx="39.4" cy="8" r="2.8" fill="#D94E2A" opacity="0.9"/>
        <polygon points="38,3.5 38.5,5.2 40.3,5.2 38.9,6.2 39.4,8 38,7 36.6,8 37.1,6.2 35.7,5.2 37.5,5.2" fill="white" transform="scale(0.55) translate(30,-2)"/>
      </svg>
    ),
  },
  {
    key: 'hero.badge2' as const,
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11" aria-hidden="true">
        {/* Hull */}
        <path d="M4 30 Q24 38 44 30 L40 36 Q24 44 8 36 Z" fill="#D94E2A" opacity="0.9"/>
        {/* Deck / body */}
        <rect x="10" y="20" width="28" height="10" rx="2" fill="white" opacity="0.9"/>
        {/* Bridge */}
        <rect x="28" y="13" width="8" height="7" rx="1" fill="white" opacity="0.9"/>
        {/* Container boxes */}
        <rect x="12" y="22" width="6" height="6" rx="1" fill="#5B9BD5"/>
        <rect x="20" y="22" width="6" height="6" rx="1" fill="#D94E2A" opacity="0.7"/>
        {/* Mast */}
        <line x1="32" y1="4" x2="32" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="28" y1="8" x2="36" y2="8" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        {/* Waves */}
        <path d="M2 38 Q8 35 14 38 Q20 41 26 38 Q32 35 38 38 Q44 41 46 38" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.6"/>
      </svg>
    ),
  },
  {
    key: 'hero.badge3' as const,
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11" aria-hidden="true">
        {/* Shield */}
        <path d="M24 4 L40 10 L40 26 Q40 36 24 44 Q8 36 8 26 L8 10 Z" fill="#D94E2A" opacity="0.85"/>
        <path d="M24 8 L36 13 L36 26 Q36 34 24 40 Q12 34 12 26 L12 13 Z" fill="white" opacity="0.15"/>
        {/* Big checkmark */}
        <path d="M16 24 L21 30 L32 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Small stars top corners */}
        <circle cx="14" cy="10" r="1.5" fill="white" opacity="0.7"/>
        <circle cx="34" cy="10" r="1.5" fill="white" opacity="0.7"/>
        {/* Text band at bottom of shield */}
        <rect x="14" y="33" width="20" height="5" rx="2" fill="white" opacity="0.2"/>
      </svg>
    ),
  },
];

export default function Hero() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const isRtl = language === 'ar';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background image — desktop (md and above) ── */}
      <div
        className="absolute inset-0 hero-bg hidden md:block"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(1.5px)',
          transform: 'scale(1.03)',
        }}
        aria-hidden="true"
      />

      {/* ── Background image — mobile only ── */}
      <div
        className="absolute inset-0 phone-hero-bg block md:hidden"
        style={{
          backgroundImage: "url('/phonebg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(1.5px)',
          transform: 'scale(1.03)',
        }}
        aria-hidden="true"
      />

      {/* ── Vignette overlay (dark edges, clear center) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 40% 50%, transparent 25%, rgba(0,0,0,0.45) 75%, rgba(0,0,0,0.70) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Subtle dark tint so text is always readable ── */}
      <div className="absolute inset-0 bg-dark/30 pointer-events-none" aria-hidden="true" />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 pt-32 md:pt-28 pb-12 md:pb-16 w-full">
        <div className={`max-w-2xl ${isRtl ? 'ml-auto mr-0 text-right' : 'ml-0 text-left'}`}>

          {/* Label */}
          <span
            className={`inline-block text-xs font-semibold uppercase text-white/80 bg-white/15 border border-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 animate-fade-in ${language === 'ar' ? '' : 'tracking-widest'}`}
            style={{ fontFamily: language === 'ar' ? '"Cairo", sans-serif' : 'inherit' }}
          >
            {t('hero.label')}
          </span>

          {/* Main headline */}
          <h1
            className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up drop-shadow-lg"
            style={{ fontFamily: language === 'ar' ? '"Cairo", sans-serif' : '"Playfair Display", serif' }}
          >
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p
            className="text-base md:text-xl text-secondary leading-relaxed mb-8 md:mb-10 max-w-xl animate-fade-in-delay font-semibold"
            style={{
              fontFamily: language === 'ar' ? '"Cairo", sans-serif' : '"DM Sans", sans-serif',
              textShadow: '0 1px 4px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.5)',
            }}
          >
            {t('hero.subtitle')}
          </p>

          {/* CTA buttons */}
          <div className={`flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 ${isRtl ? 'items-end' : 'items-start'}`}>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              {t('hero.cta')}
              <svg className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white hover:bg-white hover:text-dark font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm w-full sm:w-auto"
            >
              {t('hero.cta2')}
            </a>
          </div>

          {/* Trust badges — high-quality SVG cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 md:mt-12 pt-8 border-t border-white/20">
            {trustBadges.map(({ key, svg }) => (
              <div
                key={key}
                className={`flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 hover:bg-white/18 transition-all duration-200 ${isRtl ? 'flex-row-reverse' : ''}`}
              >
                {svg}
                <span className="text-white font-semibold text-sm leading-snug" style={{ fontFamily: language === 'ar' ? '"Cairo", sans-serif' : 'inherit' }}>{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}

