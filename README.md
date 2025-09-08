# Campaign Cards - Resistance Game

A digital implementation of the Campaign Cards resistance game, built with React and TypeScript. This web app allows you to manage the core game mechanics including quest resolution, resource management, and campaign tracking.

## Features

### Core Game Mechanics

- **Turn-based gameplay** with automatic Oppression increases
- **Quest drawing system** - draw 3 quests per turn from the available pool
- **Resource management** - spend Resources (R) on quests and investments
- **Investment system** - pre-mission investments for quest bonuses
- **Quest resolution** - succeed, partial, fail, or abandon outcomes
- **Campaign tracking** - complete history of all resolved quests

### Game Metrics

- **Hope (H)** - How inspired the public is (0-100)
- **Secrecy (S)** - How hidden the resistance is (0-100)
- **Unity (U)** - How well the cells coordinate (0-100)
- **Oppression (O)** - Pressure from the regime (0-100)
- **Resources (R)** - Currency for spending on quests and investments

### Quest Categories

- **Smuggling** - Refugee assistance, supply runs, safehouse operations
- **Propaganda** - Counter-messaging, public displays, information warfare
- **Unity** - Building alliances, training, community building
- **Secrecy** - Counter-intelligence, stealth operations, information gathering
- **Resources** - Infrastructure protection, supply management
- **Special** - Unique, high-impact missions

### UI Features

- **Dual view modes** - Player view (title + hook) and GM view (full details)
- **Modern, responsive design** - Works on desktop, tablet, and mobile
- **Real-time metric tracking** - Visual progress bars for all stats
- **Investment management** - Easy pre-mission resource allocation
- **Quest history** - Complete log of all completed quests with outcomes
- **Turn management** - Start new turns with automatic Oppression increases

## How to Play

1. **Start a Turn** - Click "Start Turn" to begin a new turn (increases Oppression by +1)
2. **Draw Quests** - Click "Draw 3 Quests" to get your mission options
3. **Review Quests** - Toggle between Player and GM views to see appropriate details
4. **Invest Resources** - Optionally spend Resources on pre-mission investments for bonuses
5. **Resolve Quests** - Choose outcomes (Succeeded, Partial, Failed, or Abandoned)
6. **Track Progress** - Monitor your metrics and review quest history

## Quest Resolution

- **Succeeded** - Apply full success effects
- **Partial** - Apply half of success effects and half of failure penalties
- **Failed** - Apply full failure effects (usually includes Oppression increase)
- **Abandoned** - Apply light penalty (usually -1 S or -1 U) plus any failure Oppression

## Investment Options

- **Stealth Kit** (1 R) - Ignore first failed Stealth/Deception check + S bonus on success
- **Hearts & Hands** (1 R) - U bonus on success (extra helpers, coordination)
- **Warm the Crowd** (1 R) - H bonus on success (food, celebration, messaging)

## Technical Details

### Built With

- **React 18** with TypeScript
- **Lucide React** for icons
- **CSS3** with modern features (backdrop-filter, gradients, animations)
- **Responsive design** with CSS Grid and Flexbox

### Project Structure

```
src/
├── components/          # React components
│   ├── GameHeader.tsx   # Main game header with metrics
│   ├── QuestCard.tsx    # Individual quest display
│   ├── QuestDrawer.tsx  # Quest drawing and management
│   ├── HistoryPanel.tsx # Quest history display
│   └── MetricBar.tsx    # Progress bar component
├── types.ts            # TypeScript type definitions
├── gameReducer.ts      # Game state management
├── questData.ts        # Complete quest database
└── App.tsx             # Main application component
```

### Game State Management

Uses React's `useReducer` for predictable state updates. All game actions are handled through the reducer:

- `START_TURN` - Begin new turn, increase Oppression
- `DRAW_QUESTS` - Select 3 random quests from available pool
- `INVEST_IN_QUEST` - Spend Resources on pre-mission investments
- `RESOLVE_QUEST` - Complete a quest with chosen outcome
- `RESET_GAME` - Return to initial state

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm start
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000`

## Game Balance

The game is designed with the following balance considerations:

- **Oppression increases by +1 per turn** to create mounting pressure
- **Quest costs** range from 0-2 Resources to create meaningful choices
- **Success effects** are generally positive across multiple metrics
- **Failure effects** often include Oppression increases to maintain tension
- **Partial results** provide middle-ground outcomes for close calls

## Customization

The game is highly customizable:

- **Quest data** can be modified in `src/questData.ts`
- **Initial metrics** can be adjusted in `src/gameReducer.ts`
- **UI styling** can be customized in `src/App.css`
- **Game rules** can be tweaked in the reducer logic

## Future Enhancements

Potential features for future versions:

- **Win/Loss conditions** - Automatic game end triggers
- **Quest chaining** - Unlock new quests based on previous outcomes
- **Difficulty scaling** - Dynamic quest difficulty based on campaign progress
- **Save/Load** - Persistent campaign state
- **Multiplayer** - Multiple players managing different aspects
- **Quest timers** - Time-limited quests that auto-fail if not taken

## License

This project is open source and available under the MIT License.
