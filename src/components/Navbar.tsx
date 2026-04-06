import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../i18n/translations';

const navKeys = ['nav.about', 'nav.activities', 'nav.products', 'nav.markets', 'nav.contact'] as const;
const navAnchors = ['about', 'activities', 'products', 'markets', 'contact'];

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation(language);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isRtl = language === 'ar';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-md py-2' : 'bg-primary/95 backdrop-blur-sm py-[14px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" aria-label="AFIA EXPORT Home">
          <img
            src="/logo.png"
            alt="AFIA EXPORT Logo"
            className={`transition-all duration-300 object-contain ${scrolled ? 'h-10' : 'h-[67px]'}`}
            loading="eager"
            fetchPriority="high"
          />
        </a>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center gap-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
          {navKeys.map((key, i) => (
            <a
              key={key}
              href={`#${navAnchors[i]}`}
              className="text-white font-bold hover:text-white/75 transition-colors duration-200 text-sm"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        {/* Language Switcher + Mobile Burger */}
        <div className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
          {/* Language pills */}
          <div className="flex items-center gap-1 bg-white/20 rounded-full p-1">
            {(['en', 'fr', 'ar'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                  language === lang
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-white/80 hover:text-white'
                }`}
                aria-pressed={language === lang}
                aria-label={`Switch to ${lang.toUpperCase()}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className="flex md:hidden flex-col gap-1.5 p-2 rounded-lg hover:bg-white/20 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-white/20 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navKeys.map((key, i) => (
              <a
                key={key}
                href={`#${navAnchors[i]}`}
                onClick={() => setMenuOpen(false)}
                className={`py-3 px-4 text-white font-medium hover:text-white/75 hover:bg-white/10 rounded-xl transition-all ${isRtl ? 'text-right' : 'text-left'}`}
              >
                {t(key)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
