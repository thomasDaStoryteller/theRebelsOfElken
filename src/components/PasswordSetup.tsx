import React, { useState, useRef, useEffect } from "react";
import { X, Lock, AlertCircle, Check } from "lucide-react";
import {
  setPassword,
  getDefaultPassword,
  setAuthenticated,
} from "../config/gmPassword";
import "./PasswordSetup.css";

interface PasswordSetupProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const PasswordSetup: React.FC<PasswordSetupProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [useDefault, setUseDefault] = useState(true);
  const [customPassword, setCustomPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [defaultPassword, setDefaultPassword] = useState("gm");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Load default password
      getDefaultPassword().then((pwd) => setDefaultPassword(pwd));
      if (inputRef.current && !useDefault) {
        inputRef.current.focus();
      }
    }
  }, [isOpen, useDefault]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (useDefault) {
      // Use default password
      setPassword(defaultPassword);
      setAuthenticated(true);
      onSuccess();
      onClose();
      return;
    }

    // Validate custom password
    if (!customPassword.trim()) {
      setError("Please enter a password");
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return;
    }

    if (customPassword.length < 3) {
      setError("Password must be at least 3 characters");
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return;
    }

    if (customPassword !== confirmPassword) {
      setError("Passwords do not match");
      setConfirmPassword("");
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return;
    }

    setIsSubmitting(true);

    // Small delay for UX
    await new Promise((resolve) => setTimeout(resolve, 100));

    if (setPassword(customPassword)) {
      setAuthenticated(true);
      setCustomPassword("");
      setConfirmPassword("");
      onSuccess();
      onClose();
    } else {
      setError("Failed to set password. Please try again.");
    }

    setIsSubmitting(false);
  };

  const handleCancel = () => {
    setCustomPassword("");
    setConfirmPassword("");
    setError("");
    setUseDefault(true);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      handleCancel();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="password-setup-overlay" onClick={handleCancel}>
      <div
        className="password-setup-dialog"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="password-setup-header">
          <div className="password-setup-title">
            <Lock className="password-setup-icon" aria-hidden="true" />
            <h2>Set GM View Password</h2>
          </div>
          <button
            className="password-setup-close"
            onClick={handleCancel}
            aria-label="Close"
          >
            <X className="icon" aria-hidden="true" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="password-setup-form">
          <p className="password-setup-description">
            Choose a password to protect GM view access. You can change this
            later.
          </p>

          <div className="password-setup-options">
            <label className="password-setup-option">
              <input
                type="radio"
                name="password-type"
                checked={useDefault}
                onChange={() => {
                  setUseDefault(true);
                  setError("");
                }}
                className="password-setup-radio"
              />
              <div className="password-setup-option-content">
                <div className="password-setup-option-header">
                  <span className="password-setup-option-title">
                    Use Default Password
                  </span>
                  {useDefault && <Check className="check-icon" />}
                </div>
                <span className="password-setup-option-description">
                  Use the default password (hidden for security)
                </span>
              </div>
            </label>

            <label className="password-setup-option">
              <input
                type="radio"
                name="password-type"
                checked={!useDefault}
                onChange={() => {
                  setUseDefault(false);
                  setError("");
                  setTimeout(() => {
                    if (inputRef.current) {
                      inputRef.current.focus();
                    }
                  }, 100);
                }}
                className="password-setup-radio"
              />
              <div className="password-setup-option-content">
                <div className="password-setup-option-header">
                  <span className="password-setup-option-title">
                    Set Custom Password
                  </span>
                  {!useDefault && <Check className="check-icon" />}
                </div>
                <span className="password-setup-option-description">
                  Create your own password (minimum 3 characters)
                </span>
              </div>
            </label>
          </div>

          {!useDefault && (
            <div className="password-setup-custom-fields">
              <div className="password-setup-input-group">
                <label htmlFor="custom-password">Password</label>
                <input
                  ref={inputRef}
                  id="custom-password"
                  type="password"
                  value={customPassword}
                  onChange={(e) => {
                    setCustomPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter password"
                  className="password-setup-input"
                  disabled={isSubmitting}
                  autoComplete="new-password"
                />
              </div>

              <div className="password-setup-input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Confirm password"
                  className="password-setup-input"
                  disabled={isSubmitting}
                  autoComplete="new-password"
                />
              </div>
            </div>
          )}

          {error && (
            <div className="password-setup-error">
              <AlertCircle className="icon" aria-hidden="true" />
              <span>{error}</span>
            </div>
          )}

          <div className="password-setup-actions">
            <button
              type="button"
              onClick={handleCancel}
              className="password-setup-button cancel"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="password-setup-button submit"
              disabled={
                isSubmitting ||
                (!useDefault &&
                  (!customPassword.trim() || !confirmPassword.trim()))
              }
            >
              {isSubmitting ? "Setting..." : "Set Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

