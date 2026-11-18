import { useEffect, useState } from "react";
import { SITE } from "./config";
import PixelArt from "./components/PixelArt";
import Reveal from "./components/Reveal";
import Countdown from "./components/Countdown";
import type { Variant } from "./lib/sprites";

const GALLERY: { n: string; v: Variant; bg: string }[] = [
  { n: "Arrowhead", v: { arrow: true }, bg: "#c8ff00" },
  { n: "Rustler", v: { hat: "cowboy" }, bg: "#c8ff00" },
  { n: "Cool Corpse", v: { hat: "shades" }, bg: "#c8ff00" },
  { n: "Boneking", v: { hat: "crown", eye: "k" }, bg: "#c8ff00" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => { const f = () => setSolid(scrollY > 12); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  return (
    <header className={"fixed top-0 inset-x-0 z-40 transition-colors " + (solid || open ? "bg-ink/90 backdrop-blur border-b border-bone/10" : "")}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 h-16">
        <a href="#top" className="flex items-center gap-3 font-display text-xl"><span className="w-8 h-8 block"><PixelArt v={{}} label="" /></span>{SITE.name}</a>
        <nav className="hidden md:flex items-center gap-8 text-bone/70">{SITE.nav.map(([l, h]) => <a key={l} href={h} className="hover:text-lime transition-colors">{l}</a>)}</nav>
        <a href={SITE.links.x} target="_blank" rel="noreferrer" className="btn hidden md:inline-flex" style={{ padding: ".55rem 1.1rem", fontSize: ".85rem" }}>Follow on X</a>
        <button className="md:hidden p-2" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block w-6 h-0.5 bg-bone mb-1.5" /><span className="block w-6 h-0.5 bg-bone mb-1.5" /><span className="block w-6 h-0.5 bg-bone" />
        </button>
      </div>
      {open && <div className="md:hidden px-5 pb-6 flex flex-col gap-4 text-lg">{SITE.nav.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)}>{l}</a>)}
        <a href={SITE.links.x} target="_blank" rel="noreferrer" className="btn">Follow on X</a></div>}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 px-5">
      <div className="absolute -top-40 right-0 w-[640px] h-[640px] rounded-full opacity-25 blur-3xl bg-lime pointer-events-none" />
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="font-px text-[10px] inline-block px-3 py-2 rounded-full border-2 border-lime text-lime">Collect · Own · Belong</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] mt-6">The grim <span className="text-lime">shall strike.</span></h1>
          <p className="mt-6 text-lg text-bone/75 max-w-md">{SITE.supply} pixel skulls are rising on {SITE.chain}. 9 November. The hood is getting darker.</p>
          <div className="mt-8"><Countdown to={SITE.mintDate} /></div>
          <div className="mt-9 flex flex-wrap gap-4"><a href={SITE.links.x} target="_blank" rel="noreferrer" className="btn">Join the grim</a><a href="#collection" className="btn ghost">Meet the skulls</a></div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="bob aspect-square rounded-[2rem] bg-lime p-8 border-4 border-bone shadow-[10px_10px_0_#f4f0e3]"><PixelArt v={{ arrow: true }} label="GrimPixels skull with an arrow" /></div>
          <span className="absolute -bottom-5 -left-4 font-px text-[10px] bg-ink border-2 border-lime text-lime px-3 py-2 rounded-lg -rotate-3">{SITE.supply} supply</span>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const t = Array(8).fill("GRIMPIXELS ✦ 9 NOVEMBER ✦ ROBINHOOD ✦ " + SITE.supply + " SKULLS ✦").join(" ");
  return <div className="bg-lime text-ink overflow-hidden py-3 -rotate-1 scale-105 font-display" aria-hidden="true"><div className="mq flex w-max gap-10"><span>{t}</span><span>{t}</span></div></div>;
}

function Collection() {
  return (
    <section id="collection" className="max-w-6xl mx-auto px-5 py-24">
      <Reveal><h2 className="font-display text-4xl md:text-5xl">Meet the skulls.</h2><p className="mt-4 text-bone/70 max-w-lg">Every one hand-pixeled, every one a different kind of trouble. A taste of the {SITE.supply}.</p></Reveal>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {GALLERY.map((g, i) => (
          <Reveal key={g.n} delay={i * 90}><div className="tile p-3"><div className="aspect-square rounded-2xl p-5" style={{ background: g.bg }}><PixelArt v={g.v} label={g.n} /></div><div className="px-2 pt-4 pb-2 font-display">{g.n}</div></div></Reveal>
        ))}
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section id="roadmap" className="max-w-4xl mx-auto px-5 py-20">
      <Reveal><h2 className="font-display text-4xl md:text-5xl">How the grim strikes.</h2></Reveal>
      <ol className="mt-12 space-y-5">
        {SITE.phases.map((p, i) => (
          <Reveal key={p.t} delay={i * 80}>
            <li className={"tile p-6 flex gap-5 items-start " + (p.s === "now" ? "border-lime" : "")}>
              <span className={"font-px text-[9px] px-3 py-2 rounded-lg shrink-0 " + (p.s === "done" ? "bg-lime text-ink" : p.s === "now" ? "bg-bone text-ink" : "border border-bone/30 text-bone/60")}>{p.s === "done" ? "Done" : p.s === "now" ? "Live" : "Next"}</span>
              <div><h3 className="font-display text-xl">{p.t}</h3><p className="mt-2 text-bone/70">{p.d}</p></div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="max-w-3xl mx-auto px-5 py-20">
      <Reveal><h2 className="font-display text-4xl">Ask the grim.</h2></Reveal>
      <div className="mt-10 space-y-3">{SITE.faq.map(([q, a]) => (
        <details key={q} className="tile group p-5"><summary className="cursor-pointer list-none flex justify-between font-bold">{q}<span className="text-lime group-open:rotate-45 transition-transform">+</span></summary><p className="mt-3 text-bone/70">{a}</p></details>
      ))}</div>
    </section>
  );
}

function Cta() {
  return (
    <section className="px-5 py-16"><Reveal>
      <div className="max-w-5xl mx-auto rounded-[2rem] bg-lime text-ink p-10 md:p-14 text-center border-4 border-bone shadow-[10px_10px_0_#f4f0e3]">
        <h2 className="font-display text-4xl md:text-5xl">9 November. Be there.</h2>
        <p className="mt-4 max-w-md mx-auto">Follow {SITE.handle} for the official mint link, freemint rules and every drop.</p>
        <a href={SITE.links.x} target="_blank" rel="noreferrer" className="btn mt-8" style={{ background: "#0a0b08", color: "#c8ff00", borderColor: "#0a0b08", boxShadow: "4px 4px 0 #f4f0e3" }}>Follow {SITE.handle}</a>
      </div></Reveal></section>
  );
}

function Footer() {
  return (
    <footer className="px-5 pt-10 pb-16 text-center">
      <div className="font-display text-2xl">{SITE.name}</div>
      <div className="flex justify-center gap-4 mt-6">{(["x", "discord"] as const).map((k) => <a key={k} href={SITE.links[k]} target="_blank" rel="noreferrer" aria-label={k} className="w-12 h-12 grid place-items-center rounded-full bg-panel border border-bone/15 font-px text-[10px] uppercase hover:text-lime hover:border-lime transition-colors">{k === "x" ? "X" : k === "discord" ? "DC" : "TG"}</a>)}</div>
      <p className="mt-8 text-sm text-bone/50 max-w-md mx-auto">Only trust links posted by {SITE.handle}. Collectibles carry risk, never spend what you cannot lose.</p>
    </footer>
  );
}

export default function App() {
  return <><Nav /><main><Hero /><Marquee /><Collection /><Roadmap /><Faq /><Cta /></main><Footer /></>;
}
