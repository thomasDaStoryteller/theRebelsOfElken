import React, { useState, useRef, useEffect } from "react";
import { X, Lock, AlertCircle, Check } from "lucide-react";
import {
  setPassword,
  validatePassword,
  clearPassword,
  getDefaultPassword,
} from "../config/gmPassword";
import { usePassword } from "../PasswordContext";
import "./PasswordChange.css";

interface PasswordChangeProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PasswordChange: React.FC<PasswordChangeProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [useDefault, setUseDefault] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [defaultPassword, setDefaultPassword] = useState("gm");
  const { hasPasswordSet, refreshAuth } = usePassword();
  const currentPasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      getDefaultPassword().then((pwd) => setDefaultPassword(pwd));
      if (currentPasswordRef.current) {
        currentPasswordRef.current.focus();
      }
    } else {
      // Reset form
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setUseDefault(false);
      setError("");
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // If password is set, require current password
    if (hasPasswordSet) {
      if (!currentPassword.trim()) {
        setError("Please enter your current password");
        if (currentPasswordRef.current) {
          currentPasswordRef.current.focus();
        }
        return;
      }

      if (!validatePassword(currentPassword)) {
        setError("Current password is incorrect");
        setCurrentPassword("");
        if (currentPasswordRef.current) {
          currentPasswordRef.current.focus();
        }
        return;
      }
    }

    // Handle new password
    if (useDefault) {
      // Reset to default
      clearPassword();
      refreshAuth();
      onClose();
      return;
    }

    // Validate new password
    if (!newPassword.trim()) {
      setError("Please enter a new password");
      return;
    }

    if (newPassword.length < 3) {
      setError("Password must be at least 3 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      setConfirmPassword("");
      return;
    }

    setIsSubmitting(true);

    // Small delay for UX
    await new Promise((resolve) => setTimeout(resolve, 100));

    if (setPassword(newPassword)) {
      refreshAuth();
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      onClose();
    } else {
      setError("Failed to set password. Please try again.");
    }

    setIsSubmitting(false);
  };

  const handleCancel = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setUseDefault(false);
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
    <div className="password-change-overlay" onClick={handleCancel}>
      <div
        className="password-change-dialog"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="password-change-header">
          <div className="password-change-title">
            <Lock className="password-change-icon" aria-hidden="true" />
            <h2>Change GM View Password</h2>
          </div>
          <button
            className="password-change-close"
            onClick={handleCancel}
            aria-label="Close"
          >
            <X className="icon" aria-hidden="true" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="password-change-form">
          {hasPasswordSet && (
            <div className="password-change-input-group">
              <label htmlFor="current-password">Current Password</label>
              <input
                ref={currentPasswordRef}
                id="current-password"
                type="password"
                value={currentPassword}
                onChange={(e) => {
                  setCurrentPassword(e.target.value);
                  setError("");
                }}
                placeholder="Enter current password"
                className="password-change-input"
                disabled={isSubmitting}
                autoComplete="current-password"
              />
            </div>
          )}

          <div className="password-change-options">
            <label className="password-change-option">
              <input
                type="radio"
                name="password-action"
                checked={!useDefault}
                onChange={() => {
                  setUseDefault(false);
                  setError("");
                }}
                className="password-change-radio"
              />
              <div className="password-change-option-content">
                <div className="password-change-option-header">
                  <span className="password-change-option-title">
                    Set New Password
                  </span>
                  {!useDefault && <Check className="check-icon" />}
                </div>
                <span className="password-change-option-description">
                  Create a new custom password (minimum 3 characters)
                </span>
              </div>
            </label>

            <label className="password-change-option">
              <input
                type="radio"
                name="password-action"
                checked={useDefault}
                onChange={() => {
                  setUseDefault(true);
                  setError("");
                }}
                className="password-change-radio"
              />
              <div className="password-change-option-content">
                <div className="password-change-option-header">
                  <span className="password-change-option-title">
                    Reset to Default
                  </span>
                  {useDefault && <Check className="check-icon" />}
                </div>
                <span className="password-change-option-description">
                  Reset to default password (hidden for security)
                </span>
              </div>
            </label>
          </div>

          {!useDefault && (
            <div className="password-change-custom-fields">
              <div className="password-change-input-group">
                <label htmlFor="new-password">New Password</label>
                <input
                  id="new-password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter new password"
                  className="password-change-input"
                  disabled={isSubmitting}
                  autoComplete="new-password"
                />
              </div>

              <div className="password-change-input-group">
                <label htmlFor="confirm-new-password">Confirm New Password</label>
                <input
                  id="confirm-new-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Confirm new password"
                  className="password-change-input"
                  disabled={isSubmitting}
                  autoComplete="new-password"
                />
              </div>
            </div>
          )}

          {error && (
            <div className="password-change-error">
              <AlertCircle className="icon" aria-hidden="true" />
              <span>{error}</span>
            </div>
          )}

          <div className="password-change-actions">
            <button
              type="button"
              onClick={handleCancel}
              className="password-change-button cancel"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="password-change-button submit"
              disabled={
                isSubmitting ||
                (hasPasswordSet && !currentPassword.trim()) ||
                (!useDefault &&
                  (!newPassword.trim() || !confirmPassword.trim()))
              }
            >
              {isSubmitting ? "Changing..." : "Change Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

