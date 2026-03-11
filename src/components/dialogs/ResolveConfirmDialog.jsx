import { useState } from "react";

export default function ResolveConfirmDialog() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>
        Resolve
      </button>

      {open && (
        <div style={{
          background: "#eee",
          padding: 20
        }}>
          <p>Confirm resolution?</p>

          <button onClick={() => setOpen(false)}>
            Cancel
          </button>

          <button
            onClick={() => {
              alert("Incident resolved");
              setOpen(false);
            }}
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
}