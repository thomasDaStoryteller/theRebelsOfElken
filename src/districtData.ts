export interface DistrictLocation {
  name: string;
  description: string;
}

export interface DistrictNPC {
  name: string;
  role: string;
  description: string;
}

export interface DistrictData {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  locations: DistrictLocation[];
  npcs: DistrictNPC[];
  // GM-only
  gmNotes?: string;
  gmSecrets?: string;
}

export const districtData: DistrictData[] = [
  {
    id: "lanternward",
    name: "Lanternward",
    icon: "🏮",
    tagline: "The heart of Elken — stubborn, proud, and still beating.",
    description:
      "Lanternward is low-slung and welcoming, its buildings never reaching too high, as if the district prefers to stay at eye level with its people. Before the lockdown, it was a riot of noise and dialects — travelers, traders, immigrants, all layering their voices into a constant human hum. The district didn't just house the city's heart; it was the heartbeat itself. Its motto is casual, almost defiant: \"We'll figure it out.\"\n\nNow the lockdown has changed things. The pride remains, but it's tempered with something harder — wariness, closed ranks, a quiet grief for what was. At its best, Lanternward is a community holding together. At its worst, old petty rivalries fester and the ugliness that the open chaos once drowned out has gone underground, where it festers quietly.",
    locations: [
      {
        name: "Market Street",
        description:
          "The widest, most direct route to the Airship dock. An eclectic jumble of shops, styles, and desperate cheer. At its centre, a permanent 360-degree theatrical stage where performers once entertained packed crowds. Now it hosts propaganda speeches and public executions. The locals watch with disgust they've learned to hide.",
      },
      {
        name: "Artists' Bottleneck (\"The Neck\")",
        description:
          "An accidental square near Bramblecourt, created by poor city planning. Became a clandestine graffiti spot, then something more. Businesses and homeowners adjacent to it voluntarily gave up portions of their property to create permanent access for artists and visitors. The community maintains it together — a small act of collective defiance.",
      },
      {
        name: "The Dapper Goblin",
        description:
          "Griv's pub. Warm, welcoming, a gathering place for those who remember better times. Second only to the Gilded Tankard in popularity, first in genuine affection.",
      },
      {
        name: "Rose's Pub",
        description:
          "Name TBD. A quiet, well-loved establishment whose basement holds one of the most carefully hidden entrances to the Underflow. A site of quiet resistance.",
      },
      {
        name: "The Crossroads Cistern",
        description:
          "Located beneath the main Market Street stage. Originally allowed performers to prepare for surprise theatrical reveals. Now the most obvious entrance to the Underflow — and a growing liability.",
      },
    ],
    npcs: [
      {
        name: "Grivbac \"Griv\" Clothmane",
        role: "Proprietor, The Dapper Goblin",
        description:
          "A goblin who left his family's tailoring business to open his own pub with community support. Universally charming, genuinely kind. Rumors swirl about his family's unusual longevity — rumors that could have turned dark long ago if Griv weren't so impossibly likable.",
      },
      {
        name: "Rose",
        role: "Pub Owner & Resistance Contact",
        description:
          "Details TBD. Beloved by the community. Her pub's basement holds a hidden entrance to the Underflow, making her one of the most quietly important figures in the district's resistance network.",
      },
      {
        name: "The Pickers",
        role: "Gang of orphaned scavengers",
        description:
          "A loose collective of orphaned children who scavenge waste areas for discarded archanotech, repairing and repurposing it with surprising skill. Tolerated and quietly protected by many locals. A point of pride for the community.",
      },
      {
        name: "The Propagandist",
        role: "Former professor, government mouthpiece",
        description:
          "A former university professor who now speaks publicly in favour of the government's imperial shift. His presence at the Market Street stage is a daily reminder of what's been lost. The most despised figure in the district.",
      },
    ],
    gmNotes:
      "Friction with Blast Block: the industrial district presses against Lanternward's edges, its guilds trying to claim land and manipulate property values. Near the border, Lanternward grows rough and neglected — gangs operate there with near-impunity. Internal tensions remain from old merchant rivalries, now suppressed by the lockdown but still simmering. Trust is harder to earn. Outsiders are viewed with suspicion. The worst-case scenario the community fears: a full lockdown sweep, guards ransacking homes, dragging away suspected collaborators.",
    gmSecrets:
      "The Underflow in Lanternward: The Crossroads Cistern beneath Market Street is the obvious entrance — everyone knows it exists, and it's a liability. Rose's pub basement is the hidden one, carefully maintained and known only to trusted resistance members. The People's Sword uses the Lanternward Underflow network as their primary operational base. The resistance lives, literally, beneath the community's feet.",
  },
  {
    id: "bramblecourt",
    name: "Bramblecourt",
    icon: "🌿",
    tagline: "The tangled heart of the working poor.",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    locations: [
      {
        name: "The Briar Tap",
        description:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      },
      {
        name: "Tanglevine Alley",
        description:
          "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
      },
      {
        name: "Courter's Well",
        description:
          "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.",
      },
    ],
    npcs: [
      {
        name: "Silla Drent",
        role: "Fence & Information Broker",
        description:
          "Pellentesque habitant morbi tristique senectus et netus. Vestibulum tortor quam feugiat vitae.",
      },
      {
        name: "Old Voss",
        role: "Community Elder",
        description:
          "Donec eu libero sit amet quam egestas semper. Mauris placerat eleifend leo.",
      },
    ],
    gmNotes:
      "Pellentesque habitant morbi tristique senectus. The resistance cell active here is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    gmSecrets:
      "Vestibulum tortor quam feugiat vitae ultricies eget. The real power in this district is not who it appears — lorem ipsum dolor sit amet.",
  },
  {
    id: "councils-reach",
    name: "Council's Reach",
    icon: "⚖️",
    tagline: "Seat of power and its discontents.",
    description:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, magna pede molestie ante, sit amet placerat enim massa eu lorem. Sed faucibus turpis vitae dolor. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula.",
    locations: [
      {
        name: "The Grand Convocation Hall",
        description:
          "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius turpis molestie.",
      },
      {
        name: "Writ & Seal Row",
        description:
          "Sed faucibus turpis vitae dolor. Donec interdum metus et hendrerit aliquet dolor.",
      },
      {
        name: "The Advocate's Quarter",
        description:
          "Nulla gravida orci a odio. Curabitur pretium tincidunt lacus sit amet placerat enim.",
      },
    ],
    npcs: [
      {
        name: "Councillor Darveth Pale",
        role: "Senior Council Member",
        description:
          "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio nullam varius turpis molestie.",
      },
      {
        name: "Aela Thornwick",
        role: "Underground Advocate",
        description:
          "Sed faucibus turpis vitae dolor. Donec interdum metus et hendrerit aliquet.",
      },
    ],
    gmNotes:
      "Curabitur pretium tincidunt lacus. The council's true agenda is lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam varius turpis molestie dictum semper.",
    gmSecrets:
      "Nulla gravida orci a odio. The vote that changed everything is hidden in lorem ipsum dolor sit amet, nulla gravida orci.",
  },
  {
    id: "blast-block",
    name: "Blast Block",
    icon: "💥",
    tagline: "Industry, danger, and desperate survival.",
    description:
      "Fusce fermentum. Nullam varius nulla quis quam. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.",
    locations: [
      {
        name: "The Forge Yards",
        description:
          "Fusce fermentum. Nullam varius nulla quis quam. Quisque porta volutpat erat.",
      },
      {
        name: "Cinder Row",
        description:
          "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      },
      {
        name: "The Pressure House",
        description:
          "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem.",
      },
    ],
    npcs: [
      {
        name: "Ratha Smelt",
        role: "Foreman & Union Organiser",
        description:
          "Fusce fermentum nullam varius nulla quis quam. Quisque porta volutpat erat viverra eget.",
      },
      {
        name: "Gurn",
        role: "Black-Market Parts Dealer",
        description:
          "Nunc purus phasellus ultrices nulla quis nibh. Donec consectetuer ligula vulputate sem.",
      },
    ],
    gmNotes:
      "Fusce fermentum. The explosion that shook lorem ipsum dolor sit amet was not an accident. Quisque porta volutpat erat, consectetur adipiscing elit.",
    gmSecrets:
      "Nullam varius nulla quis quam. The device hidden beneath lorem ipsum dolor sit amet is still active — quisque erat eros viverra eget.",
  },
  {
    id: "aetherbridge",
    name: "Aetherbridge",
    icon: "🌉",
    tagline: "Where magic meets commerce and control.",
    description:
      "Aliquam erat volutpat. Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non justo. Nam lacus libero, pretium at, lobortis vitae, onoreet et, diam. Donec aliquet, tortor sed accumsan bibendum, erat ligula aliquet magna, vitae ornare odio metus a mi.",
    locations: [
      {
        name: "The Aetheric Exchange",
        description:
          "Aliquam erat volutpat. Nam dui ligula fringilla a euismod sodales sollicitudin vel wisi.",
      },
      {
        name: "Bridgespan Promenade",
        description:
          "Morbi auctor lorem non justo. Nam lacus libero pretium at lobortis vitae.",
      },
      {
        name: "The Conduit Vaults",
        description:
          "Donec aliquet tortor sed accumsan bibendum. Erat ligula aliquet magna vitae ornare odio.",
      },
    ],
    npcs: [
      {
        name: "Velenne Oscroft",
        role: "Exchange Broker",
        description:
          "Aliquam erat volutpat. Nam dui ligula fringilla a euismod sodales sollicitudin vel.",
      },
      {
        name: "The Lamplighter",
        role: "Unknown — suspected rebel contact",
        description:
          "Morbi auctor lorem non justo. Nam lacus libero pretium at lobortis vitae onoreet.",
      },
    ],
    gmNotes:
      "Aliquam erat volutpat. The bridge's aetheric grid is being tapped lorem ipsum dolor sit amet. Nam dui ligula fringilla a euismod sodales.",
    gmSecrets:
      "Donec aliquet tortor sed accumsan bibendum. The true controller of the conduit vaults is lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: "underflow",
    name: "The Underflow",
    icon: "🌊",
    tagline: "The city beneath the city.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    locations: [
      {
        name: "The Sump",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      },
      {
        name: "Drowned Market",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        name: "The Hollow Arch",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
    npcs: [
      {
        name: "Depth",
        role: "Unknown — rumoured guide",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      },
      {
        name: "Vekka Sloe",
        role: "Tunnel Runner",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      },
    ],
    gmNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The Underflow is not merely an abandoned sewer system — sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis nostrud exercitation.",
    gmSecrets:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. What lives at the deepest level of the Underflow is lorem ipsum dolor sit amet — excepteur sint occaecat cupidatat non proident.",
  },
];
