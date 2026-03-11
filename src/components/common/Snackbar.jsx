import React, { useEffect } from "react";

export default function Snackbar({ message, open, onClose }) {

  useEffect(() => {

    if (!open) return;

    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);

  }, [open]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#333",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "4px"
      }}
    >
      {message}
    </div>
  );
}