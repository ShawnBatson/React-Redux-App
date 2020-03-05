import React, { useState } from "react";
import { connect } from "react-redux";
import { getSpell } from "../store/actions/Action";
import { spellReducer } from "../store/reducers/SpellReducer";

export const SpellCard = ({ getSpell, isFetching, error }) => {
  const [spells, setSpells] = useState([]);
  console.log("this is logged from SpellCard Component");

  if (isFetching) {
    return <h2>Fetching the spell</h2>;
  }

  const handleChange = event => {
    setSpells(getSpell);
  };

  return (
    <div className="topOfThePageContainer">
      <h1 className="title">DnD Spell List</h1>
      <form>
        <label htmlFor="Select Spell">
          <select id="spells">
            <select onChange={handleChange}>
              {spells &&
                spells.length > 0 &&
                spells.map(spell => {
                  return (
                    <option key={spell.id} value={spell.name}>
                      {spell.name}
                    </option>
                  );
                })}
            </select>
          </select>
        </label>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: false,
    id: state.id,
    index: state.index,
    name: state.name,
    desc: [state.desc],
    higher_level: [state.higher_level],
    page: state.page,
    range: state.range,
    components: [state.components],
    material: state.material,
    ritual: state.ritual,
    duration: state.duration,
    concentration: state.concentration,
    casting_time: state.casting_time,
    level: state.level
  };
};

export default connect(mapStateToProps, { getSpell })(SpellCard);
