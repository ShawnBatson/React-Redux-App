import React, { useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { SpellCard } from "./Components/SpellCard";
import { connect } from "react-redux";
import { getSpells } from "./store/actions/Action";

import "./App.css";

function App(props) {
  useEffect(() => {
    props.getSpells();
  }, []);

  console.log("this is props.spells in app", props.spells);
  return (
    <div className="App">
      <h1>DnD Spells</h1>
      <Route
        exact
        path="/"
        // using render here is because it doesn't come from a component. This function will return jsx without a component. \/
        render={() => {
          return props.spells.map(spell => {
            return <Link to={`/spells/${spell.index}`}>{spell.name}</Link>;
          });
        }}
      />
      {/* \/ this is rendering spell card.  */}
      <Route exact path="/spells/:index" component={SpellCard}></Route>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    spells: state.spells,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { getSpells })(App);
