import { useEffect, useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";

export default function MusicToggle({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.35;
    a.loop = true;
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      if (playing) {
        a.pause();
        setPlaying(false);
      } else {
        await a.play();
        setPlaying(true);
      }
    } catch (e) {
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Matikan musik" : "Nyalakan musik"}
        data-testid="music-toggle-button"
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-xl border border-gold-brand/50 flex items-center justify-center transition-transform hover:scale-110 ${
          playing ? "bg-emerald-brand text-cream animate-pulse" : "bg-white text-emerald-brand"
        }`}
      >
        {playing ? <Music2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </button>
    </>
  );
}
