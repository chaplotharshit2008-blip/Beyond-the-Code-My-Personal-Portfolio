import { Search, Tv, Zap } from 'lucide-react';
import { SERVICES } from '../data/portfolio';
import { Reveal } from './Reveal';

const SERVICE_ICONS: Record<string, typeof Zap> = {
  automation: Zap,
  video: Tv,
  research: Search,
};

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-[#28282C]/60 bg-[#111113] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FF7A00]">
            WHAT I DO
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#F2F2F3] sm:text-4xl">
            How I can help your team.
          </h2>
          <p className="mt-3 max-w-[600px] text-base text-[#A0A0A8]">
            I&apos;m early in my career, so I focus on three things I already do
            well and use every day.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.id] ?? Zap;
            return (
              <Reveal key={service.id} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-[#28282C] bg-[#161618] p-7 transition-colors duration-150 hover:border-[#FF7A00]/35 hover:bg-[#1C1C1F]">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#FF7A00]/30 bg-[#FF7A00]/10 text-[#FF7A00]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-[#F2F2F3]">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-[#A0A0A8]">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={
                          tag.variant === 'orange'
                            ? 'inline-flex items-center whitespace-nowrap rounded-full border border-[#FF7A00]/30 bg-[#FF7A00]/[0.08] px-3 py-1 text-xs font-bold text-[#FF9A3D]'
                            : 'inline-flex items-center whitespace-nowrap rounded-full border border-[#28282C] bg-[#111113] px-3 py-1 text-xs font-bold text-[#A0A0A8]'
                        }
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
