import initialState from "../state";

import { disableBottomTabs, enableBottomTabs } from './bottomTabs'

let reducer = (state = initialState, action) => {

  if (action.type == "disableBottomTabs") {
    return disableBottomTabs(state, action);
  }

  else if (action.type == "enableBottomTabs") {
    return enableBottomTabs(state, action);
  }
  
  return state;
};

export default reducer;
