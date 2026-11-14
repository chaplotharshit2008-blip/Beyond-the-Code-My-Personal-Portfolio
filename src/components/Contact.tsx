import { ArrowUpRight } from 'lucide-react';
import { LINKS } from '../data/portfolio';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[#28282C]/60 bg-[#111113] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-[#FF7A00]/30 bg-[#161618] px-6 py-14 text-center sm:px-12 sm:py-16">
            {/* Soft orange radial glow at top */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-28 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(255, 122, 0, 0.2) 0%, rgba(255, 122, 0, 0.05) 48%, transparent 74%)',
              }}
            />

            <div className="relative mx-auto max-w-[560px]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A00]">
                CONTACT ME
              </p>

              <h2 className="mt-4 text-3xl font-black leading-[1.12] tracking-tight text-balance text-[#F2F2F3] sm:text-[2.65rem]">
                Let&apos;s build something that runs on its own.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#A0A0A8]">
                I&apos;m looking for a remote internship in AI automation. If
                you have a workflow to automate, or a team that can teach me,
                message me on LinkedIn.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-[44px] items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-[#FF7A00] px-6 py-3 text-sm font-bold text-[#0B0B0C] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#FF9A3D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9A3D]"
                >
                  <span>Message me on LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={LINKS.cv}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-[44px] items-center justify-center whitespace-nowrap rounded-lg border border-[#28282C] bg-[#111113] px-6 py-3 text-sm font-bold text-[#F2F2F3] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#FF7A00]/50 hover:bg-[#1C1C1F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00]"
                >
                  View CV
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
