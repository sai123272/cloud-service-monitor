export const incidentTableConfig = {
  columns: [
    { id: "id", label: "ID", type: "text" },
    { id: "title", label: "Title", type: "link" },
    { id: "serviceName", label: "Service", type: "text" },
    { id: "severity", label: "Severity", type: "badge" },
    { id: "status", label: "Status", type: "statusChip" },
    { id: "assignee", label: "Assignee", type: "text" },
    { id: "createdAt", label: "Created", type: "text" }
  ]
};