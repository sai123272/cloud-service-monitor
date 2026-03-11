import { useState } from "react";
import Header from "../components/header/Header";
import ServicesGrid from "../components/services/ServicesGrid";
import IncidentsPage from "../components/incidents/IncidentsPage";
import  useRole  from "../hooks/useRole";

export default function Dashboard() {
  const role = useRole();
  const [tab, setTab] = useState("services");

  return (
    <div>
      <Header />

      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => setTab("services")}>Services</button>

        {role !== "viewer" && (
          <button onClick={() => setTab("incidents")}>Incidents</button>
        )}
      </div>

      {tab === "services" && <ServicesGrid />}
      {tab === "incidents" && role !== "viewer" && <IncidentsPage />}
    </div>
  );
}