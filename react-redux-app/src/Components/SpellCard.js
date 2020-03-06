import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getSpells } from "../store/actions/Action";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./SpellCard.css";

export const SpellCard = props => {
  const [spellDetails, setSpellDetails] = useState({});
  console.log("this is in spellcard props", props);
  const id = props.match.params.index;

  useEffect(() => {
    const getSpellList = () => {
      axios
        .get(`https://cors-anywhere.herokuapp.com/dnd5eapi.co/api/spells/${id}`)
        .then(response => {
          console.log(
            "this is in the spellCard Component Axios Call",
            response.data
          );
          setSpellDetails(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getSpellList();
  }, []);

  return (
    <div className="topOfThePageContainer">
      <div className="spell-list">
        {/* design this area later */}
        <h1>{spellDetails.name}</h1>
      </div>
    </div>
  );
};

// card has it's own local state, there is no need for mapstatetoprops here \/

const mapStateToProps = state => {
  return {
    spells: [state],
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
