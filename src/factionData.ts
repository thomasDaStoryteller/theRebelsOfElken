export interface FactionReference {
  id: string;
  name: string;
  description: string;
  relationship: "Allied" | "Hostile" | "Neutral" | "Unknown" | "Oppressed";
  icon?: string;
}

export const factionData: FactionReference[] = [
  {
    id: "city-guard",
    name: "The City Guard",
    description:
      "The visible arm of state control—a uniformed, arcano-augmented force that enforces decrees and suppresses dissent. They believe they are society's protectors, but their self-righteous ideology has twisted into authoritarian enforcement.",
    relationship: "Hostile",
    icon: "🛡️",
  },
  {
    id: "city-council",
    name: "The City Council",
    description:
      "A wealthy oligarchy masquerading as elected government. Nine members who direct the city's authoritarian transformation with imperial ambitions. They control the Guard and drive the propaganda machine.",
    relationship: "Hostile",
    icon: "🏛️",
  },
  {
    id: "peoples-sword",
    name: "The People's Sword",
    description:
      "The beating heart of civilian resistance—a grassroots movement born from the city's suffering. They believe community is the cure for authoritarianism and operate through independent cells to protect civilians and fight the regime.",
    relationship: "Allied",
    icon: "⚔️",
  },
  {
    id: "plumbers-union",
    name: "The Plumber's Union",
    description:
      "Essential arcano-technical workers who maintain the city's water network and extra-planar plumbing systems. They share underground routes with the resistance but haven't fully committed, fearing the consequences of failure.",
    relationship: "Neutral",
    icon: "🔧",
  },
  {
    id: "intellect-devourer-cabal",
    name: "The Intellect Devourer Cabal",
    description:
      "A hidden interplanar war machine threading itself through the city's infrastructure. They've infiltrated the Guard and Council, using them as tools in a plan much larger than anyone realizes. Their true nature remains unknown to most.",
    relationship: "Unknown",
    icon: "🧠💀",
  },
  {
    id: "juno-academy-remnants",
    name: "The Juno Academy Remnants",
    description:
      "Survivors of the destroyed humanitarian academy. They carry survivor's guilt and determination to rescue captured faculty. Now absorbed into the People's Sword, they serve as educators and reminders of what the regime destroyed.",
    relationship: "Allied",
    icon: "📚🔥",
  },
  {
    id: "industrial-guilds",
    name: "The Industrial Guilds",
    description:
      "High-impact trades that keep the city's infrastructure alive. Once powerful and independent, they're now exploited, stripped of autonomy, and increasingly absorbed into state control. Workers are bitter, afraid, and many defect to the resistance.",
    relationship: "Oppressed",
    icon: "⚙️🏭",
  },
];

