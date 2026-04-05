import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../i18n/translations';

export default function Products() {
  const { language } = useLanguage();
  const { t, tArr } = useTranslation(language);
  const [activeTab, setActiveTab] = useState<'cement' | 'clinker'>('cement');
  const isRtl = language === 'ar';
  const fontAr = language === 'ar' ? { fontFamily: '"Cairo", sans-serif' } : {};

  const cementTypes = tArr('products.cement.types');
  const cementFeatures = tArr('products.cement.features');
  const clinkerFeatures = tArr('products.clinker.features');

  return (
    <section id="products" className="bg-surface py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">

        {/* Section header */}
        <div className={`text-center mb-10 ${isRtl ? '' : ''}`}>
          <span className={`inline-block text-xs font-semibold uppercase text-primary mb-3 ${language === 'ar' ? '' : 'tracking-widest'}`} style={fontAr}>
            {t('products.label')}
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-dark"
            style={{ fontFamily: language === 'ar' ? '"Cairo", sans-serif' : '"Playfair Display", serif', ...fontAr }}
          >
            {t('products.title')}
          </h2>
        </div>

        {/* Tab switcher */}
        <div className={`flex justify-center mb-10 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <div className="flex bg-white rounded-2xl p-1.5 shadow-sm gap-1">
            <button
              onClick={() => setActiveTab('cement')}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'cement' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-primary'
              }`}
              aria-pressed={activeTab === 'cement'}
              style={fontAr}
            >
              {t('products.cement.tab')}
            </button>
            <button
              onClick={() => setActiveTab('clinker')}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'clinker' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-primary'
              }`}
              aria-pressed={activeTab === 'clinker'}
              style={fontAr}
            >
              {t('products.clinker.tab')}
            </button>
          </div>
        </div>

        {/* Content panel */}
        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
          {activeTab === 'cement' ? (
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-start ${isRtl ? 'md:flex md:flex-row-reverse' : ''}`}>
              <div className={isRtl ? 'text-right' : ''}>
                <h3
                  className="text-2xl md:text-3xl font-bold text-dark mb-6"
                  style={{ fontFamily: language === 'ar' ? '"Cairo", sans-serif' : '"Playfair Display", serif', ...fontAr }}
                >
                  {t('products.cement.title')}
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3" style={fontAr}>
                  Available Types
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {cementTypes.map((type) => (
                    <span
                      key={type}
                      className="inline-flex items-center bg-primary/10 text-primary font-semibold rounded-xl px-4 py-2 text-sm"
                      style={fontAr}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              <div className={isRtl ? 'text-right' : ''}>
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4" style={fontAr}>
                  Key Features
                </p>
                <ul className="space-y-3">
                  {cementFeatures.map((feat) => (
                    <li key={feat} className={`inline-flex items-center gap-2 bg-green-50 text-green-700 rounded-full px-4 py-2 text-sm font-medium mr-2 mb-2 ${isRtl ? 'flex-row-reverse' : ''}`} style={fontAr}>
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className={isRtl ? 'text-right' : ''}>
              <h3
                className="text-2xl md:text-3xl font-bold text-dark mb-6"
                style={{ fontFamily: language === 'ar' ? '"Cairo", sans-serif' : '"Playfair Display", serif', ...fontAr }}
              >
                {t('products.clinker.title')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {clinkerFeatures.map((feat) => (
                  <div
                    key={feat}
                    className={`flex items-start gap-3 bg-surface rounded-xl p-4 ${isRtl ? 'flex-row-reverse text-right' : ''}`}
                  >
                    <div className="w-8 h-8 bg-secondary/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-dark font-medium text-sm md:text-base" style={fontAr}>
                      {feat}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
