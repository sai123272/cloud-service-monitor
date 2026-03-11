export default function ServiceChip({ name }) {

  return (
    <span
      style={{
        background: "#E3F2FD",
        color: "#1565C0",
        padding: "4px 10px",
        borderRadius: "10px",
        fontSize: "12px",
        fontWeight: "500"
      }}
    >
      {name}
    </span>
  );
}