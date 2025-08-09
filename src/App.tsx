import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="" element={<Dashboard />}>
        <Route path={"settings"} element={<Settings />} />
        <Route path="*" element={<div>Coming soon</div>} />
        <Route path={""} element={<Navigate to="settings" />} />
      </Route>
    </Routes>
  );
}

export default App;
