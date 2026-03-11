import { useState } from "react";
import { incidents as mockIncidents } from "../../graphql/mocks/incidents.mock";
import IncidentTable from "./IncidentTable";
import IncidentFilters from "./IncidentFilters";
import IncidentSidePanel from "../sidepanel/IncidentSidePanel";
import Pagination from "./Pagination";

export default function IncidentsPage() {

  const [incidents] = useState(mockIncidents);
  const [selectedIncident, setSelectedIncident] = useState(null);

  const [page, setPage] = useState(1);

  const pageSize = 10;

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const paginatedData = incidents.slice(start, end);

  return (
    <div style={{ padding: "20px" }}>

      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px"
        }}
      >
        <h3>Incidents</h3>

        <button
          style={{
            background: "#1976d2",
            color: "white",
            border: "none",
            padding: "8px 14px",
            borderRadius: "4px"
          }}
          onClick={() => alert("Create new incident")}
        >
          + New Incident
        </button>
      </div>

      {/* Filters */}

      <IncidentFilters />

      {/* Table */}

      <IncidentTable
        data={paginatedData}
        onSelect={setSelectedIncident}
      />

      {/* Pagination */}

      <Pagination
        currentPage={page}
        totalItems={incidents.length}
        pageSize={pageSize}
        onPageChange={setPage}
      />

      {/* Side Panel */}

      {selectedIncident && (
        <IncidentSidePanel
          incident={selectedIncident}
          close={() => setSelectedIncident(null)}
        />
      )}

    </div>
  );
}