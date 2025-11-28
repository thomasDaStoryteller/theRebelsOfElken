import React, { useState, useRef, useEffect } from "react";
import { X, Lock, AlertCircle } from "lucide-react";
import { validatePassword, setAuthenticated } from "../config/gmPassword";
import "./PasswordPrompt.css";

interface PasswordPromptProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const PasswordPrompt: React.FC<PasswordPromptProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if (!password.trim()) {
      setError("Please enter a password");
      setIsSubmitting(false);
      return;
    }

    // Small delay to prevent rapid-fire attempts
    await new Promise((resolve) => setTimeout(resolve, 100));

    if (validatePassword(password)) {
      setAuthenticated(true);
      setPassword("");
      onSuccess();
      onClose();
    } else {
      setError("Incorrect password");
      setPassword("");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }

    setIsSubmitting(false);
  };

  const handleCancel = () => {
    setPassword("");
    setError("");
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      handleCancel();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="password-prompt-overlay" onClick={handleCancel}>
      <div
        className="password-prompt-dialog"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="password-prompt-header">
          <div className="password-prompt-title">
            <Lock className="password-prompt-icon" aria-hidden="true" />
            <h2>GM View Password</h2>
          </div>
          <button
            className="password-prompt-close"
            onClick={handleCancel}
            aria-label="Close"
          >
            <X className="icon" aria-hidden="true" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="password-prompt-form">
          <p className="password-prompt-description">
            Enter the password to access GM view:
          </p>

          <div className="password-prompt-input-group">
            <input
              ref={inputRef}
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Enter password"
              className="password-prompt-input"
              disabled={isSubmitting}
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="password-prompt-error">
              <AlertCircle className="icon" aria-hidden="true" />
              <span>{error}</span>
            </div>
          )}

          <div className="password-prompt-actions">
            <button
              type="button"
              onClick={handleCancel}
              className="password-prompt-button cancel"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="password-prompt-button submit"
              disabled={isSubmitting || !password.trim()}
            >
              {isSubmitting ? "Checking..." : "Authenticate"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

