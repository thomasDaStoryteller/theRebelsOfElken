import React, { useState } from "react";
import { Quest } from "../types";
import { QuestCard } from "./QuestCard";
import { Shuffle, Eye, EyeOff } from "lucide-react";

interface QuestDrawerProps {
  availableQuests: Quest[];
  drawnQuests?: Quest[];
  onDrawQuests: () => void;
  onInvestInQuest: (questId: string, investment: any) => void;
  onResolveQuest: (questId: string, outcome: any, notes?: string) => void;
  availableResources: number;
  isGMView: boolean;
}

export const QuestDrawer: React.FC<QuestDrawerProps> = ({
  availableQuests,
  drawnQuests = [],
  onDrawQuests,
  onInvestInQuest,
  onResolveQuest,
  availableResources,
  isGMView,
}) => {
  const [resolvingQuest, setResolvingQuest] = useState<string | null>(null);

  const handleDrawQuests = () => {
    onDrawQuests();
  };

  const handleInvest = (questId: string, investment: any) => {
    onInvestInQuest(questId, investment);
  };

  const handleResolve = (questId: string, outcome: any, notes?: string) => {
    onResolveQuest(questId, outcome, notes);
    setResolvingQuest(null);
  };

  const startResolving = (questId: string) => {
    setResolvingQuest(questId);
  };

  return (
    <div className="quest-drawer">
      <div className="drawer-header">
        <div className="drawer-title">
          <h2>Available Quests</h2>
          <span className="quest-count">
            {availableQuests.length} quests in pool
          </span>
        </div>
        <button
          className="draw-button"
          onClick={handleDrawQuests}
          disabled={availableQuests.length < 3}
        >
          <Shuffle className="icon" />
          Draw 3 Quests
        </button>
      </div>

      {drawnQuests.length > 0 && (
        <div className="drawn-quests">
          <h3 className="drawn-quests-header">Current Quest Options</h3>
          <div className="quests-grid">
            {drawnQuests.map((quest) => (
              <div key={quest.id} className="quest-container">
                <QuestCard
                  quest={quest}
                  isGMView={isGMView}
                  onInvest={(investment) => handleInvest(quest.id, investment)}
                  onResolve={(outcome, notes) =>
                    handleResolve(quest.id, outcome, notes)
                  }
                  availableResources={availableResources}
                  isResolving={resolvingQuest === quest.id}
                />
                {!resolvingQuest && (
                  <button
                    className="resolve-trigger-button"
                    onClick={() => startResolving(quest.id)}
                  >
                    Resolve Quest
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {availableQuests.length === 0 && (
        <div className="no-quests">
          <p>
            No more quests available! All quests have been completed or
            discarded.
          </p>
        </div>
      )}
    </div>
  );
};
