import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SpellCard } from "./Components/SpellCard";
import { connect } from "react-redux";
import { getSpells } from "./store/actions/Action";

import "./App.css";

function App(props) {
  useEffect(() => {
    props.getSpells();
  }, []);

  return (
    <div className="App">
      <h1>DnD Spells</h1>
      <Route path="/spells/:id" render={props => <SpellCard {...props} />} />
    </div>
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

export default connect(mapStateToProps, { getSpells })(App);
