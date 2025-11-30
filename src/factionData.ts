export interface FactionDescriptionSection {
  title: string;
  content: string;
}

export interface FactionReference {
  id: string;
  name: string;
  description: FactionDescriptionSection[]; // Organized sections
  relationship: "Allied" | "Hostile" | "Neutral" | "Unknown" | "Oppressed";
  icon?: string;
  // GM-only information
  gmNotes?: FactionDescriptionSection[]; // Organized GM context
  internalStructure?: FactionDescriptionSection[]; // Organized structure details
  secrets?: FactionDescriptionSection[]; // Organized secrets
}

export const factionData: FactionReference[] = [
  {
    id: "city-guard",
    name: "The City Guard",
    description: [
      {
        title: "Overview",
        content:
          "The visible arm of state control—a uniformed, arcano-augmented force that enforces decrees and suppresses dissent. They began as a practical civic necessity but have gradually shifted from policing to authoritarian enforcement, losing their civic soul in the process.",
      },
      {
        title: "Core Principles",
        content:
          "The Guard believes deeply that they are society's protectors, but this belief is self-righteous, distorted, and increasingly imperialistic. Their core mantra: 'Our empire needs discipline.' Many view civilians not as those they serve, but as obstacles or enemies who 'don't understand the bigger picture.' For Guardsmen, cruelty becomes patriotism; intimidation becomes civic duty.",
      },
      {
        title: "Public Presence",
        content:
          "The Guard is most visible at checkpoints, major streets, transit hubs, and high-traffic commercial areas. They conduct document inspections, random home searches, public lectures on 'civic responsibility,' physical intimidation, public humiliation of dissidents, brutal crackdowns on protests, and forced disappearances. Citizens live under a constant sense of conditional safety.",
      },
    ],
    relationship: "Hostile",
    icon: "🛡️",
    gmNotes: [
      {
        title: "Internal Factions",
        content:
          "Not monolithic—contains hardliners (imperial dreamers), enforcers (bullies who enjoy authority), moderates (tiny, terrified bloc trying to limit harm), disillusioned rank-and-file (joined for safety but now regret it), infiltrated officers (replaced by intellect devourers), corrupt pragmatists (view uniform as license to extort), and young recruits (primed by propaganda, enamored with militaristic identity).",
      },
    ],
    internalStructure: [
      {
        title: "Command Structure",
        content:
          "Commander-General → Captains → Sergeants → Patrol Units. Captains run districts like fiefdoms. Directives from the Council are interpreted inconsistently. A hidden intelligence cell overrides much of the chain of command. This chaotic power dynamic only worsens abuses.",
      },
    ],
    secrets: [
      {
        title: "Infiltration",
        content:
          "Upper command includes several replaced or partially controlled individuals. The Guard's paranoia works perfectly for the Cabal. The Guard believes they control the bio-arcane tool (intellect devourers), but they are severely mistaken. This is a truth meant for players to uncover gradually.",
      },
    ],
  },
  {
    id: "city-council",
    name: "The City Council",
    description: [
      {
        title: "Overview",
        content:
          "A wealthy oligarchy masquerading as an elected civilian government. Over 150 years, it has evolved from a small committee of elites into a nine-member imperial cabal that directs the city's authoritarian transformation. The Guard may be the iron fist, but the Council is the mind behind it.",
      },
      {
        title: "Ambitions",
        content:
          "Their ambitions are grand, ruthless, and imperial: to conquer neighboring city-states and place themselves at the apex of a new empire. The Council sees itself as visionary statesmen, architects of a future empire, and the rightful heirs to the city's destiny. Their core conviction: 'The city is not merely a city. It is the seed of an empire.'",
      },
      {
        title: "Public Image",
        content:
          "The Council carefully crafts an image of benevolent, visionary leadership through grand public appearances, posters, banners, and broadcasts featuring serene portraits, and patriotic rhetoric about unity, strength, and destiny. While the Guard intimidates, the Council inspires—or pretends to. Together they form a complete totalitarian ecosystem: one fist, one face, one future.",
      },
    ],
    relationship: "Hostile",
    icon: "🏛️",
    gmNotes: [
      {
        title: "Historical Evolution",
        content:
          "Evolved from five members 150 years ago (merchant princes, arcano-industrial pioneers, landed elites) to eight (added guild magnates, financiers, arcano-tech innovators), then to twelve during their most self-confident phase, then contracted to nine after purging three dissenters 20-10 years ago. The three councilors who rejected expansionist policy disappeared under mysterious circumstances, were never publicly mourned, and were quietly erased from propaganda.",
      },
    ],
    internalStructure: [
      {
        title: "The Nine",
        content:
          "Nine seats around a ring-shaped table in halls with marble floors, gold-trimmed pillars, arcano-tech chandeliers, and sound-dampening runes for total privacy. They rule collectively but uneasily, each with a domain (finance, propaganda, city planning, arcano-tech regulation, foreign affairs, etc.). They admire one another, revere their shared destiny, and yet distrust each other enough to maintain careful equilibrium.",
      },
      {
        title: "Symbol",
        content:
          "A crowned tower topped with nine stars. The tower represents strength, the crown their claim to rule, the stars the Nine.",
      },
    ],
    secrets: [
      {
        title: "Compromised Members",
        content:
          "Two Council members are fully compromised by the Intellect Devourer Cabal. Their identities are unknown, even to most high-ranking individuals. The Council believes the Cabal is elevating them to imperial greatness. In truth, they are tools—vassals in a plan much larger than they can comprehend.",
      },
      {
        title: "Control of the Guard",
        content:
          "The Council controls the Guard through appointments (placing loyalists into command positions), surveillance oversight (approving expansions of arcano-tech scry networks), and political pressure (replacing captains who fail to enact decrees with enough zeal).",
      },
    ],
  },
  {
    id: "peoples-sword",
    name: "The People's Sword",
    description: [
      {
        title: "Overview",
        content:
          "The beating heart of civilian resistance—a grassroots movement born from the city's suffering, bound together by necessity, conviction, and the stubborn belief that people deserve better than brutality. They did not begin noble. They did not begin organized. They began angry—and rightfully so.",
      },
      {
        title: "Core Principles",
        content:
          "At their core, they believe: 'Community is the cure for authoritarianism.' They reject power for power's sake. They reject empire. They reject cruelty as a governing philosophy. Their mantra: 'Every tyranny falls.' (And even if we don't live to see it, we stand because it is right.)",
      },
      {
        title: "Identity",
        content:
          "What started as raw defiance against early Guard brutality has grown into the city's most resilient, compassionate, and desperate opposition force. The People's Sword is gritty, worn down, dogged, and profoundly human. What defines them emotionally: hard-won community bonds, exhaustion without surrender, wary optimism, the understanding they may not survive, and the insistence that the people deserve better.",
      },
    ],
    relationship: "Allied",
    icon: "⚔️",
    gmNotes: [
      {
        title: "PC Connection",
        content:
          "The PCs became involved when one of them investigated Eliah's disappearance, discovering she had joined the People's Sword. The group was uncovering threads of Guard corruption, and the PC and the Sword fought side-by-side during the investigation. This shared struggle forged a bond that still shapes the movement.",
      },
      {
        title: "Leadership",
        content:
          "Hub-and-spoke leadership: Bree (motivational idealist, strategic mind, drives Ember Cell's riskier operations), Elijah (organizes shelter networks, emotional heart and morale backbone), Leo (former Plumber's Union member, Underflow Cell's guide, quietly carries more weight than most realize), and Rose 'Old Iron' (hardened, older, immovable, manages logistics and refugee support, compassion is steely, not soft).",
      },
    ],
    internalStructure: [
      {
        title: "Cell Structure",
        content:
          "Each cell knows their mission and immediate contacts, minimal information beyond that. This protects the network—and the people who rely on it.",
      },
      {
        title: "The Three Core Cells",
        content:
          "The People's Sword is organized into three core cells, each with distinct responsibilities and key members who anchor their operations.",
      },
      {
        title: "The Haven Cell (Safehouses & Logistics)",
        content:
          "Responsible for: Setting up and taking down safehouses, organizing supply caches, moving refugees, managing temporary shelters. Elijah often works closely with them.",
      },
      {
        title: "The Underflow Cell (Tunnels & Routes)",
        content:
          "Responsible for: Navigating old sewage spillways and hidden tunnels, mapping Glowflow-safe routes, moving supplies, people, and intelligence, identifying new bases and shelters. Leo is their anchor, harnessing his Plumber's Union background.",
      },
      {
        title: "The Ember Cell (Assault, Protection, Infiltration)",
        content:
          "Responsible for: Direct protection of civilians, infiltrating Guard structures, sabotage operations, high-risk missions. Bree typically coordinates their deployments. Rose ensures they have what they need to succeed—and survive.",
      },
      {
        title: "Communication",
        content:
          "Street vendors using coded phrases, lantern codes (color, height, or placement), and chalk marks at knee-height marking safe paths or warnings.",
      },
    ],
    secrets: [
      {
        title: "Anti-Infiltration",
        content:
          "Uses emotional familiarity tests ('Tell me something only we'd know'), sympathetic spellcasters and psionics detecting mental irregularities when possible, and behavioral scrutiny looking for emotional disconnect or subtle breaks. It's imperfect. And it terrifies them.",
      },
      {
        title: "Recruitment",
        content:
          "Philosophy: 'Anyone willing to help is welcome.' This makes them accessible, human, and powerful—but also vulnerable, terrified of infiltration, and dependent on emotional and psionic screening. Recruitment is fluid, dictated by need and circumstance. Many join after personal loss at the hands of the regime.",
      },
    ],
  },
  {
    id: "plumbers-union",
    name: "The Plumber's Union",
    description: [
      {
        title: "Overview",
        content:
          "One of the city's oldest and most essential arcano-technical organizations—a fully structured labor union composed of artificers, warlocks, mages, planar technicians, and generational craftspeople who maintain the city's water network and extra-planar plumbing systems.",
      },
      {
        title: "Purpose",
        content:
          "They are the people who keep the city alive: its pipes, wards, drainage portals, planar waste nodes, pressure regulators, and fault points. Because their work takes them beneath the city—into tunnels, chambers, breaches, and forgotten conduits—they have become one of the most important covert allies of the People's Sword.",
      },
      {
        title: "Identity",
        content:
          "Not revolutionaries. Not radicals. Just highly skilled workers who've seen too much. The Union sees itself as experts, craftspeople, technicians, and guardians of infrastructure—people who solve problems others don't understand. Their culture values apprenticeships, shared expertise, practicality, quiet pride, and work done right the first time.",
      },
    ],
    relationship: "Neutral",
    icon: "🔧",
    gmNotes: [
      {
        title: "Relationship with Guard",
        content:
          "The Guard treats the Union as inferior, expendable, and inconvenient through overbearing inspections, unnecessary detainments, bullying and intimidation, interference in infrastructure work, and 'supervision' that gets people hurt. The Union is angry, hostile, and fed up. Every member has at least one Guard horror story. This is what pushed them toward the resistance—not ideology, but cruelty.",
      },
    ],
    internalStructure: [
      {
        title: "Organization",
        content:
          "Fully structured labor union with bylaws, elections, committees, safety standards, and certifications for planar-handling competency. Veteran apprenticeship traditions: every new worker comes under the wing of an experienced member. 'You don't learn the undercity from books.'",
      },
      {
        title: "Work",
        content:
          "Union members install, maintain, and monitor: extra-planar waste nodes (magically efficient disposal conduits), residential planar stabilizers (arcano-tech devices regulating leaks, rifts, and pressure), emergency breach seals (when someone installs a device incorrectly), and arcano-magical pipelines (water and sewer systems with magic pressure valves, glyph-plated pipes, dimensional bypasses, and telemetry sigils).",
      },
    ],
    secrets: [
      {
        title: "Underground Network",
        content:
          "The Union uses the underground for transit routes, emergency escape paths, hidden maintenance chambers, and storage of arcane tools. They share this knowledge fairly openly with the People's Sword, and vice versa. This has created an interwoven underground network—part infrastructure, part refuge, part smuggling route.",
      },
      {
        title: "Political Tension",
        content:
          "The Union and the Sword are two groups feeling each other out. They share knowledge, tunnels, supplies, and occasional missions. But the Union hasn't committed fully. They fear: the Sword may fail; if the rebellion collapses, the Guard will destroy the Union; and without the Union, the city's infrastructure—and people—will suffer. Their support is currently covert, conditional, and growing. Some members double-operate between both groups. Some are undecided. Some want open rebellion.",
      },
    ],
  },
  {
    id: "intellect-devourer-cabal",
    name: "The Intellect Devourer Cabal",
    description: [
      {
        title: "Overview",
        content:
          "A mysterious hidden organization. Their true nature remains unknown to most citizens.",
      },
    ],
    relationship: "Unknown",
    icon: "🧠💀",
    gmNotes: [
      {
        title: "Origin",
        content:
          "The Cabal did not invade Elkin intentionally. They were summoned by accident, the catastrophic result of the city's earliest experiments with extra-planar waste technology. When planar researchers attempted to stabilize a long-distance extradimensional conduit, they created a sympathetic resonance with the Astral Sea, a fragile membrane tear, and a momentary beacon visible to fleeing aberrations.",
      },
      {
        title: "The Elder Brain",
        content:
          "A mind flayer strike team, retreating from an interplanar conflict, followed the beacon. They killed or replaced the researchers, secured the laboratory, widened the breach, constructed the first stabilizer, and installed the Elder Brain's embryonic core. Over the next several years, they created multiple interlinked astral portals, established relay nodes beneath the capital-city borough, transported the Elder Brain into Elkin through anchored planar gates, and built neural connective chambers beneath government infrastructure. This Elder Brain now directs all aberrant activity in the city.",
      },
      {
        title: "Goals",
        content:
          "The Elder Brain's goals: survive (fleeing its old war), regroup (feed, expand, rebuild), and retaliate (this plane will be its staging ground). Elkin, unknowingly, is the first foothold of a soon-to-be astral war.",
      },
    ],
    internalStructure: [
      {
        title: "Long-Term Plan",
        content:
          "Phase one: secure political control, dominate law enforcement, infiltrate infrastructure, feed without raising alarms, construct psychic nexuses, link portals to the Astral hive. Phase two: create an army-scale presence, stabilize long-range astral transport, harvest local resources (intellectual + arcane), subjugate or puppet the ruling class. Phase three (far future): launch offensive retaliation into their old conflict, use Elkin as a fully converted staging realm.",
      },
      {
        title: "Communication Network",
        content:
          "The Elder Brain maintains contact through telepathic relays hidden in astral nodes beneath the capital district, mind flayer intermediaries acting as 'psychic officers,' command pulses that cascade through devourer puppets, and silent network mind-threads creating micro-hives within the Guard structure.",
      },
    ],
    secrets: [
      {
        title: "Infiltration Footprint",
        content:
          "The Guard's upper command includes several replaced or partially controlled individuals used as enforcement tools, intelligence conduits, plausible deniability mechanisms, and blunt suppression instruments. Two Council members are fully compromised—their identities unknown even to most high-ranking individuals.",
      },
      {
        title: "Infrastructure Corruption",
        content:
          "The Cabal has corrupted arcano-tech stabilizers, fused organic astral membranes to existing infrastructure, constructed hidden chambers beneath government buildings, and begun replacing parts of the planar waste network with their own structures. The deeper below the capital district you go, the more the city feels alive in the wrong way.",
      },
      {
        title: "Replacement Methods",
        content:
          "Classic devourer replacement (brain removed, devourer inhabits skull, mimics body perfectly) used frequently in the Guard and selected civilians. Subtle partial control (host remains alive, illithid psychic influence guides decisions, host rationalizes thoughts as 'inspiration' or 'divine purpose,' personality shifts: colder, more confident, more cruel) used for Council infiltration.",
      },
      {
        title: "Signs of Compromise",
        content:
          "Early behavioral shifts include memory gaps, odd pauses or blanks in conversation, personality flattening, emotionless 'correctness,' an inexplicable interest in planar tech, and a faint psychic tension in their presence. These symptoms are subtle enough to be mistaken for stress, indoctrination, or burnout.",
      },
      {
        title: "Public Perception",
        content:
          "Public perception blames the Guard ('night arrests, no trial') and the Council ('political rivals don't last long'). No one suspects aberrations. No one even imagines it. This makes the Cabal's work effortless.",
      },
    ],
  },
  {
    id: "juno-academy-remnants",
    name: "The Juno Academy Remnants",
    description: [
      {
        title: "What the Academy Was",
        content:
          "The Juno Academy began as a humanitarian institution: a place to teach and train young moral idealists, cultivate compassion, ethical magic, and civic responsibility, and empower gifted youth to help their communities. As the Guard began neglecting civilian welfare, the Academy stepped up, deploying teams to help with magical crises, mediating conflicts, repairing arcano-tech damage, and handling dangerous events the Guard ignored.",
      },
      {
        title: "The Destruction",
        content:
          "The Academy became famous for solving problems no one else would touch, and more importantly, for refusing to turn their back on the people. As the Council and the Guard drifted toward authoritarianism, the Academy became their most vocal opposition. When the regime decided to make its true nature unmistakable, the first blow was struck at the Juno Academy. The raid was aggressive, violent, and sudden—one of the few events where the Cabal was directly involved. During the attack, Heather (the Academy leader) was killed, Muldugen (one of the key figures) was captured, Sebastian (head researcher and technician) vanished, and many students and faculty were killed or imprisoned.",
      },
      {
        title: "The Remnants",
        content:
          "Now about a dozen scattered survivors remain, all absorbed into the People's Sword. They are not an organization anymore. Just survivors, traumatized and angry, with nowhere else to go.",
      },
    ],
    relationship: "Allied",
    icon: "📚🔥",
    gmNotes: [
      {
        title: "Identity",
        content:
          "The Remnants' character is defined by survivor's guilt ('Why did I live? Why did they die? Could I have warned more people? Could I have saved anyone?'), loss (they lost friends, mentors, their home, their future), determination (they want to uncover the truth about captured faculty, rescue those still alive, find Sebastian, and fight the regime with whatever knowledge they still have), and compassion (they maintain the Academy's first principle: 'Help people, even when it costs you').",
      },
    ],
    internalStructure: [
      {
        title: "Role in Rebellion",
        content:
          "They serve two vital roles: trauma survivors who deepen the emotional stakes (living reminders of what the regime destroyed, what the city lost, and what the rebellion is fighting for), and educators and trainers (they quietly teach ethical magic, civic responsibility, survival skills, conflict mediation, how to resist without losing your humanity).",
      },
      {
        title: "Organization",
        content:
          "No separate organization—just individuals carrying an identity in their hearts. They tell stories of the Academy, not just to remember, but to keep the philosophy alive. Their trust must be earned, but once earned, it is deep.",
      },
    ],
    secrets: [
      {
        title: "Regime Propaganda",
        content:
          "The Council and Guard claim the Academy harbored traitors, conspired with a rival nation, and conducted forbidden research. This lie is widely circulated. Civilians suspect: 'The Academy died protecting the city.' They don't know the details, but they feel the truth.",
      },
      {
        title: "The Horrific Reality",
        content:
          "Few know that the Cabal was directly involved, key faculty were targeted for their minds, and the regime coordinated with aberrations. The public is nowhere near imagining the real horror.",
      },
      {
        title: "Secret Hope",
        content:
          "Their most unspoken wish: rescue the captured faculty—especially Muldugen—and learn the fate of Sebastian. Sebastian's disappearance is a wound. The party has found hints that he was not captured, but the survivors do not know this yet. This mystery sits in the heart of the rebellion's emotional arc.",
      },
    ],
  },
  {
    id: "industrial-guilds",
    name: "The Industrial Guilds",
    description: [
      {
        title: "Overview",
        content:
          "High-impact, high-risk trades that keep Elkin's infrastructure alive. They were once powerful and semi-independent economic engines. Today, they are exploited, stripped of autonomy, politically shackled, bleeding workers to the rebellion, and increasingly absorbed into state control.",
      },
      {
        title: "Composition",
        content:
          "The Industrial Guilds consist of Foundries & Metalworks (iron and steel production, weapon and armor fabrication, large-scale mechanical components), Arcano-Machinery Fabricators (magical engines, arcane pressure valves, glyph-etched tools, stabilizers, conduits, and power cores), and Shipwrights & Mechanical Dockworkers (construction of river and coastal vessels, cargo lifters and loading systems, arcano-propelled tugboats, dockside machinery maintenance).",
      },
      {
        title: "Current State",
        content:
          "Their masters are corrupt. Their workers are terrified. The Guilds are no longer guilds—they are departments of an authoritarian state. These industries demand high skill, high discipline, long hours, physical risk, and tight oversight. Historically, they commanded respect. Now they command fear.",
      },
    ],
    relationship: "Oppressed",
    icon: "⚙️🏭",
    gmNotes: [
      {
        title: "Guildmasters",
        content:
          "Most guildmasters are corrupt, complicit, and connected to the Council. A few are even members of the Council itself. They see workers as raw labor, expendable, a resource to feed into the regime's growing imperial machine. These masters aren't leaders—they're overseers.",
      },
      {
        title: "State Control",
        content:
          "There is no Guild Council anymore. No unified labor voice. Instead, the Council dictates orders directly to guild managers. Guildmasters have become bureaucratic extensions of the regime. The industrial system is essentially state-owned by force.",
      },
    ],
    internalStructure: [
      {
        title: "Treatment of Workers",
        content:
          "Guild workers experience constant Guard oversight, harassment, quota-based pressure, unsafe conditions, confiscation of 'uncooperative' personal possessions, and silent disappearances of outspoken workers. They are treated as resources to squeeze—not citizens, not skilled laborers, just parts in a machine.",
      },
      {
        title: "Emotional Atmosphere",
        content:
          "The emotional atmosphere is bitter, afraid, exhausted, and demoralized. They know their guilds are being swallowed by the authoritarian state. They know their guildmasters won't protect them. They know 'accidents' claim the outspoken. Hope is dwindling. This is why so many ex-workers join the People's Sword.",
      },
    ],
    secrets: [
      {
        title: "Relationship with Resistance",
        content:
          "Workers and ex-workers form a significant portion of the People's Sword membership. Their reasons: economic desperation, moral outrage, survival, wanting to protect families. However, the guildmasters, overseers, and industrial leadership are uniformly hostile to the Sword. They comply with the Council and crush any internal dissent.",
      },
      {
        title: "Current Activity",
        content:
          "As of now, there is no guild-based underground activity. No smuggling. No secret sabotage rings. No hidden cells. Individuals occasionally defect or flee to the Sword, but the guilds themselves are inert, heavily watched machines. If rebellion reaches a tipping point, their role could change dramatically—but for now, they survive by obeying.",
      },
    ],
  },
];
