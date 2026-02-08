import { useEffect, useState } from "react";
import { api } from "./api/client";

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h2 style={{ marginBottom: 8 }}>{title}</h2>
      <div style={{ background: "#f7f7f9", padding: 12, borderRadius: 6 }}>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [stops, setStops] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        const [stopsRes, vehiclesRes] = await Promise.all([
          api.get("/shuttle/stops"),
          api.get("/shuttle/vehicles"),
        ]);
        setStops(stopsRes.data);
        setVehicles(vehiclesRes.data);
      } catch (e) {
        setErr(e?.message || "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  return (
    <div style={{ maxWidth: 880, margin: "40px auto", fontFamily: "system-ui, Arial" }}>
      <h1>UNSW Shuttle Tracker</h1>
      <p style={{ color: "#666" }}>
        Demo: loads stops & vehicle positions from a FastAPI backend.
      </p>

      {loading && <p>Loading…</p>}
      {err && <p style={{ color: "crimson" }}>{err}</p>}

      <Section title="Stops">
        <ul>
          {stops.map((s) => (
            <li key={s.id}>
              <strong>{s.name}</strong> ({s.lat.toFixed(4)}, {s.lng.toFixed(4)})
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Vehicles">
        <ul>
          {vehicles.map((v) => (
            <li key={v.id}>
              <strong>{v.id}</strong> — {v.route} — ETA: {v.eta_min} min — (
              {v.lat.toFixed(4)}, {v.lng.toFixed(4)})
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}