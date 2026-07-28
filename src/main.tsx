import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import CMMSApp from "./CMMSApp";
import "./styles.css";
import "./cmms.css";
import "./iot-monitor.css";

function RootRouter() {
  const [isCmms, setIsCmms] = useState(() =>
    window.location.hash.startsWith("#/cmms"),
  );

  useEffect(() => {
    const handleHashChange = () => {
      setIsCmms(window.location.hash.startsWith("#/cmms"));
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return isCmms ? <CMMSApp /> : <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootRouter />
  </StrictMode>,
);
