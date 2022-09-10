import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Routes as appRoutes } from "./Global/Routes";
import NavBar from "./Shared/navbar/NavBar";
import { useState } from "react";

function App() {
  const [currentPath, setPath] = useState(window.location.pathname);
  return (
    <div className="App">
      <Router>
        <NavBar setPath={(path) => setPath(path)} currentPath={currentPath} />
        <Routes>
          {appRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.element />}
              exact
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
