const statusColors = {
  Healthy: { bg: "#E6F7ED", color: "#2E7D32" },
  Degraded: { bg: "#FFF4E5", color: "#ED6C02" },
  Down: { bg: "#FDECEA", color: "#D32F2F" },

  Open: { bg: "#FDECEA", color: "#D32F2F" },
  Acknowledged: { bg: "#FFF4E5", color: "#ED6C02" },
  Resolved: { bg: "#E6F7ED", color: "#2E7D32" }
};

export default function StatusChip({ status }) {

  const style = statusColors[status] || {
    bg: "#eee",
    color: "#333"
  };

  return (
    <span
      style={{
        background: style.bg,
        color: style.color,
        padding: "4px 10px",
        borderRadius: "10px",
        fontSize: "12px",
        fontWeight: "500"
      }}
    >
      {status}
    </span>
  );
}