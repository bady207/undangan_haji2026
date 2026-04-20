import { Reveal, GoldOrnament, SectionLabel } from "./Reveal";
import { INVITATION, IMAGES } from "../InvitationData";

export default function Rundown() {
  return (
    <section
      id="rundown"
      className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden"
      data-testid="rundown-section"
    >
      <div
        className="absolute inset-0 opacity-30 bg-center bg-cover"
        style={{
          backgroundImage: `url(${IMAGES.patternCream})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream-warm/80 to-cream" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <Reveal>
          <SectionLabel>Susunan Acara</SectionLabel>

          <h2 className="mt-4 font-heading text-4xl sm:text-5xl text-emerald-brand text-center">
            Rundown
          </h2>

          <GoldOrnament className="my-6" />
        </Reveal>

        <div className="relative mt-14">
          {/* Garis tengah */}
          <div className="absolute left-[22px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-brand/50 to-transparent" />

          <ul className="space-y-10">
            {INVITATION.rundown.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <Reveal
                  key={idx}
                  delay={idx * 0.05}
                >
                  <li className="relative">
                    {/* Titik timeline */}
                    <span className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 top-4 w-4 h-4 rounded-full bg-gold-brand ring-4 ring-cream-warm" />

                    <div
                      className={`pl-12 md:pl-0 md:w-1/2 ${
                        isLeft
                          ? "md:pr-12"
                          : "md:ml-auto md:pl-12"
                      }`}
                    >
                      <div className="p-6 rounded-3xl bg-white border border-gold-brand/20 shadow-sm hover:shadow-lg transition-shadow">
                        <div className="flex items-baseline gap-3">
                          <span className="font-heading text-2xl text-emerald-brand">
                            {item.time}
                          </span>

                          <span className="text-xs tracking-[0.25em] uppercase text-gold-brand">
                            WIB
                          </span>
                        </div>

                        <h3 className="mt-2 font-heading text-xl text-emerald-deep">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-ink-soft">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}