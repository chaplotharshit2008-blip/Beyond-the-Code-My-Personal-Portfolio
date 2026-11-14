import { Link2 } from 'lucide-react';
import { HERO_STATS, LINKS, PORTRAIT_SRC } from '../data/portfolio';

function LinkedInGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-[#0B0B0C] py-10 sm:py-14 lg:py-12"
    >
      {/* Soft radial orange glow behind top-left hero text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-[520px] w-[560px] rounded-full opacity-90"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255, 122, 0, 0.16) 0%, rgba(255, 122, 0, 0.05) 42%, transparent 72%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          {/* Left Column */}
          <div>
            <p className="text-lg font-normal text-[#A0A0A8] sm:text-xl">
              Hi, I am
            </p>
            <p className="mt-1.5 text-2xl font-bold tracking-tight text-[#F2F2F3] sm:text-[1.75rem]">
              Harshit Chaplot
            </p>

            <h1
              className="hero-title-gradient mt-3 font-black leading-[1.03] tracking-tight text-balance"
              style={{ fontSize: 'clamp(2.5rem, 5.4vw, 4.7rem)' }}
            >
              AI Automation Enthusiast
            </h1>

            <p className="mt-5 max-w-[540px] text-base leading-relaxed text-[#A0A0A8] sm:text-[1.0625rem]">
              CSE student at{' '}
              <strong className="font-bold text-[#F2F2F3]">RTU Kota</strong>. I
              connect{' '}
              <strong className="font-bold text-[#F2F2F3]">
                Claude, Gmail, Calendar and Telegram
              </strong>{' '}
              into workflows that run on their own, and I&apos;m looking for a
              remote internship to grow in AI automation.
            </p>

            {/* Round Social Icon Buttons (LinkedIn + Business Saathi Link) */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener"
                aria-label="Harshit Chaplot on LinkedIn"
                title="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#28282C] bg-[#161618] text-[#A0A0A8] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#FF7A00]/60 hover:bg-[#1C1C1F] hover:text-[#F2F2F3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00]"
              >
                <LinkedInGlyph />
              </a>
              <a
                href={LINKS.businessSaathi}
                target="_blank"
                rel="noopener"
                aria-label="Business Saathi prototype"
                title="Business Saathi"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#28282C] bg-[#161618] text-[#A0A0A8] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#FF7A00]/60 hover:bg-[#1C1C1F] hover:text-[#F2F2F3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00]"
              >
                <Link2 className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center justify-center whitespace-nowrap rounded-lg bg-[#FF7A00] px-6 py-2.5 text-sm font-bold text-[#0B0B0C] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#FF9A3D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9A3D]"
              >
                Hire Me
              </a>
              <a
                href={LINKS.cv}
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-[44px] items-center justify-center whitespace-nowrap rounded-lg border border-[#28282C] bg-[#161618] px-6 py-2.5 text-sm font-bold text-[#F2F2F3] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#FF7A00]/50 hover:bg-[#1C1C1F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00]"
              >
                View CV
              </a>
            </div>

            {/* Stats Strip Card */}
            <div className="mt-8 max-w-[490px] rounded-[14px] border border-[#28282C] bg-[#161618]">
              <div className="grid grid-cols-3 divide-x divide-[#28282C]">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label} className="px-4 py-4 sm:px-5 sm:py-5">
                    <div className="text-xl font-black tabular-nums text-[#FF7A00] sm:text-2xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs font-normal text-[#F2F2F3] sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Circular B&W Portrait on Larger Dark Circle */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative flex h-[320px] w-[320px] items-center justify-center sm:h-[420px] sm:w-[420px] lg:h-[470px] lg:w-[470px] xl:h-[510px] xl:w-[510px]">
              {/* Larger dark circle behind */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-[#28282C]/50 bg-[#161618]"
              />

              {/* Circular B&W Portrait with 3px orange ring and soft orange glow */}
              <div
                className="relative h-[256px] w-[256px] overflow-hidden rounded-full border-[3px] border-[#FF7A00] bg-[#111113] sm:h-[340px] sm:w-[340px] lg:h-[382px] lg:w-[382px] xl:h-[416px] xl:w-[416px]"
                style={{
                  boxShadow: '0 0 72px rgba(255, 122, 0, 0.22)',
                }}
              >
                <img
                  src={PORTRAIT_SRC}
                  alt="Harshit Chaplot portrait"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-[50%_14%] grayscale contrast-[1.08]"
                />
              </div>

              {/* Top-right floating chip */}
              <div className="absolute top-7 right-0 rounded-full border border-[#28282C] bg-[#161618]/95 px-3.5 py-1.5 text-xs font-bold whitespace-nowrap text-[#FF9A3D] shadow-lg backdrop-blur-sm sm:top-12 sm:right-3">
                RTU Kota · 2029
              </div>

              {/* Bottom-left floating chip with pulsing green dot */}
              <div className="absolute bottom-7 left-0 inline-flex items-center gap-2.5 rounded-full border border-[#28282C] bg-[#161618]/95 px-4 py-2 text-xs font-bold whitespace-nowrap text-[#F2F2F3] shadow-lg backdrop-blur-sm sm:bottom-12 sm:-left-2">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span>Open to remote internships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
