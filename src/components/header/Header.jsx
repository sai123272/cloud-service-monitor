import { useState } from "react";

export default function Header() {

  const [autoRefresh,setAutoRefresh] = useState(true);

  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      padding:20,
      borderBottom:"1px solid #ddd"
    }}>

      <h2>Cloud Service Monitor</h2>

      <div>

        <label>
          Auto Refresh
          <input
            type="checkbox"
            checked={autoRefresh}
            onChange={()=>setAutoRefresh(!autoRefresh)}
          />
        </label>

        <button onClick={()=>window.location.reload()}>
          Refresh
        </button>

      </div>

    </div>
  );
}