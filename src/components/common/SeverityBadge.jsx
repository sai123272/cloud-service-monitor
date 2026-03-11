const severityColors = {
  Critical: "#d32f2f",
  High: "#f44336",
  Medium: "#ff9800",
  Low: "#4caf50"
};

export default function SeverityBadge({ severity }) {

  return (
    <span
      style={{
        background: severityColors[severity],
        color: "white",
        padding: "3px 8px",
        borderRadius: "6px",
        fontSize: "12px"
      }}
    >
      {severity}
    </span>
  );
}