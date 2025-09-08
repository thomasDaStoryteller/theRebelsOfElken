import React from "react";

interface MetricBarProps {
  label: string;
  value: number;
  max?: number;
  color?: string;
  icon?: string;
}

export const MetricBar: React.FC<MetricBarProps> = ({
  label,
  value,
  max = 100,
  color = "#3b82f6",
  icon,
}) => {
  const percentage = Math.min(100, (value / max) * 100);

  return (
    <div
      className="metric-bar"
      style={{ "--metric-color": color } as React.CSSProperties}
    >
      <div className="metric-header">
        <span className="metric-label">
          {icon && <span className="metric-icon">{icon}</span>}
          {label}
        </span>
        <span className="metric-value">
          {value}/{max}
        </span>
      </div>
      <div className="metric-track">
        <div
          className="metric-fill"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
};
