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
}

export const characters: Character[] = [
  {
    id: "iron-man",
    name: "Iron Man",
    realName: "Tony Stark",
    tagline: "Genius. Billionaire. Playboy. Philanthropist.",
    color: "#e63946",
    glowClass: "glow-text-red",
    origin: "After being held captive in an Afghan cave, billionaire engineer Tony Stark created a unique weaponized suit of armor to fight evil. With a new outlook on life, he uses his genius and the Iron Man armor to protect the world as the invincible Iron Man.",
    abilities: ["Genius-level intellect", "Arc Reactor technology", "Repulsor blasts", "Flight", "Advanced AI systems", "Nano-tech armor"],
    friends: ["War Machine", "Spider-Man", "Captain America", "Bruce Banner", "Thor"],
    family: ["Pepper Potts (Wife)", "Morgan Stark (Daughter)", "Howard Stark (Father)", "Maria Stark (Mother)"],
    enemies: ["Thanos", "Mandarin", "Obadiah Stane", "Ultron", "Whiplash"],
    powerEffect: "repulsor",
    stats: [
      { label: "Intelligence", value: 98 },
      { label: "Strength", value: 85 },
      { label: "Speed", value: 78 },
      { label: "Durability", value: 90 },
      { label: "Energy", value: 95 },
      { label: "Fighting", value: 70 },
    ],
  },
  {
    id: "captain-america",
    name: "Captain America",
    realName: "Steve Rogers",
    tagline: "I can do this all day.",
    color: "#457b9d",
    glowClass: "glow-text-blue",
    origin: "During World War II, Steve Rogers volunteered for an experimental program that transformed him into the Super-Soldier known as Captain America. Armed with his indestructible Vibranium shield, he became the sentinel of liberty and leader of the Avengers.",
    abilities: ["Super Soldier Serum", "Peak human strength", "Vibranium shield mastery", "Master tactician", "Expert martial artist", "Enhanced agility"],
    friends: ["Bucky Barnes", "Iron Man", "Black Widow", "Falcon", "Thor"],
    family: ["Peggy Carter (Wife)", "Sarah Rogers (Mother)", "Joseph Rogers (Father)"],
    enemies: ["Red Skull", "Hydra", "Thanos", "Crossbones", "Baron Zemo"],
    powerEffect: "shield",
    stats: [
      { label: "Intelligence", value: 70 },
      { label: "Strength", value: 80 },
      { label: "Speed", value: 72 },
      { label: "Durability", value: 85 },
      { label: "Energy", value: 40 },
      { label: "Fighting", value: 95 },
    ],
  },
  {
    id: "thor",
    name: "Thor",
    realName: "Thor Odinson",
    tagline: "I am Thor, son of Odin.",
    color: "#f4a261",
    glowClass: "glow-text-gold",
    origin: "Thor is the Asgardian God of Thunder, son of Odin the All-Father. Wielding the enchanted hammer Mjolnir, he is one of the most powerful beings in the universe and a founding member of the Avengers.",
    abilities: ["God-like strength", "Lightning manipulation", "Mjolnir/Stormbreaker", "Near invulnerability", "Flight", "Bifrost summoning"],
    friends: ["Iron Man", "Captain America", "Hulk", "Valkyrie", "Guardians of the Galaxy"],
    family: ["Odin (Father)", "Frigga (Mother)", "Loki (Brother)", "Hela (Sister)"],
    enemies: ["Thanos", "Loki", "Hela", "Malekith", "Surtur"],
    powerEffect: "lightning",
    stats: [
      { label: "Intelligence", value: 65 },
      { label: "Strength", value: 99 },
      { label: "Speed", value: 80 },
      { label: "Durability", value: 98 },
      { label: "Energy", value: 100 },
      { label: "Fighting", value: 88 },
    ],
  },
  {
    id: "hulk",
    name: "Hulk",
    realName: "Bruce Banner",
    tagline: "You wouldn't like me when I'm angry.",
    color: "#2a9d8f",
    glowClass: "glow-text-blue",
    origin: "Caught in the blast of a gamma bomb, Dr. Bruce Banner transforms into the incredible Hulk — a towering green-skinned creature of limitless strength. The angrier Hulk gets, the stronger Hulk gets.",
    abilities: ["Unlimited strength", "Invulnerability", "Regeneration", "Thunderclap", "Genius-level intellect (Banner)", "Gamma radiation immunity"],
    friends: ["Iron Man", "Thor", "Black Widow", "Valkyrie", "She-Hulk"],
    family: ["Jennifer Walters (Cousin)", "Brian Banner (Father)", "Rebecca Banner (Mother)"],
    enemies: ["Thanos", "Abomination", "Leader", "Red Hulk", "General Ross"],
    powerEffect: "smash",
    stats: [
      { label: "Intelligence", value: 88 },
      { label: "Strength", value: 100 },
      { label: "Speed", value: 60 },
      { label: "Durability", value: 100 },
      { label: "Energy", value: 80 },
      { label: "Fighting", value: 75 },
    ],
  },
  {
    id: "black-widow",
    name: "Black Widow",
    realName: "Natasha Romanoff",
    tagline: "I've got red in my ledger. I'd like to wipe it out.",
    color: "#e63946",
    glowClass: "glow-text-red",
    origin: "Trained from childhood in the deadly Red Room program, Natasha Romanoff became one of the world's most lethal assassins. Defecting to S.H.I.E.L.D., she used her skills as an Avenger to atone for her past.",
    abilities: ["Master spy", "Expert martial artist", "Weapons specialist", "Acrobatics", "Tactical genius", "Electroshock weaponry"],
    friends: ["Hawkeye", "Captain America", "Iron Man", "Hulk", "Nick Fury"],
    family: ["Alexei Shostakov (Father figure)", "Melina Vostokoff (Mother figure)", "Yelena Belova (Sister)"],
    enemies: ["Thanos", "Taskmaster", "Dreykov", "Red Room", "Hydra"],
    powerEffect: "strike",
    stats: [
      { label: "Intelligence", value: 85 },
      { label: "Strength", value: 50 },
      { label: "Speed", value: 72 },
      { label: "Durability", value: 55 },
      { label: "Energy", value: 45 },
      { label: "Fighting", value: 95 },
    ],
  },
  {
    id: "spider-man",
    name: "Spider-Man",
    realName: "Peter Parker",
    tagline: "With great power comes great responsibility.",
    color: "#e63946",
    glowClass: "glow-text-red",
    origin: "Bitten by a radioactive spider, teenager Peter Parker gained incredible powers. Mentored by Tony Stark and driven by the memory of his Uncle Ben, he fights crime as the friendly neighborhood Spider-Man.",
    abilities: ["Wall-crawling", "Spider-sense", "Superhuman strength", "Web-shooting", "Enhanced agility", "Genius intellect"],
    friends: ["Iron Man", "Ned Leeds", "MJ", "Happy Hogan", "Doctor Strange"],
    family: ["May Parker (Aunt)", "Ben Parker (Uncle, deceased)", "Richard Parker (Father)", "Mary Parker (Mother)"],
    enemies: ["Green Goblin", "Doctor Octopus", "Vulture", "Mysterio", "Venom"],
    powerEffect: "web",
    stats: [
      { label: "Intelligence", value: 90 },
      { label: "Strength", value: 75 },
      { label: "Speed", value: 85 },
      { label: "Durability", value: 70 },
      { label: "Energy", value: 60 },
      { label: "Fighting", value: 80 },
    ],
  },
];
