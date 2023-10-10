import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import OddsRoute from "./routes/api/odds/odds";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/odds" element={ <OddsRoute />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
