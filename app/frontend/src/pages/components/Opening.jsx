import { Reveal, GoldOrnament, SectionLabel } from "./Reveal";
import { INVITATION, IMAGES } from "../InvitationData";

export default function Opening() {
  return (
    <section
      id="opening"
      className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden"
      data-testid="opening-section"
    >
      <div
        className="absolute inset-0 opacity-40 bg-center bg-cover"
        style={{ backgroundImage: `url(${IMAGES.patternCream})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/80 to-cream" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <Reveal delay={0.1}>
          <p className="font-arabic text-2xl sm:text-3xl md:text-4xl text-emerald-brand leading-loose">
            ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُۥ
          </p>
        </Reveal>
        <Reveal>
          {/* <SectionLabel>Assalamu'alaikum</SectionLabel> */}
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl text-emerald-brand">
            Salam Sejahtera
          </h2>
          <GoldOrnament className="my-6" />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 p-8 md:p-12 rounded-3xl bg-white/60 backdrop-blur-md border border-gold-brand/20 shadow-[0_4px_40px_-20px_rgba(10,76,54,0.3)]">
            <p className="font-arabic text-xl sm:text-2xl md:text-3xl text-emerald-deep leading-loose">
              وَأَذِّن فِى ٱلنَّاسِ بِٱلْحَجِّ يَأْتُوكَ رِجَالًا
            </p>
            <p className="mt-6 font-heading italic text-lg sm:text-xl text-ink-soft leading-relaxed">
              &ldquo;Dan serulah manusia untuk mengerjakan haji,
              niscaya mereka akan datang kepadamu dengan berjalan kaki…&rdquo;
            </p>
            <p className="mt-3 text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-brand">
              QS. Al-Hajj : 27
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-10 text-base sm:text-lg text-ink-soft leading-relaxed max-w-2xl mx-auto">
            Dengan memanjatkan puji syukur ke hadirat Allah <span className="italic">Subhanahu wa Ta'ala</span>,
            kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara
            {" "}<span className="text-emerald-brand font-medium">{INVITATION.event.title} &amp; {INVITATION.event.subtitle}</span>{" "}
            keluarga kami.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
