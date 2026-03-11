import NotesEditor from "./NotesEditor";
import ResolveConfirmDialog from "../dialogs/ResolveConfirmDialog";

export default function IncidentSidePanel({ incident, close }) {
  return (
    <div style={{
      position: "fixed",
      right: 0,
      top: 0,
      width: 350,
      height: "100%",
      background: "#fff",
      borderLeft: "1px solid #ddd",
      padding: 20
    }}>
      <button onClick={close}>X</button>

      <h3>{incident.title}</h3>

      <p>Service: {incident.serviceName}</p>
      <p>Severity: {incident.severity}</p>
      <p>Status: {incident.status}</p>

      <NotesEditor />

      <ResolveConfirmDialog />
    </div>
  );
}