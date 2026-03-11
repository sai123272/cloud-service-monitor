import { useState, useEffect } from "react";

export default function AutoRefreshToggle({ onToggle }) {

  const [enabled, setEnabled] = useState(true);

  const handleChange = () => {
    const newValue = !enabled;
    setEnabled(newValue);

    if (onToggle) {
      onToggle(newValue);
    }
  };

  useEffect(() => {
    if (onToggle) {
      onToggle(enabled);
    }
  }, []);

  return (
    <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      Auto Refresh
      <input
        type="checkbox"
        checked={enabled}
        onChange={handleChange}
      />
    </label>
  );
}