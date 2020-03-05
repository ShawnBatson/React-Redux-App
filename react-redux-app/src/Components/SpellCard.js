import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getSpells } from "../store/actions/Action";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./SpellCard.css";

export const SpellCard = props => {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const getSpellList = () => {
      axios
        .get(`https://cors-anywhere.herokuapp.com/dnd5eapi.co/api/spells/`)
        .then(response => {
          console.log(
            "this is in the spellCard Component Axios Call",
            response.data
          );
          setSpells(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getSpellList();
  }, []);

  return (
    <div className="topOfThePageContainer">
      <h1 className="title">DnD Spell List</h1>
      <div className="spell-list">
        {spells.map(spell => {
          <SpellDetails spells={spell} />;
        })}
      </div>
    </div>
  );
};

function SpellDetails({ spellName }) {
  const { name, id, url } = spellName;
  return (
    <Link to={`/spells/${spell.id}`}>
      <div className="spell-card">
        <h2>{name}</h2>
        <p>{id}</p>

        {url.map(spellUrl => (
          <div key={spellUrl} className="spell-url">
            {url}
          </div>
        ))}
      </div>
    </Link>
  );
}

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
