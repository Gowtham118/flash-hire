import { Route, Routes } from "react-router-dom";
import "./App.css";

import LandingPage from "./components/screens/landingPage/LandingPage";
import ThankyouPage from "./components/screens/thankyouPage/ThankyouPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
      </Routes>
    </div>
  );
}

export default App;
