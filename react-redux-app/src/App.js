import React from "react";
import { SpellCard } from "./Components/SpellCard";

import "./App.css";
import { getSpell } from "./store/actions/Action";

function App() {
  return (
    <div className="App">
      <h1>DnD Spells</h1>
      <SpellCard />
    </div>
  );
}

export default App;
