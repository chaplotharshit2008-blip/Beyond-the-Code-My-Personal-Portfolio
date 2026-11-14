import { ABOUT_FACTS, AI_TOOLS, SKILL_GROUPS } from '../data/portfolio';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section
      id="about"
      className="border-t border-[#28282C]/60 bg-[#0B0B0C] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A00]">
            ABOUT ME
          </p>
          <h2 className="mt-3 max-w-[660px] text-3xl font-black leading-[1.12] tracking-tight text-balance text-[#F2F2F3] sm:text-4xl">
            Curious about how intelligent systems solve real problems.
          </h2>
        </Reveal>

        {/* Top Row: Narrative Card + Facts Card */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-[#28282C] bg-[#161618] p-7 sm:p-8">
              <p className="text-lg leading-relaxed text-[#D4D4D8] sm:text-[1.1875rem]">
                I&apos;m a first-year Computer Science student at{' '}
                <span className="font-bold text-[#FF7A00]">RTU Kota</span>. I
                like taking a repetitive task and handing it to an AI tool and a
                few connected apps. Right now I&apos;m learning{' '}
                <span className="font-bold text-[#FF7A00]">n8n</span> and{' '}
                <span className="font-bold text-[#FF7A00]">Python</span>, and my
                long-term goal is to become an{' '}
                <span className="font-bold text-[#FF7A00]">AI Engineer</span>.
              </p>

              <p className="mt-6 text-[0.9375rem] leading-relaxed text-[#A0A0A8]">
                Outside of code I read a lot and enjoy breaking a problem apart
                until I understand how it works.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-[#FF7A00]/25 bg-[#161618] p-7 sm:p-8">
              <dl className="divide-y divide-[#28282C]">
                {ABOUT_FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
                  >
                    <dt className="text-sm text-[#A0A0A8]">{fact.label}</dt>
                    <dd className="text-right text-sm font-bold text-[#F2F2F3] tabular-nums">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        {/* Bottom Row: AI Tools Card + Skills Card */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-[#28282C] bg-[#161618] p-7 sm:p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#A0A0A8]">
                AI TOOLS I USE
              </h3>

              <dl className="mt-4 divide-y divide-[#28282C]">
                {AI_TOOLS.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-baseline justify-between gap-4 py-3.5 last:pb-0"
                  >
                    <dt className="text-base font-bold text-[#F2F2F3]">
                      {tool.name}
                    </dt>
                    <dd className="text-right text-sm text-[#A0A0A8]">
                      {tool.use}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal>
            <div className="h-full rounded-2xl border border-[#FF7A00]/25 bg-[#161618] p-7 sm:p-8">
              <div className="space-y-5">
                {SKILL_GROUPS.map((group) => (
                  <div key={group.label}>
                    <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#A0A0A8]">
                      {group.label}
                    </h3>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {group.items.map((item) => {
                        const chipClass =
                          group.variant === 'orange'
                            ? 'border-[#FF7A00]/30 bg-[#FF7A00]/[0.08] text-[#FF9A3D]'
                            : group.variant === 'green'
                              ? 'border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-400'
                              : 'border-[#28282C] bg-[#111113] text-[#D4D4D8]';

                        return (
                          <span
                            key={item}
                            className={`inline-flex items-center whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-bold ${chipClass}`}
                          >
                            {item}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
