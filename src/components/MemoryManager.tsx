import React, { useState, useEffect } from "react";
import { GameSave } from "../types";
import { memoryManager } from "../memoryUtils";
import {
  Save,
  Download,
  Upload,
  Trash2,
  Clock,
  AlertCircle,
} from "lucide-react";

interface MemoryManagerProps {
  onLoadGame: (saveName: string) => void;
  onSaveGame: (saveName: string) => void;
  onDeleteSave: (saveName: string) => void;
}

export const MemoryManager: React.FC<MemoryManagerProps> = ({
  onLoadGame,
  onSaveGame,
  onDeleteSave,
}) => {
  const [saves, setSaves] = useState<GameSave[]>([]);
  const [newSaveName, setNewSaveName] = useState("");
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [showLoadDialog, setShowLoadDialog] = useState(false);
  const [showImportDialog, setShowImportDialog] = useState(false);
  const [importData, setImportData] = useState("");
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    loadSaves();
  }, []);

  const loadSaves = () => {
    setSaves(memoryManager.getSaves());
  };

  const showMessage = (type: "success" | "error", text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleSave = () => {
    if (!newSaveName.trim()) {
      showMessage("error", "Please enter a save name");
      return;
    }

    if (saves.some((save) => save.name === newSaveName.trim())) {
      if (
        !window.confirm(
          `A save named "${newSaveName}" already exists. Overwrite?`
        )
      ) {
        return;
      }
    }

    onSaveGame(newSaveName.trim());
    setNewSaveName("");
    setShowSaveDialog(false);
    // Add a small delay to ensure the save operation completes
    setTimeout(() => {
      loadSaves();
    }, 100);
    showMessage("success", `Game saved as "${newSaveName}"`);
  };

  const handleLoad = (saveName: string) => {
    onLoadGame(saveName);
    setShowLoadDialog(false);
    showMessage("success", `Game loaded: "${saveName}"`);
  };

  const handleOpenLoadDialog = () => {
    loadSaves(); // Refresh saves when opening the dialog
    setShowLoadDialog(true);
  };

  const handleDelete = (saveName: string) => {
    if (
      window.confirm(`Are you sure you want to delete the save "${saveName}"?`)
    ) {
      onDeleteSave(saveName);
      // Add a small delay to ensure the delete operation completes
      setTimeout(() => {
        loadSaves();
      }, 100);
      showMessage("success", `Save deleted: "${saveName}"`);
    }
  };

  const handleExport = (saveName: string) => {
    const exportData = memoryManager.exportSave(saveName);
    if (exportData) {
      const blob = new Blob([exportData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `campaign-cards-${saveName}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showMessage("success", `Save exported: "${saveName}"`);
    } else {
      showMessage("error", "Failed to export save");
    }
  };

  const handleImport = () => {
    if (!importData.trim()) {
      showMessage("error", "Please paste save data");
      return;
    }

    const success = memoryManager.importSave(importData);
    if (success) {
      setImportData("");
      setShowImportDialog(false);
      loadSaves();
      showMessage("success", "Save imported successfully");
    } else {
      showMessage("error", "Failed to import save - invalid data");
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  const hasAutoSave = memoryManager.hasAutoSave();

  // Debug function to check localStorage
  const debugLocalStorage = () => {
    console.log("=== DEBUG: localStorage Contents ===");
    console.log("Manual saves:", localStorage.getItem("campaign-cards-saves"));
    console.log("Auto save:", localStorage.getItem("campaign-cards-autosave"));
    console.log("Memory manager saves:", memoryManager.getSaves());
    console.log("=====================================");
  };

  return (
    <div className="memory-manager">
      <div className="memory-header">
        <h3>Memory Manager</h3>
        <div className="memory-actions">
          <button
            className="memory-button primary"
            onClick={() => setShowSaveDialog(true)}
            title="Save current game"
          >
            <Save className="icon" />
            Save Game
          </button>
          <button
            className="memory-button"
            onClick={handleOpenLoadDialog}
            title="Load saved game"
          >
            <Clock className="icon" />
            Load Game
          </button>
          <button
            className="memory-button"
            onClick={() => setShowImportDialog(true)}
            title="Import save file"
          >
            <Upload className="icon" />
            Import
          </button>
          <button
            className="memory-button"
            onClick={debugLocalStorage}
            title="Debug localStorage (check console)"
          >
            Debug
          </button>
        </div>
      </div>

      {message && (
        <div className={`memory-message ${message.type}`}>
          <AlertCircle className="icon" />
          {message.text}
        </div>
      )}

      {hasAutoSave && (
        <div className="autosave-notice">
          <Clock className="icon" />
          Auto-save available - you can continue from where you left off
        </div>
      )}

      {/* Save Dialog */}
      {showSaveDialog && (
        <div className="memory-dialog-overlay">
          <div className="memory-dialog">
            <h4>Save Game</h4>
            <input
              type="text"
              value={newSaveName}
              onChange={(e) => setNewSaveName(e.target.value)}
              placeholder="Enter save name..."
              className="save-input"
              autoFocus
              onKeyPress={(e) => e.key === "Enter" && handleSave()}
            />
            <div className="dialog-actions">
              <button onClick={handleSave} className="memory-button primary">
                Save
              </button>
              <button
                onClick={() => setShowSaveDialog(false)}
                className="memory-button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Load Dialog */}
      {showLoadDialog && (
        <div className="memory-dialog-overlay">
          <div className="memory-dialog">
            <h4>Load Game</h4>
            {saves.length === 0 ? (
              <p className="no-saves">No saved games found</p>
            ) : (
              <div className="saves-list">
                {saves.map((save) => (
                  <div key={save.id} className="save-item">
                    <div className="save-info">
                      <div className="save-name">{save.name}</div>
                      <div className="save-meta">
                        Turn {save.state.turn} • {formatDate(save.timestamp)}
                      </div>
                    </div>
                    <div className="save-actions">
                      <button
                        onClick={() => handleLoad(save.name)}
                        className="memory-button small primary"
                        title="Load this save"
                      >
                        Load
                      </button>
                      <button
                        onClick={() => handleExport(save.name)}
                        className="memory-button small"
                        title="Export save file"
                      >
                        <Download className="icon" />
                      </button>
                      <button
                        onClick={() => handleDelete(save.name)}
                        className="memory-button small danger"
                        title="Delete this save"
                      >
                        <Trash2 className="icon" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="dialog-actions">
              <button
                onClick={loadSaves}
                className="memory-button"
                title="Refresh saves list"
              >
                Refresh
              </button>
              <button
                onClick={() => setShowLoadDialog(false)}
                className="memory-button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Import Dialog */}
      {showImportDialog && (
        <div className="memory-dialog-overlay">
          <div className="memory-dialog">
            <h4>Import Save</h4>
            <textarea
              value={importData}
              onChange={(e) => setImportData(e.target.value)}
              placeholder="Paste save data here..."
              className="import-textarea"
              rows={8}
            />
            <div className="dialog-actions">
              <button onClick={handleImport} className="memory-button primary">
                Import
              </button>
              <button
                onClick={() => setShowImportDialog(false)}
                className="memory-button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
