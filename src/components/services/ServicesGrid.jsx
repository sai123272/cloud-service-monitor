import { services } from "../../graphql/mocks/services.mock";
import StatusChip from "../common/StatusChip";

export default function ServicesGrid() {
  return (
    <div style={{ padding: "20px" }}>

      <h3>Service Health Overview</h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {services.map((service) => (
          <div
            key={service.name}
            style={{
              border: "1px solid #ddd",
              borderRadius: "6px",
              padding: "16px",
              width: "200px",
              background: "white"
            }}
          >
            <h4>{service.name}</h4>

            <StatusChip status={service.status} />

            <p style={{ marginTop: "10px" }}>
              {service.uptime}% Uptime
            </p>

            <p>Incidents: {service.incidents}</p>

          </div>
        ))}
      </div>

      <p style={{ marginTop: "20px", fontSize: "12px", color: "#666" }}>
        Last updated: 2 mins ago
      </p>

    </div>
  );
}