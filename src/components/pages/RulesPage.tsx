import React from "react";
import "./RulesPage.css";

export const RulesPage: React.FC = () => {
  return (
    <div className="rules-page">
      <div className="rules-content">
        <h1>⚙️ Resistance Campaign Mechanics</h1>
        <section className="rules-section">
          <h2>📊 Core Tracks</h2>
          <p>
            The campaign runs on four resistance tracks and one pressure track.
          </p>

          <div className="track-list">
            <div className="track-item">
              <strong>Hope</strong> → The morale of the common people and their
              willingness to support the resistance.
            </div>
            <div className="track-item">
              <strong>Unity</strong> → The coordination, trust, and discipline
              of the resistance cells.
            </div>
            <div className="track-item">
              <strong>Secrecy</strong> → How well the resistance hides from the
              Guard's surveillance and informants.
            </div>
            <div className="track-item">
              <strong>Resources</strong> → A spendable currency (supplies, gold,
              information, goodwill). Used to give bonuses or unlock special
              missions.
            </div>
            <div className="track-item pressure">
              <strong>Oppression</strong> → A pressure track that always rises
              steadily as the city's regime tightens control. It's the ticking
              clock of the campaign.
            </div>
          </div>
        </section>

        <section className="rules-section">
          <h2>🪙 Resources</h2>
          <ul>
            <li>Earned through some missions.</li>
            <li>Spent in three main ways:</li>
          </ul>

          <div className="resource-uses">
            <div className="resource-use">
              <strong>Stealth Prep (Secrecy boost)</strong> → Advantage on
              stealth/infiltration/escape rolls during the mission.
            </div>
            <div className="resource-use">
              <strong>Inspiration (Hope boost)</strong> → Each player may reroll
              one d20 during the mission.
            </div>
            <div className="resource-use">
              <strong>Coordination (Unity boost)</strong> → Once during the
              mission, a player may take an extra action surge OR reposition
              allies strategically.
            </div>
          </div>

          <ul>
            <li>Some missions require resources upfront.</li>
            <li>
              These missions are usually more powerful and provide greater
              benefits.
            </li>
            <li>
              Example: rallying the Union might require spending 2 resources to
              organize safely.
            </li>
          </ul>
        </section>

        <section className="rules-section">
          <h2>🎲 Missions</h2>
          <ul>
            <li>
              At the start of each cycle, the GM/app draws 3 random missions.
            </li>
            <li>Each mission has two parts:</li>
          </ul>

          <div className="mission-parts">
            <div className="mission-part">
              <strong>Player-facing hook</strong> → immersive description.
            </div>
            <div className="mission-part">
              <strong>GM-facing context & mechanics</strong> → what
              success/failure does to the tracks.
            </div>
          </div>

          <h3>Completion states:</h3>
          <ul>
            <li>
              <strong>Success</strong> → Mission goals achieved, bonuses
              applied.
            </li>
            <li>
              <strong>Partial success</strong> → Some progress, smaller bonuses
              or mixed effects.
            </li>
            <li>
              <strong>Failure</strong> → Resistance suffers consequences.
            </li>
            <li>
              <strong>Abandoned</strong> → No outcome, but time still passes and
              Oppression rises.
            </li>
          </ul>

          <ul>
            <li>
              Mission outcomes feed directly into the tracks
              (Hope/Unity/Secrecy/Resources).
            </li>
            <li>
              Oppression always rises at the end of each cycle, no matter what.
            </li>
          </ul>
        </section>

        <section className="rules-section">
          <h2>⏳ Oppression</h2>
          <ul>
            <li>Starts at a high baseline (city is under lockdown).</li>
            <li>
              Increases steadily every cycle (e.g., +1 each round of missions).
            </li>
            <li>Certain failures accelerate its rise.</li>
            <li>
              If Oppression reaches maximum (Tier 10) → the resistance is forced
              into a desperate Final Assault.
            </li>
          </ul>
        </section>

        <section className="rules-section">
          <h2>⚔️ The Final Assault</h2>
          <p>
            The endgame is a large-scale uprising against the authoritarian
            regime.
          </p>

          <h3>When it triggers:</h3>
          <ul>
            <li>
              Players can choose to launch the assault if Hope, Unity, and
              Secrecy are strong enough.
            </li>
            <li>
              If Oppression maxes out, the assault is forced — but under much
              harsher conditions.
            </li>
          </ul>

          <h3>Track Effects in the Assault:</h3>
          <div className="assault-effects">
            <div className="assault-effect">
              <strong>Hope:</strong> Civilians rise up, extra reinforcements,
              reduced fear, higher morale.
            </div>
            <div className="assault-effect">
              <strong>Unity:</strong> Better coordination of cells, tactical
              advantages, linked actions.
            </div>
            <div className="assault-effect">
              <strong>Secrecy:</strong> More options for surprise strikes,
              infiltration, sabotage before the battle begins.
            </div>
            <div className="assault-effect">
              <strong>Resources:</strong> Extra supply caches, healing, bribes,
              equipment, or calling in allies.
            </div>
          </div>

          <h3>Hybrid Design:</h3>
          <ul>
            <li>
              If the party takes too long, oppression grows worse (the Guard
              commits atrocities, public support wanes).
            </li>
            <li>
              If they move too soon, they may lack the strength to topple the
              regime.
            </li>
          </ul>
        </section>

        <section className="rules-section summary">
          <h2>✅ Summary</h2>
          <ul>
            <li>
              <strong>Hope, Unity, Secrecy</strong> → player-controlled through
              missions.
            </li>
            <li>
              <strong>Resources</strong> → flexible currency for boosts, mission
              costs, or final assault aid.
            </li>
            <li>
              <strong>Oppression</strong> → steadily rising timer, the real
              clock of the campaign.
            </li>
            <li>
              <strong>Missions</strong> → the main gameplay loop; each one
              shifts the tracks.
            </li>
            <li>
              <strong>Final Assault</strong> → the climax, shaped by the party's
              choices and the tracks' final states.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
