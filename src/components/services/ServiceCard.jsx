export default function ServiceCard({ service }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 20, width: 180 }}>
      <h4>{service.name}</h4>
      <p>Status: {service.status}</p>
      <p>Uptime: {service.uptime}%</p>
      <p>Incidents: {service.incidents}</p>
    </div>
  );
}