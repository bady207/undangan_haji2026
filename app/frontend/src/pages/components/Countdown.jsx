import { useEffect, useState } from "react";

function diff(target) {
  const now = Date.now();
  const delta = Math.max(0, target - now);

  const d = Math.floor(delta / 86400000);
  const h = Math.floor((delta % 86400000) / 3600000);
  const m = Math.floor((delta % 3600000) / 60000);
  const s = Math.floor((delta % 60000) / 1000);

  return { d, h, m, s };
}

export default function Countdown({ dateISO }) {
  const target = new Date(dateISO).getTime();
  const [t, setT] = useState(diff(target));

  useEffect(() => {
    const id = setInterval(() => {
      setT(diff(target));
    }, 1000);

    return () => clearInterval(id);
  }, [target]);

  const tiles = [
    { label: "Hari", value: t.d },
    { label: "Jam", value: t.h },
    { label: "Menit", value: t.m },
    { label: "Detik", value: t.s },
  ];

  return (
    <div
      className="grid grid-cols-4 gap-3 sm:gap-4 max-w-lg mx-auto"
      data-testid="countdown-timer"
    >
      {tiles.map((tile) => (
        <div
          key={tile.label}
          className="count-tile rounded-2xl py-4 px-2 text-center"
          data-testid={`countdown-${tile.label.toLowerCase()}`}
        >
          <div className="font-heading text-3xl sm:text-4xl text-emerald-brand tabular-nums">
            {String(tile.value).padStart(2, "0")}
          </div>

          <div className="mt-1 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-ink-soft">
            {tile.label}
          </div>
        </div>
      ))}
    </div>
  );
}