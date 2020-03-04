import React from "react";
import { connect } from "react-redux";
import { getSpell } from "../store/actions/Action";

const Spells = ({ getSpell, isFetching, error }) => {
  if (isFetching) {
    return <h2>Fetching the spell</h2>;
  }
};
