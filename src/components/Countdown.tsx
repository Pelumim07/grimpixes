import { useEffect, useState } from "react";
export default function Countdown({ to }: { to: string }) {
  const [left, setLeft] = useState(() => new Date(to).getTime() - Date.now());
  useEffect(() => { const i = setInterval(() => setLeft(new Date(to).getTime() - Date.now()), 1000); return () => clearInterval(i); }, [to]);
  if (left <= 0) return <p className="font-display text-2xl text-lime">The grim has struck.</p>;
  const s = Math.floor(left / 1000);
  const parts: [number, string][] = [[Math.floor(s / 86400), "days"], [Math.floor((s % 86400) / 3600), "hrs"], [Math.floor((s % 3600) / 60), "min"], [s % 60, "sec"]];
  return (
    <div className="grid grid-cols-4 gap-3 max-w-sm" role="timer" aria-label="Time until the GrimPixels mint">
      {parts.map(([n, l]) => (
        <div key={l} className="rounded-2xl border-2 border-lime/60 bg-panel py-3 text-center">
          <div className="font-display text-3xl text-lime tabular-nums">{String(n).padStart(2, "0")}</div>
          <div className="font-px text-[8px] mt-2 text-bone/60">{l}</div>
        </div>
      ))}
    </div>
  );
}
