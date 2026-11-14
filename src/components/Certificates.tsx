import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { CERTIFICATES, type CertificateItem } from '../data/portfolio';
import { Reveal } from './Reveal';

export function Certificates() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeCert: CertificateItem | null =
    activeIndex !== null ? CERTIFICATES[activeIndex] ?? null : null;

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % CERTIFICATES.length
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, closeModal, showPrev, showNext]);

  return (
    <section
      id="certificates"
      className="border-t border-[#28282C]/60 bg-[#0B0B0C] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A00]">
            CERTIFICATES
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#F2F2F3] sm:text-4xl">
            Verified learning, in one place.
          </h2>
          <p className="mt-3 text-base text-[#A0A0A8]">
            Tap any certificate to see it full size.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATES.map((cert, index) => (
            <Reveal key={cert.id} className="h-full">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${cert.title} certificate full size`}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#28282C] bg-[#161618] text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-[#FF7A00]/45 hover:bg-[#1C1C1F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00]"
              >
                {/* Light paper-colored thumbnail container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#28282C] bg-[#F4F1EA] p-2.5">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate issued by ${cert.issuer}`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-2.5 bottom-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#0B0B0C]/80 text-[#F2F2F3] opacity-0 backdrop-blur-sm transition-opacity duration-150 group-hover:opacity-100"
                  >
                    <Expand className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-base font-bold leading-snug text-[#F2F2F3]">
                      {cert.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#A0A0A8]">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-[#28282C] pt-3">
                    <span className="text-xs font-normal tabular-nums text-[#A0A0A8]">
                      {cert.date}
                    </span>
                    <span className="inline-flex items-center whitespace-nowrap rounded-full border border-[#FF7A00]/30 bg-[#FF7A00]/[0.08] px-2.5 py-0.5 text-[11px] font-bold text-[#FF9A3D]">
                      {cert.type}
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-7 text-xs leading-relaxed text-[#A0A0A8]">
          The Microsoft-powered and Google Cloud-powered courses were taken on
          the Simplilearn portal. They are course completions, not official
          Microsoft or Google Cloud certifications.
        </p>
      </div>

      {/* Full-Size Lightbox Modal */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeCert.title} certificate preview`}
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#28282C] bg-[#161618] shadow-2xl"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between gap-4 border-b border-[#28282C] px-5 py-3.5">
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-[#F2F2F3] sm:text-base">
                  {activeCert.title}
                </p>
                <p className="truncate text-xs text-[#A0A0A8]">
                  {activeCert.issuer} · {activeCert.date}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Previous certificate"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#28282C] bg-[#111113] text-[#F2F2F3] transition-colors hover:border-[#FF7A00]/50 hover:bg-[#1C1C1F] focus-visible:outline-2 focus-visible:outline-[#FF7A00]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next certificate"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#28282C] bg-[#111113] text-[#F2F2F3] transition-colors hover:border-[#FF7A00]/50 hover:bg-[#1C1C1F] focus-visible:outline-2 focus-visible:outline-[#FF7A00]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close certificate preview"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#28282C] bg-[#111113] text-[#F2F2F3] transition-colors hover:border-[#FF7A00]/60 hover:bg-[#FF7A00] hover:text-[#0B0B0C] focus-visible:outline-2 focus-visible:outline-[#FF7A00]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Image Container */}
            <div className="flex flex-1 items-center justify-center overflow-auto bg-[#F4F1EA] p-3 sm:p-6">
              <img
                src={activeCert.image}
                alt={`${activeCert.title} certificate`}
                referrerPolicy="no-referrer"
                className="max-h-[68vh] w-auto max-w-full rounded object-contain shadow-sm"
              />
            </div>

            {/* Bottom Caption */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#28282C] bg-[#111113] px-5 py-3 text-xs text-[#A0A0A8]">
              <span>
                {activeCert.title} — {activeCert.issuer}
              </span>
              <span className="inline-flex items-center rounded-full border border-[#FF7A00]/30 bg-[#FF7A00]/[0.08] px-2.5 py-0.5 font-bold text-[#FF9A3D]">
                {activeCert.type} · {activeCert.date}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
