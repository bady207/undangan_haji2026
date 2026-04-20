import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { Reveal, GoldOrnament, SectionLabel } from "./Reveal";
import { IMAGES } from "../InvitationData";
// import { Toaster } from "sonner";

// FIREBASE
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

export default function Wishes() {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [wishes, setWishes] = useState([]);

  const sliderRef = useRef(null);

  // 🔥 GET DATA REALTIME
  useEffect(() => {
    const q = query(collection(db, "wishes"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWishes(data);
    });

    return () => unsubscribe();
  }, []);

  // 🔥 AUTO SLIDER
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      slider.scrollBy({
        left: 280,
        behavior: "smooth",
      });

      // reset ke awal kalau mentok
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [wishes]);

  // 🔥 EFFECT FOCUS (TENGAH BESAR)
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const cards = slider.querySelectorAll(".wish-card");

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const center = window.innerWidth / 2;

        const distance = Math.abs(center - (rect.left + rect.width / 2));

        if (distance < 150) {
          card.style.transform = "scale(1)";
          card.style.opacity = "1";
        } else {
          card.style.transform = "scale(0.9)";
          card.style.opacity = "0.5";
        }
      });
    };

    slider.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => slider.removeEventListener("scroll", handleScroll);
  }, [wishes]);

  // 🔥 SUBMIT
  const submit = async (e) => {
    e.preventDefault();

    // hapus spasi depan belakang dulu
    const name = form.name.trim();
    const message = form.message.trim();

    // validasi kosong
    if (!name || !message) {
      toast.error("Isi nama & doa dulu!");
      return;
    }

    // validasi maksimal nama
    if (name.length > 20) {
      toast.error("Nama maksimal 20 karakter");
      return;
    }

    // validasi maksimal pesan
    if (message.length > 250) {
      toast.error("Doa & ucapan maksimal 250 karakter");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "wishes"), {
        name,
        message,
        createdAt: serverTimestamp(),
      });

      toast.success("Doa terkirim ✨");

      setForm({
        name: "",
        message: "",
      });

      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error("Gagal kirim");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="wishes" className="relative py-20 px-6 md:px-12 bg-cream">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <SectionLabel>Ucapan & Doa</SectionLabel>

          <h2 className="mt-2 text-4xl text-emerald-brand text-center">
            Sampaikan Doa Anda
          </h2>

          <GoldOrnament className="my-4" />
        </Reveal>

        {/* FORM */}
        <Reveal delay={0.1}>
          <div className="relative rounded-[2rem] overflow-hidden bg-emerald-brand p-8 shadow-xl">
            <div
              className="absolute inset-0 opacity-10 bg-cover"
              style={{
                backgroundImage: `url(${IMAGES.patternCream})`,
              }}
            />

            <form onSubmit={submit} className="relative z-10 space-y-4">
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nama"
                className="w-full bg-white/10 rounded-xl px-4 py-3 text-white outline-none"
              />

              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Doa & ucapan..."
                className="w-full bg-white/10 rounded-xl px-4 py-3 text-white outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gold-brand text-black"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4" />
                    Mengirim...
                  </>
                ) : sent ? (
                  "Terkirim ✔"
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Kirim
                  </>
                )}
              </button>
            </form>
          </div>
        </Reveal>

        {/* 🔥 SLIDER PREMIUM */}
        <div className="relative mt-8">
          {/* blur kiri */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-cream to-transparent z-10" />

          {/* blur kanan */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-cream to-transparent z-10" />

          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-4"
          >
            {wishes.map((item) => (
              <div
                key={item.id}
                className="wish-card min-w-[260px] bg-white/10 backdrop-blur-lg rounded-3xl p-5 shadow-xl transition-all duration-500"
              >
                <p className="font-semibold text-emerald-brand text-sm">
                  {item.name}
                </p>

                <div className="w-10 h-[2px] bg-gold-brand my-2 rounded-full" />

                <p className="text-sm text-ink">{item.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
