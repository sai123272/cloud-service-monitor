import { useState, useEffect } from "react";

export default function NotesEditor() {
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("Saved");

  useEffect(() => {
    setStatus("Unsaved changes");

    const timer = setTimeout(() => {
      setStatus("Saving...");
      setTimeout(() => setStatus("Saved"), 500);
    }, 2000);

    return () => clearTimeout(timer);

  }, [notes]);

  return (
    <div>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Add notes..."
      />

      <p>{status}</p>
    </div>
  );
}