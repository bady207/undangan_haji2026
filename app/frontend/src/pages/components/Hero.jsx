import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Countdown from "./Countdown";
import { GoldOrnament } from "./Reveal";
import { INVITATION, IMAGES } from "../InvitationData";

export default function Hero({ onOpenInvitation }) {
  const scrollToOpening = () => {
    document
      .getElementById("opening")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-cream"
    >
      {/* 🌄 Background */}
      <div
        className="absolute inset-0 bg-center bg-cover scale-105"
        style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
      />

      {/* 🌫 Overlay biar soft */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/95 via-[#FDFBF7]/85 to-[#FDFBF7]/95 backdrop-blur-[2px]" />

      {/* ✨ Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] px-6 py-20 text-center">

        {/* 🕌 Bismillah */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <p className="font-arabic text-3xl sm:text-4xl md:text-5xl text-emerald-deep leading-loose">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>

          <p className="mt-2 text-[10px] tracking-[0.4em] uppercase text-gold-brand">
            Bismillahirrahmanirrahim
          </p>
        </motion.div>

        {/* 📸 FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex gap-5 justify-center mb-10"
        >
          {[IMAGES.husband || IMAGES.portrait, IMAGES.wife || IMAGES.portrait].map((img, i) => (
            <div
              key={i}
              className="relative w-40 sm:w-48 md:w-56 aspect-[3/4] p-[2px] bg-gradient-to-b from-[#D4AF37] to-[#B8941F] rounded-t-[120px] rounded-b-2xl shadow-2xl"
            >
              <div className="w-full h-full overflow-hidden rounded-t-[120px] rounded-b-2xl bg-white">
                <img
                  src={img}
                  alt="Jamaah"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* 📝 TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-2xl"
        >
          <p className="text-[10px] tracking-[0.45em] uppercase text-ink-soft mb-3">
            Undangan
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-emerald-deep leading-tight">
            {INVITATION.event.title}
          </h1>

          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-gold-brand mt-2">
            {INVITATION.event.subtitle}
          </p>

          <GoldOrnament className="my-6" />

          <p className="text-sm text-ink-soft max-w-md mx-auto leading-relaxed">
            {INVITATION.event.tagline}
          </p>

          {/* 👤 NAMA */}
          <div className="mt-8 space-y-1">
            <p className="font-serif text-xl sm:text-2xl text-emerald-deep">
              {INVITATION.pilgrim.husband}
            </p>

            <p className="text-[10px] tracking-[0.35em] uppercase text-gold-brand">
              & Istri
            </p>

            <p className="font-serif text-xl sm:text-2xl text-emerald-deep">
              {INVITATION.pilgrim.wife}
            </p>
          </div>

          {/* 📅 DATE */}
          <div className="mt-8 text-sm text-ink">
            <p className="font-medium">
              {INVITATION.event.dateText}
            </p>
            <p className="text-ink-soft">
              {INVITATION.event.timeText}
            </p>
          </div>

          {/* ⏳ COUNTDOWN */}
          <div className="mt-6">
            <Countdown dateISO={INVITATION.event.dateISO} />
          </div>

          {/* 🎯 BUTTON */}
          <div className="mt-10">
            <button
              onClick={onOpenInvitation}
              className="px-8 py-3.5 rounded-full bg-emerald-brand text-cream font-medium shadow-lg hover:shadow-2xl transition-all hover:bg-emerald-deep border border-gold-brand/40"
            >
              Lihat Undangan
            </button>
          </div>
        </motion.div>

        {/* SCROLL ICON */}
        <motion.button
          onClick={scrollToOpening}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.5, duration: 2, y: { repeat: Infinity } }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-emerald-brand/60 hover:text-emerald-brand"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
}