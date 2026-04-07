import { useState } from 'react';
import { useLanguage } from '../context/useLanguage';
import { useTranslation } from '../i18n/translations';

// ─────────────────────────────────────────────────────────────────────────────
// Replace empty strings with actual image paths once you upload the files.
// Example: '/documents/spec1.jpg'
// Technical Specifications — 5 documents × 2 sides (front then back), ftechnique10 pending
const SPEC_IMAGES: string[] = [
  '/ftechnique1.png', // doc 1 — front
  '/ftechnique2.png', // doc 1 — back
  '/ftechnique3.png', // doc 2 — front
  '/ftechnique4.png', // doc 2 — back
  '/ftechnique5.png', // doc 3 — front
  '/ftechnique6.png', // doc 3 — back
  '/ftechnique7.png', // doc 4 — front
  '/ftechnique8.png', // doc 4 — back
  '/ftechnique9.png', // doc 5 — front
  '',                 // doc 5 — back (ftechnique10 pending upload)
];

// Certifications — 3 certificates
const CERT_IMAGES: string[] = [
  '/certificate%201.jpeg',
  '/certificate2.jpeg',
  '/certificate3.jpeg',
];

// European Certifications — 4 certificates
const EURO_CERT_IMAGES: string[] = [
  '/eurocertificate1.jpeg',
  '/eurocertificate2.jpeg',
  '/eurocertificate3.jpeg',
  '/eurocertificate4.jpeg',
];
// ─────────────────────────────────────────────────────────────────────────────

// ── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ src, label, onClose }: { src: string; label: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={label}
          className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
        />
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Thumbnail slot ────────────────────────────────────────────────────────────
function ImageSlot({ src, label, onOpen, description, natural }: {
  src: string;
  label: string;
  onOpen?: () => void;
  description?: string;
  natural?: boolean;
}) {
  if (src) {
    return (
      <button
        onClick={onOpen}
        className="group rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary text-left w-full"
        aria-label={`View ${label}`}
      >
        {/* Image + zoom overlay */}
        <div className="relative">
          <img
            src={src}
            alt={label}
            className={natural ? 'w-full h-auto block' : 'w-full aspect-[3/4] object-contain'}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2 shadow">
              <svg className="w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        </div>
        {/* Label + optional description */}
        <div className="px-3 py-2">
          <p className="text-xs font-semibold text-gray-700 text-center truncate">{label}</p>
          {description && (
            <p className="text-xs text-gray-500 text-center mt-1 leading-relaxed">{description}</p>
          )}
        </div>
      </button>
    );
  }
  return (
    <div className={`${natural ? 'min-h-40' : 'aspect-[3/4]'} border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 bg-white/80`}>
      <svg
        className="w-8 h-8 text-gray-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p className="text-gray-400 text-xs text-center px-3">{label}</p>
    </div>
  );
}

export default function Documents() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const [activeTab, setActiveTab] = useState<'certs' | 'euro' | 'specs'>('euro');
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  return (
    <section id="documents" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">

        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            {t('documents.label')}
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-dark"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {t('documents.title')}
          </h2>
        </div>

        {/* Tab switcher — European Certifications first */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-wrap justify-center bg-surface rounded-2xl p-1.5 shadow-sm gap-1">
            <button
              onClick={() => setActiveTab('euro')}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'euro'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:text-primary'
              }`}
              aria-pressed={activeTab === 'euro'}
            >
              {t('documents.eurocerts.tab')}
            </button>
            <button
              onClick={() => setActiveTab('certs')}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'certs'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:text-primary'
              }`}
              aria-pressed={activeTab === 'certs'}
            >
              {t('documents.certs.tab')}
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'specs'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:text-primary'
              }`}
              aria-pressed={activeTab === 'specs'}
            >
              {t('documents.specs.tab')}
            </button>
          </div>
        </div>

        {/* Euro tagline — shown only under the tab bar when euro is active */}
        {activeTab === 'euro' && (
          <p className="text-center text-sm text-gray-500 italic mb-8 max-w-2xl mx-auto">
            {t('documents.eurocerts.tagline')}
          </p>
        )}

        {/* Content panel */}
        <div className="bg-surface rounded-3xl shadow-sm p-8 md:p-12">
          {activeTab === 'certs' ? (
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
                {t('documents.certs.subtitle')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {CERT_IMAGES.map((src, i) => {
                  const label = `${t('documents.cert.item')} ${i + 1}`;
                  return (
                    <div key={i} className="w-40 sm:w-48 shrink-0">
                      <ImageSlot
                        src={src}
                        label={label}
                        onOpen={src ? () => setLightbox({ src, label }) : undefined}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : activeTab === 'euro' ? (
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                {t('documents.eurocerts.subtitle')}
              </p>
              <p className="text-sm text-gray-500 text-center italic mb-8 max-w-2xl mx-auto">
                {t('documents.eurocerts.notice')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {EURO_CERT_IMAGES.map((src, i) => {
                  const label = `${t('documents.eurocert.item')} ${i + 1}`;
                  return (
                    <ImageSlot
                      key={i}
                      src={src}
                      label={label}
                      onOpen={src ? () => setLightbox({ src, label }) : undefined}
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
                {t('documents.specs.subtitle')}
              </p>
              {/* 5 columns — one per document pair; front on top, back below */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {Array.from({ length: 5 }, (_, docIdx) => {
                  const frontSrc = SPEC_IMAGES[docIdx * 2];
                  const backSrc  = SPEC_IMAGES[docIdx * 2 + 1];
                  const frontLabel = `${t('documents.spec.item')} ${docIdx + 1} — ${t('documents.specs.front')}`;
                  const backLabel  = `${t('documents.spec.item')} ${docIdx + 1} — ${t('documents.specs.back')}`;
                  return (
                    <div key={docIdx} className="flex flex-col gap-4">
                      <ImageSlot
                        src={frontSrc}
                        label={frontLabel}
                        onOpen={frontSrc ? () => setLightbox({ src: frontSrc, label: frontLabel }) : undefined}
                      />
                      <ImageSlot
                        src={backSrc}
                        label={backLabel}
                        onOpen={backSrc ? () => setLightbox({ src: backSrc, label: backLabel }) : undefined}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          label={lightbox.label}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
