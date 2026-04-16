import logoMecha from "@/assets/logo-mecha-tycoon.png";
import logoLiberty from "@/assets/logo-liberty-sentinel.png";
import logoStorm from "@/assets/logo-stormlord.png";
import logoGamma from "@/assets/logo-gamma-goliath.png";
import logoCrimson from "@/assets/logo-crimson-specter.png";
import logoArachnaut from "@/assets/logo-arachnaut.png";

import heroMecha from "@/assets/hero-mecha-tycoon.jpg";
import heroLiberty from "@/assets/hero-liberty-sentinel.jpg";
import heroStorm from "@/assets/hero-stormlord.jpg";
import heroGamma from "@/assets/hero-gamma-goliath.jpg";
import heroCrimson from "@/assets/hero-crimson-specter.jpg";
import heroArachnaut from "@/assets/hero-arachnaut.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  /** USD, two-decimal display value */
  price: number;
}

export interface Character {
  id: string;
  name: string;
  realName: string;
  tagline: string;
  color: string;
  glowClass: string;
  origin: string;
  abilities: string[];
  friends: string[];
  family: string[];
  enemies: string[];
  powerEffect: string;
  stats: { label: string; value: number }[];
  logo: string;
  hero: string;
  products: Product[];
}

export const characters: Character[] = [
  {
    id: "mecha-tycoon",
    name: "Mecha Tycoon",
    realName: "Tobias Sterling",
    tagline: "I put the 'rich' in 'enriched uranium'.",
    color: "#e63946",
    glowClass: "glow-text-red",
    origin:
      "After a hostile takeover of his own kidneys by tiny robots he invented while drunk, billionaire engineer Tobias Sterling forged the Mecha Tycoon exo-armor. He now fights crime mostly because his accountant said it's tax-deductible.",
    abilities: ["Brain bigger than wallet", "Hex-core blasters", "Boot jets", "Sarcastic onboard AI", "Nano-armor", "Wi-Fi 7"],
    friends: ["Liberty Sentinel", "Arachnaut", "Stormlord", "Gamma Goliath", "Crimson Specter"],
    family: ["Penny Sterling (CFO & wife)", "Margo Sterling (Daughter)", "Hank Sterling (Father)"],
    enemies: ["Lord Vesper", "The Mandate", "Obsidian Stane", "Cyberion", "Whip-Lash"],
    powerEffect: "repulsor",
    stats: [
      { label: "Intelligence", value: 98 },
      { label: "Strength", value: 85 },
      { label: "Speed", value: 78 },
      { label: "Durability", value: 90 },
      { label: "Energy", value: 95 },
      { label: "Fighting", value: 70 },
    ],
    logo: logoMecha,
    hero: heroMecha,
    products: [
      { id: "mecha-tee", name: "Hex-Core Graphic Tee", description: "Glow-in-the-dark reactor on the chest. Charges from sass.", price: 29.99 },
      { id: "mecha-mug", name: "World's Okayest Genius Mug", description: "Holds 16oz of espresso or 12oz of regret.", price: 18.0 },
      { id: "mecha-poster", name: "'CEO Mode' Poster A2", description: "Mecha Tycoon mid-flight, judging your life choices.", price: 24.5 },
      { id: "mecha-figure", name: "Articulated Desk Figurine", description: "12 points of articulation. Powered by your productivity.", price: 79.0 },
      { id: "mecha-hoodie", name: "Stealth Mode Tech Hoodie", description: "Has 14 pockets. Six are decorative. Three are for snacks.", price: 89.0 },
    ],
  },
  {
    id: "liberty-sentinel",
    name: "Liberty Sentinel",
    realName: "Sgt. Cassius Vale",
    tagline: "I can do this all day. Probably. I haven't tried.",
    color: "#457b9d",
    glowClass: "glow-text-blue",
    origin:
      "A retired bus driver who volunteered for an experimental hydration program, Cassius Vale now wields the Octogon Shield — a kite-shaped piece of indestructible alloy he keeps insisting is 'octagonal, technically'.",
    abilities: ["Hydration", "Octogon shield throws", "Tactical pep talks", "Polite headbutts", "Stamina of a tired dad", "Reading glasses (HUD)"],
    friends: ["Mecha Tycoon", "Stormlord", "Crimson Specter", "Arachnaut", "Gamma Goliath"],
    family: ["Margaret Vale (Wife)", "Tilly Vale (Daughter)"],
    enemies: ["Lord Vesper", "Crimson Skull", "Hydra Inc.", "Baron Zima", "Crossbow Carl"],
    powerEffect: "shield",
    stats: [
      { label: "Intelligence", value: 70 },
      { label: "Strength", value: 80 },
      { label: "Speed", value: 72 },
      { label: "Durability", value: 85 },
      { label: "Energy", value: 40 },
      { label: "Fighting", value: 95 },
    ],
    logo: logoLiberty,
    hero: heroLiberty,
    products: [
      { id: "lib-tee", name: "Octogon Shield Tee", description: "It's not a star, it's a 'tactical asterisk'.", price: 27.0 },
      { id: "lib-mug", name: "Hydration Is A Superpower Mug", description: "Reminds you to drink water with subtle aggression.", price: 16.5 },
      { id: "lib-poster", name: "Sentinel Recruitment Poster", description: "Vintage propaganda style. Frame sold separately.", price: 22.0 },
      { id: "lib-shield", name: "Foam Octogon Shield Replica", description: "Officially safe to throw at coworkers (probably).", price: 49.0 },
      { id: "lib-cap", name: "Tactical Pep-Talk Cap", description: "Adjustable. Ships with three motivational quotes.", price: 28.0 },
    ],
  },
  {
    id: "stormlord",
    name: "Stormlord",
    realName: "Thorvald Ironbeard",
    tagline: "Behold! I bring thunder. And mild humidity.",
    color: "#f4a261",
    glowClass: "glow-text-gold",
    origin:
      "Banished from his cloud-citadel for putting metal in the celestial microwave, Stormlord now wields Mjolnaut, an enchanted hammer that doubles as a Bluetooth speaker. His braids are hand-conditioned with actual lightning.",
    abilities: ["Lightning", "Hammer that boomerangs", "Wind sock summoning", "Beard luxury", "Norse-style yelling", "Cape physics"],
    friends: ["Mecha Tycoon", "Liberty Sentinel", "Gamma Goliath", "Valkira", "The Star-Fleet"],
    family: ["Odinic (Father)", "Friggit (Mother)", "Lokai (Brother)", "Helka (Sister)"],
    enemies: ["Lord Vesper", "Lokai", "Helka", "Malachite", "Surtr-Prime"],
    powerEffect: "lightning",
    stats: [
      { label: "Intelligence", value: 65 },
      { label: "Strength", value: 99 },
      { label: "Speed", value: 80 },
      { label: "Durability", value: 98 },
      { label: "Energy", value: 100 },
      { label: "Fighting", value: 88 },
    ],
    logo: logoStorm,
    hero: heroStorm,
    products: [
      { id: "storm-tee", name: "Beard Goals Graphic Tee", description: "Heather-grey, infused with imaginary thunder.", price: 29.0 },
      { id: "storm-mug", name: "Mjolnaut Hammer Mug", description: "Only the worthy can lift it (it's just heavy).", price: 24.0 },
      { id: "storm-poster", name: "Citadel Tourism Poster", description: "'Visit Asgardia: 0/10 reviews, mostly because no one returned.'", price: 22.0 },
      { id: "storm-figure", name: "Mini Mjolnaut Bottle Opener", description: "Be worthy. Open beer. Repeat.", price: 19.0 },
      { id: "storm-cape", name: "Replica Crimson Cape", description: "Adult-size. Dryclean only. Comes with thunder noises (ambient app).", price: 99.0 },
    ],
  },
  {
    id: "gamma-goliath",
    name: "Gamma Goliath",
    realName: "Dr. Bruno Bannock",
    tagline: "Don't make me anxious. You wouldn't like me anxious.",
    color: "#2a9d8f",
    glowClass: "glow-text-blue",
    origin:
      "Dr. Bruno Bannock accidentally microwaved a granola bar for 88 minutes and absorbed enough gamma rays to win a small power plant. He now turns into Gamma Goliath whenever his Wi-Fi disconnects.",
    abilities: ["Stomp", "Bigger stomp", "Crystal-fist combos", "Property destruction", "Surprisingly polite roars", "Photosynthesis (probably)"],
    friends: ["Mecha Tycoon", "Stormlord", "Crimson Specter", "Valkira", "She-Goliath"],
    family: ["Jenna Bannock (Cousin)", "Brendan Bannock (Father)", "Rebeccah Bannock (Mother)"],
    enemies: ["Lord Vesper", "Abominable", "The Lecturer", "Crimson Goliath", "General Rosspole"],
    powerEffect: "smash",
    stats: [
      { label: "Intelligence", value: 88 },
      { label: "Strength", value: 100 },
      { label: "Speed", value: 60 },
      { label: "Durability", value: 100 },
      { label: "Energy", value: 80 },
      { label: "Fighting", value: 75 },
    ],
    logo: logoGamma,
    hero: heroGamma,
    products: [
      { id: "gamma-tee", name: "Glow Gamma Tee (XXXL fit)", description: "Stretches as your gains do. Glow lasts 90 minutes.", price: 32.0 },
      { id: "gamma-mug", name: "Smash-Proof Mug™", description: "Survives drops up to 1.5 meters or one mild tantrum.", price: 22.0 },
      { id: "gamma-poster", name: "'Anger Management Lvl 99' Poster", description: "Goliath mid-roar. Frame your therapist will love.", price: 21.0 },
      { id: "gamma-figure", name: "Squishy Stress Goliath", description: "Squeeze when meetings run long. Screams included.", price: 18.0 },
      { id: "gamma-shorts", name: "Indestructible Stretch Shorts", description: "They survive transformations. You won't.", price: 39.0 },
    ],
  },
  {
    id: "crimson-specter",
    name: "Crimson Specter",
    realName: "Nadya Rominoff",
    tagline: "I have red in my ledger. And red in my closet.",
    color: "#e63946",
    glowClass: "glow-text-red",
    origin:
      "Trained from age six in the Scarlet Academy of Hugs Withheld, Nadya escaped using a hairpin, a flash drive, and a strongly-worded letter. She now fights for the good guys, mostly out of spite.",
    abilities: ["Plasma daggers", "Master of disguise (mostly wigs)", "Acrobatics", "Cold stares", "Tactical sass", "Hood physics"],
    friends: ["Hawkfeather", "Liberty Sentinel", "Mecha Tycoon", "Gamma Goliath", "Director Furey"],
    family: ["Alexei (Father figure)", "Melinka (Mother figure)", "Yelena (Sister)"],
    enemies: ["Lord Vesper", "Tasksmaster", "Drak'eyov", "Scarlet Academy", "Hydra Inc."],
    powerEffect: "strike",
    stats: [
      { label: "Intelligence", value: 85 },
      { label: "Strength", value: 50 },
      { label: "Speed", value: 72 },
      { label: "Durability", value: 55 },
      { label: "Energy", value: 45 },
      { label: "Fighting", value: 95 },
    ],
    logo: logoCrimson,
    hero: heroCrimson,
    products: [
      { id: "spec-tee", name: "Diamond Emblem Tee", description: "Deep crimson, soft fabric, mildly intimidating.", price: 28.0 },
      { id: "spec-mug", name: "'Cold-Brewed Stares' Mug", description: "For black coffee and blacker moods.", price: 17.0 },
      { id: "spec-poster", name: "Specter Recruitment Poster", description: "She's already behind you. Hang it anyway.", price: 22.0 },
      { id: "spec-figure", name: "Plasma Dagger Letter Opener", description: "Glows red. Cuts envelopes. Threatens junk mail.", price: 34.0 },
      { id: "spec-hoodie", name: "Hooded Stealth Hoodie", description: "Deep hood, hidden pockets, suspiciously quiet zippers.", price: 84.0 },
    ],
  },
  {
    id: "arachnaut",
    name: "Arachnaut",
    realName: "Pete Park-Yu",
    tagline: "With great Wi-Fi comes great responsibility.",
    color: "#e63946",
    glowClass: "glow-text-red",
    origin:
      "Bitten by a radioactive intern, high-schooler Pete Park-Yu woke up with super-cling and the ability to launch grappling cables from his wrists. He fights crime between AP exams and unpaid internships.",
    abilities: ["Wall-cling", "Spider-sense (works 60% of the time)", "Web-cable launchers", "Agility", "Coding skills", "Quippy banter"],
    friends: ["Mecha Tycoon", "Ed Reyes", "Em-Jay", "Hap Holloran", "Doctor Strangely"],
    family: ["Aunt Maybelle (Aunt)", "Ben (Uncle, dearly missed)", "Richard Park-Yu (Father)", "Mary Park-Yu (Mother)"],
    enemies: ["Goblin-King", "Doc Octave", "Vulturo", "Mysteryo", "Symbio"],
    powerEffect: "web",
    stats: [
      { label: "Intelligence", value: 90 },
      { label: "Strength", value: 75 },
      { label: "Speed", value: 85 },
      { label: "Durability", value: 70 },
      { label: "Energy", value: 60 },
      { label: "Fighting", value: 80 },
    ],
    logo: logoArachnaut,
    hero: heroArachnaut,
    products: [
      { id: "arach-tee", name: "Compass-Web Graphic Tee", description: "Glow-in-the-dark webbing across the chest.", price: 26.0 },
      { id: "arach-mug", name: "'Coffee-Sense Tingling' Mug", description: "11oz of pure 'just one more all-nighter' fuel.", price: 16.0 },
      { id: "arach-poster", name: "Rooftop Crouch Poster", description: "Iconic pose. Looks great above your monitor.", price: 21.0 },
      { id: "arach-figure", name: "Mini Web-Launcher Keychain", description: "Functional grapple range: 0.5 meters. Looks dope.", price: 19.0 },
      { id: "arach-hoodie", name: "Web-Tech Crimson Hoodie", description: "Soft inside, tactical outside. Wash cold, swing warm.", price: 79.0 },
    ],
  },
];
