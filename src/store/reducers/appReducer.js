import { AppActionTypes } from '../actions/applicationActions';

const initialState = {
  locale: navigator.language,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case AppActionTypes.SELECT_LOCALE:
      return { ...state, locale: action.payload };
    default:
      return state;
  }
}
