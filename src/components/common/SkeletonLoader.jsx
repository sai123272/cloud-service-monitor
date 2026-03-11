import React from "react";

export default function SkeletonLoader({ rows = 5 }) {

  const skeletonRows = new Array(rows).fill(0);

  return (
    <div>
      {skeletonRows.map((_, index) => (
        <div
          key={index}
          style={{
            height: "20px",
            background: "#eee",
            marginBottom: "10px",
            borderRadius: "4px",
            animation: "pulse 1.5s infinite"
          }}
        />
      ))}
    </div>
  );
}