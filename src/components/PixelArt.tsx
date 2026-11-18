import { build, PAL, Variant } from "../lib/sprites";
export default function PixelArt({ v, label }: { v: Variant; label: string }) {
  const g = build(v);
  return (
    <svg viewBox="0 0 16 16" shapeRendering="crispEdges" role="img" aria-label={label} className="w-full h-full">
      {g.flatMap((row, y) => row.map((c, x) => (PAL[c] ? <rect key={x + "-" + y} x={x} y={y} width="1" height="1" fill={PAL[c]} /> : null)))}
    </svg>
  );
}
