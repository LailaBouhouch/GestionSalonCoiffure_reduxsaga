import { SET_PRESTATIONS, GET_PRESTATIONS } from './actions';

const initialState = {
  prestations: [],
  fetching: false,
};

const prestationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRESTATIONS:
      return {...state, prestations: action.value,  fetching: false};
    case GET_PRESTATIONS:
      return { ...state, fetching: true }
    default: return state;
  }
}


export default prestationReducer;