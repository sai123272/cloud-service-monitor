import SeverityBadge from "../common/SeverityBadge";
import StatusChip from "../common/StatusChip";
import ServiceChip from "../common/ServiceChip";

export default function IncidentTable({ data, onSelect }) {

  return (
    <table width="100%" border="1" cellPadding="10">

      <thead>

        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Service</th>
          <th>Severity</th>
          <th>Status</th>
          <th>Assignee</th>
          <th>Created</th>
          <th>Actions</th>
        </tr>

      </thead>

      <tbody>

        {data.map((row) => (

          <tr key={row.id}>

            <td>{row.id}</td>

            <td>
              <button
                onClick={() => onSelect(row)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#1976d2",
                  cursor: "pointer"
                }}
              >
                {row.title}
              </button>
            </td>

            <td>
              <ServiceChip name={row.serviceName} />
            </td>

            <td>
              <SeverityBadge severity={row.severity} />
            </td>

            <td>
              <StatusChip status={row.status} />
            </td>

            <td>{row.assignee || "-"}</td>

            <td>{row.createdAt}</td>

            <td>⋮</td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}