import React from "react";
import { connect } from "react-redux";
import { getSpell } from "../store/actions/Action";

export const SpellCard = ({ getSpell, isFetching, error }) => {
  console.log("this is logged from SpellCard Component");
  if (isFetching) {
    return <h2>Fetching the spell</h2>;
  }
  return <h1>Spell Component</h1>;
};
