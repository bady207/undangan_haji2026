import { Reveal, GoldOrnament } from "./Reveal";
import { INVITATION } from "../InvitationData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative bg-emerald-deep text-cream overflow-hidden"
      data-testid="footer-section"
    >
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold-brand/5 blur-3xl" />

      <div className="relative z-10 px-6 md:px-12 py-20 md:py-28 max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="font-arabic text-2xl sm:text-3xl text-gold-brand leading-loose">
            جَزَاكُمُ ٱللَّٰهُ خَيْرًا
          </p>
          <p className="mt-2 text-xs tracking-[0.35em] uppercase text-gold-brand/80">
            Jazakumullahu Khairan Katsira
          </p>

          <GoldOrnament className="my-8" />

          <p className="font-heading italic text-xl sm:text-2xl leading-relaxed text-gold-brand/90">
            &ldquo;Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.&rdquo;
          </p>

          <p className="mt-10 text-sm tracking-[0.25em] uppercase text-gold-brand">Wassalamu'alaikum Wr. Wb.</p>
          <p className="mt-6 font-heading text-2xl">
            Keluarga Besar
          </p>
          <p className="font-heading text-2xl text-gold-brand">
            {INVITATION.pilgrim.husband} &amp; {INVITATION.pilgrim.wife}
          </p>
        </Reveal>

        <div className="mt-16 pt-8 border-t border-cream/15 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/60">
          <p>© {year} Tasyakuran Haji. Dibuat dengan penuh syukur.</p>
          <p className="tracking-widest uppercase">Walimatus Safar</p>
        </div>
      </div>
    </footer>
  );
}
