import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import OddsRoute from "./routes/api/odds/odds";
import MatchesRoute from "./routes/api/matches/matches";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/odds" element={ <OddsRoute />}/>
          <Route path="/" element={ <MatchesRoute />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
