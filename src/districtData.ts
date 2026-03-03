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
    tagline: "The old quarter of light and learning.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    locations: [
      {
        name: "The Amber Archive",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      },
      {
        name: "Lantern Market",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        name: "The Gilded Threshold",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
    npcs: [
      {
        name: "Maren Ashveil",
        role: "Archivist",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      },
      {
        name: "Torvan Crucke",
        role: "Market Overseer",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      },
    ],
    gmNotes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The hidden truth of this district is that lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris.",
    gmSecrets:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
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
