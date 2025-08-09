import { Route, Routes } from "react-router";
import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="" element={<Dashboard />}>
        <Route path={"settings"} element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
