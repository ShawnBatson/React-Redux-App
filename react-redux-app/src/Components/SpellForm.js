import React, { useState } from "react";
import {spellReducer} from "../store/reducers/SpellReducer";

export const SpellForm = () => {
  const [spells, setSpells] = useState([]);

  const onSubmit = data => {
    setSpells(data);
  };
  const handleChange = event => {
    setData(event.target.value);
  };

  return (
    <form>
      <label htmlFor="Select Spell">
        <select id="spells">
        {state.map(spells => <option key={spells.id} value={spells..name}>{spells.name}</option>)}
        </select>
      </label>
    </form>
  );
};

