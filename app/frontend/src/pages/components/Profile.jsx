import { Reveal, GoldOrnament, SectionLabel } from "./Reveal";
import { INVITATION } from "../InvitationData";
import { Home } from "lucide-react";

export default function Profile() {
  const { pilgrim } = INVITATION;

  return (
    <section
      id="profile"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-cream-warm overflow-hidden"
      data-testid="profile-section"
    >
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel>Keluarga Besar</SectionLabel>

          <h2 className="mt-4 font-heading text-4xl sm:text-5xl text-emerald-brand text-center">
            Profil Calon Jamaah Haji
          </h2>

          <GoldOrnament className="my-6" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Suami */}
          <Reveal delay={0.1}>
            <div className="group relative p-8 md:p-10 rounded-3xl bg-white border border-gold-brand/20 shadow-sm hover:shadow-xl transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 -translate-y-1/3 translate-x-1/3 rounded-full bg-gold-brand/10 blur-2xl" />

              <p className="text-xs tracking-[0.3em] uppercase text-gold-brand">
                Suami
              </p>

              <h3 className="mt-2 font-heading text-3xl text-emerald-deep">
                {pilgrim.husband}
              </h3>

              <div className="mt-5 pt-5 border-t border-gold-brand/20">
                <p className="text-sm text-ink-muted uppercase tracking-widest mb-1">
                  Putra dari
                </p>

                <p className="text-ink">
                  {pilgrim.parents.husband}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Istri */}
          <Reveal delay={0.2}>
            <div className="group relative p-8 md:p-10 rounded-3xl bg-white border border-gold-brand/20 shadow-sm hover:shadow-xl transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 -translate-y-1/3 translate-x-1/3 rounded-full bg-emerald-brand/10 blur-2xl" />

              <p className="text-xs tracking-[0.3em] uppercase text-gold-brand">
                Istri
              </p>

              <h3 className="mt-2 font-heading text-3xl text-emerald-deep">
                {pilgrim.wife}
              </h3>

              <div className="mt-5 pt-5 border-t border-gold-brand/20">
                <p className="text-sm text-ink-muted uppercase tracking-widest mb-1">
                  Putri dari
                </p>

                <p className="text-ink">
                  {pilgrim.parents.wife}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-8 p-6 md:p-8 rounded-3xl bg-emerald-brand text-cream flex items-start gap-4 shadow-xl">
            <div className="shrink-0 w-10 h-10 rounded-full bg-gold-brand/30 flex items-center justify-center">
              <Home className="w-5 h-5 text-gold-brand" />
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold-brand">
                Kediaman
              </p>

              <p className="mt-1 font-heading text-xl">
                {pilgrim.address}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}