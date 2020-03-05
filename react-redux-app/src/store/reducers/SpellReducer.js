import {
  FETCHING_SPELLS_SUCCESS,
  FETCHING_SPELLS_START
} from "../actions/Action";

const initialState = {
  spells: [],
  isFetching: true,
  id: "",
  index: "",
  name: "",
  desc: [],
  higher_level: [],
  page: "",
  range: " ",
  components: [],
  material: "",
  ritual: false,
  duration: "",
  concentration: false,
  casting_time: "",
  level: 0,
  school: {
    name: "",
    url: ""
  }
};

export const SpellReducer = (state = initialState, action) => {
  console.log("this is in the top of the SpellReducer");
  switch (action.type) {
    case FETCHING_SPELLS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_SPELLS_SUCCESS:
      return {
        ...state,
        spells: action.payload,
        isFetching: false,
        id: action.payload.id,
        index: action.payload.index,
        name: action.payload.name,
        desc: [action.payload.desc],
        higher_level: [action.payload.higher_level],
        page: action.payload.page,
        range: action.payload.range,
        components: [action.payload.components],
        material: action.payload.material,
        ritual: action.payload.ritual,
        duration: action.payload.duration,
        concentration: action.payload.concentration,
        casting_time: action.payload.casting_time,
        level: action.payload.level
      };
    default:
      return state;
  }
};
