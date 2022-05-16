import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import DevelopersPage from "./components/screens/developersPage/DevelopersPage";
import LandingPage from "./components/screens/landingPage/LandingPage";

function App() {
  const [isEmployer, setIsEmployer] = useState(true);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              isEmployer={isEmployer}
              setIsEmployer={setIsEmployer}
            />
          }
        />
        <Route
          path="/developers"
          element={
            <DevelopersPage
              isEmployer={isEmployer}
              setIsEmployer={setIsEmployer}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
