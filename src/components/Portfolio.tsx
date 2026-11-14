import { ArrowDown, ArrowRight, ArrowUpRight, Tv, Zap } from 'lucide-react';
import { BUSINESS_SAATHI, JOURNEY_STEPS, LINKS } from '../data/portfolio';
import { Reveal } from './Reveal';

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="border-t border-[#28282C]/60 bg-[#111113] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A00]">
            PORTFOLIO
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#F2F2F3] sm:text-4xl">
            Things I&apos;ve built and automated.
          </h2>
          <p className="mt-3 max-w-[660px] text-base text-[#A0A0A8]">
            One hackathon prototype, working automations, and AI video content.
            Each one started from a problem someone actually had.
          </p>
        </Reveal>

        {/* Featured Card: Business Saathi */}
        <Reveal className="mt-10">
          <article className="rounded-2xl border border-[#FF7A00]/30 bg-[#161618] p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-2xl font-black tracking-tight text-[#F2F2F3] sm:text-[1.75rem]">
                  {BUSINESS_SAATHI.title}
                </h3>
                <p className="mt-1.5 text-sm font-bold text-[#FF7A00]">
                  {BUSINESS_SAATHI.meta}
                </p>
              </div>

              <a
                href={LINKS.businessSaathi}
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-1.5 whitespace-nowrap self-start rounded-lg bg-[#FF7A00] px-5 py-2.5 text-sm font-bold text-[#0B0B0C] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#FF9A3D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9A3D]"
              >
                <span>Open the project</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <p className="mt-5 max-w-[740px] text-[0.95rem] leading-relaxed text-[#A0A0A8]">
              {BUSINESS_SAATHI.description}
            </p>

            {/* 3-Part Flow Diagram */}
            <div className="mt-7 grid grid-cols-1 items-stretch gap-3 lg:grid-cols-[1fr_auto_1.22fr_auto_1fr] lg:gap-4">
              {/* You Enter */}
              <div className="rounded-xl border border-[#28282C] bg-[#111113] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#A0A0A8]">
                  YOU ENTER
                </p>
                <ul className="mt-3.5 space-y-2.5 text-sm text-[#D4D4D8]">
                  {BUSINESS_SAATHI.youEnter.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A0A0A8]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow 1 */}
              <div
                aria-hidden="true"
                className="flex items-center justify-center py-0.5 text-[#FF7A00]"
              >
                <ArrowRight className="hidden h-5 w-5 lg:block" />
                <ArrowDown className="h-5 w-5 lg:hidden" />
              </div>

              {/* Under the Hood */}
              <div className="rounded-xl border border-[#FF7A00]/35 bg-[#FF7A00]/[0.06] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#A0A0A8]">
                  UNDER THE HOOD
                </p>
                <ul className="mt-3.5 space-y-2.5 text-sm text-[#F2F2F3]">
                  {BUSINESS_SAATHI.underTheHood.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF7A00]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow 2 */}
              <div
                aria-hidden="true"
                className="flex items-center justify-center py-0.5 text-[#FF7A00]"
              >
                <ArrowRight className="hidden h-5 w-5 lg:block" />
                <ArrowDown className="h-5 w-5 lg:hidden" />
              </div>

              {/* You Get */}
              <div className="rounded-xl border border-[#28282C] bg-[#111113] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#A0A0A8]">
                  YOU GET
                </p>
                <ul className="mt-3.5 space-y-2.5 text-sm text-[#F2F2F3]">
                  {BUSINESS_SAATHI.youGet.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF7A00]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Two Arrow Bullets */}
            <div className="mt-6 space-y-2.5 text-sm leading-relaxed text-[#A0A0A8]">
              {BUSINESS_SAATHI.bullets.map((b) => (
                <p key={b.lead} className="flex items-start gap-2.5">
                  <ArrowRight
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-[#FF7A00]"
                  />
                  <span>
                    <strong className="font-bold text-[#F2F2F3]">
                      {b.lead}
                    </strong>{' '}
                    {b.body}
                  </span>
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {BUSINESS_SAATHI.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center whitespace-nowrap rounded-full border border-[#FF7A00]/30 bg-[#FF7A00]/[0.08] px-3.5 py-1 text-xs font-bold text-[#FF9A3D]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </Reveal>

        {/* Two Half-Width Cards: AI automations & AI video content */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-[#28282C] bg-[#161618] p-7 transition-colors duration-150 hover:border-[#FF7A00]/35 hover:bg-[#1C1C1F]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#FF7A00]/30 bg-[#FF7A00]/10 text-[#FF7A00]">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#F2F2F3]">
                AI automations
              </h3>

              <div className="mt-4 flex-1 space-y-3.5 text-[0.9375rem] leading-relaxed text-[#A0A0A8]">
                <p>
                  <strong className="font-bold text-[#F2F2F3]">
                    AI news and tools digest.
                  </strong>{' '}
                  A Claude-based flow that sends the top AI news and the best
                  new tools to my inbox.
                </p>
                <p>
                  <strong className="font-bold text-[#F2F2F3]">
                    Daily check-in to Telegram.
                  </strong>{' '}
                  Built for a friend: she fills a short form about her day and
                  the answers arrive in my Telegram bot.
                </p>
                <p>
                  <strong className="font-bold text-[#F2F2F3]">
                    Everyday workflows.
                  </strong>{' '}
                  Claude connected to Gmail and Calendar.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['Claude', 'Gmail', 'Calendar', 'Telegram bot'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center whitespace-nowrap rounded-full border border-[#FF7A00]/30 bg-[#FF7A00]/[0.08] px-3 py-1 text-xs font-bold text-[#FF9A3D]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-[#FF7A00]/25 bg-[#161618] p-7 transition-colors duration-150 hover:border-[#FF7A00]/45 hover:bg-[#1C1C1F]">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#FF7A00]/30 bg-[#FF7A00]/10 text-[#FF7A00]">
                <Tv className="h-5 w-5" aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#F2F2F3]">
                AI video content
              </h3>

              <div className="mt-4 flex-1 space-y-3.5 text-[0.9375rem] leading-relaxed text-[#A0A0A8]">
                <p>
                  <strong className="font-bold text-[#F2F2F3]">
                    Edited entirely with AI.
                  </strong>{' '}
                  I publish short videos on LinkedIn where every edit is made
                  with AI tools.
                </p>
                <p>
                  <strong className="font-bold text-[#F2F2F3]">
                    Why it matters.
                  </strong>{' '}
                  It&apos;s how I learned to pick the right AI tool for a
                  creative job and get a finished result fast.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-[44px] items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-[#28282C] bg-[#111113] px-5 py-2.5 text-sm font-bold text-[#F2F2F3] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#FF7A00]/50 hover:bg-[#1C1C1F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00]"
                >
                  <span>Watch on LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Journey Card + Education Card */}
        <div className="mt-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="rounded-2xl border border-[#28282C] bg-[#161618] p-7 sm:p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#A0A0A8]">
                JOURNEY SO FAR
              </h3>

              <ol className="relative mt-6 space-y-7 pl-7 before:absolute before:top-2 before:bottom-2 before:left-[6px] before:w-[1px] before:bg-[#FF7A00]/35">
                {JOURNEY_STEPS.map((step) => (
                  <li key={step.date} className="relative">
                    {step.isNow ? (
                      <span
                        aria-hidden="true"
                        className="absolute -left-7 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#FF7A00] shadow-[0_0_12px_rgba(255,122,0,0.75)] ring-4 ring-[#FF7A00]/20"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="absolute -left-7 top-1 h-3.5 w-3.5 rounded-full border-2 border-[#FF7A00] bg-[#161618]"
                      />
                    )}

                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#FF7A00]">
                      {step.date}
                    </p>
                    <h4 className="mt-1 text-base font-bold text-[#F2F2F3]">
                      {step.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#A0A0A8]">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <div className="rounded-2xl border border-[#28282C] bg-[#161618] p-7 sm:p-8">
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-[#FF7A00]/30 bg-[#FF7A00]/[0.08] px-3 py-1 text-xs font-bold text-[#FF9A3D]">
                Education
              </span>

              <h3 className="mt-5 text-xl font-bold leading-snug text-[#F2F2F3]">
                Rajasthan Technical University (RTU), Kota
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-[#A0A0A8]">
                Bachelor of Technology, Computer Science Engineering
              </p>

              <p className="mt-4 text-sm font-bold text-[#FF7A00]">
                Aug 2026 – 2029 · currently in 1st year
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
