export const incidentFilters = [
  {
    id: "severity",
    type: "multi",
    options: ["Critical", "High", "Medium", "Low"]
  },
  {
    id: "status",
    type: "multi",
    options: ["Open", "Acknowledged", "Resolved"]
  },
  {
    id: "service",
    type: "single"
  }
];