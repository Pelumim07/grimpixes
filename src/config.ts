// All project copy lives here. Edit text, links and the mint date in this file only.
export const SITE = {
  name: "GrimPixels",
  handle: "@GrimPixelsRH",
  mintDate: "2026-11-09T00:00:00Z", // confirm the exact mint time and update
  supply: 699,
  chain: "Robinhood",
  links: { x: "https://x.com/GrimPixelsRH", discord: "#", telegram: "#" },
  nav: [["Collection", "#collection"], ["Roadmap", "#roadmap"], ["FAQ", "#faq"]] as [string, string][],
  phases: [
    { t: "The grim is sighted", d: "GrimPixels step out of the shadows and the hood starts talking.", s: "done" },
    { t: "Freemints", d: "Early believers get free mints. Rules and wallets are posted on X first.", s: "now" },
    { t: "9 November: the grim strikes", d: "699 GrimPixels land on Robinhood. One day, one drop.", s: "next" },
    { t: "Hood life", d: "Holder drops, community moments and perks. Details land on X.", s: "next" },
  ],
  faq: [
    ["What is GrimPixels?", "699 hand-pixeled skulls with attitude, built for the Robinhood community. Collect. Own. Belong."],
    ["When does it drop?", "9 November. The countdown at the top of this page tracks it live."],
    ["Where do I mint?", "On Robinhood. The official mint link goes up on our X account first, so only trust links from there."],
    ["How do I get a free mint?", "Follow the rules pinned on @GrimPixelsRH. Anything not posted there is not official."],
  ] as [string, string][],
};
