import React, { useState } from "react";
import { connect } from "react-redux";
import { getSpells } from "../store/actions/Action";
import "./SpellCard.css";

export const SpellCard = ({ getSpells, isFetching, error }) => {
  const [spells, setSpells] = useState([]);
  console.log("this is logged from SpellCard Component");

  if (isFetching) {
    return <h2>Fetching the spell</h2>;
  }

  const handleChange = event => {
    console.log("this is in handleChange");
    setSpells(getSpells);
  };

  return (
    <div className="topOfThePageContainer">
      <h1 className="title">DnD Spell List</h1>
      <form>
        <label htmlFor="Select Spell">
          <input placeholder="Type Spell Name Here"></input>
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

export default connect(mapStateToProps, { getSpells })(SpellCard);

{
  /* <select onChange={handleChange}>
  {console.log("this is in the component", spells)}
  {spells &&
    spells.length > 0 &&
    spells.map(spell => {
      return (
        <option key={spell.id} value={spell.name}>
          {spell.name}
        </option>
      );
    })}
</select>; */
}
