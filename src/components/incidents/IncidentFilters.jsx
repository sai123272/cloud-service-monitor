export default function IncidentFilters() {

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px"
      }}
    >

      <span>Filters:</span>

      <button style={{ background: "#fdecea", color: "#d32f2f" }}>
        High
      </button>

      <button style={{ background: "#fff4e5", color: "#ed6c02" }}>
        Open
      </button>

      <button style={{ background: "#e3f2fd", color: "#1565c0" }}>
        CRM
      </button>

      <button>Clear All</button>

    </div>
  );
}