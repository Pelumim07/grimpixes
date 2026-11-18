const BASE = ["................","................","....wwwwwwww....","...wwwwwwwwww...","..wwwwwwwwwwww..","..wwwwwwwwwwww..","..wwEEwwwwKKww..","..wwEEwwwwKKww..","..wwwwwwwwwwww..","...wwwwkkwwww...","...wwwwwwwwww...","....wwwwwwww....","....wkwkwkwk....","....wkwkwkwk....","................","................"];
const HATS: Record<string, [number, string[]]> = {
  cowboy: [1, ["......hhhh......", "....hhhhhhhh....", "hhhhhhhhhhhhhhhh"]],
  crown: [1, ["..y..y..yy..y..y", "..yyyyyyyyyyyyyy", "..yyyyyyyyyyyyyy"]],
  shades: [6, ["..gggggggggggg..", "..gggggggggggg.."]],
};
export type Variant = { hat?: keyof typeof HATS; arrow?: boolean; eye?: string };
export const PAL: Record<string, string> = { w: "#f4f0e3", k: "#0a0b08", K: "#0a0b08", b: "#4a6a88", h: "#8a4b1f", y: "#ffd400", g: "#18c964", r: "#8a4b1f", f: "#ffffff", s: "#9aa0a6" };
export function build(v: Variant): string[][] {
  const g = BASE.map((r) => r.split(""));
  g.forEach((r) => r.forEach((c, x) => { if (c === "E") r[x] = v.eye ?? "b"; }));
  if (v.hat) { const [at, rows] = HATS[v.hat]; rows.forEach((row, i) => row.split("").forEach((c, x) => { if (c !== ".") g[at + i][x] = c; })); }
  if (v.arrow) for (let i = 0; i < 16; i++) g[i][15 - i] = i < 2 ? "f" : i > 13 ? "s" : "r";
  return g;
}
