import initialState from "../state";

import { disableBottomTabs, enableBottomTabs } from "./bottomTabs";
import { setChild, removeChild } from "./children";

let reducer = (state = initialState, action) => {
  if (action.type == "disableBottomTabs") {
    return disableBottomTabs(state, action);
  } else if (action.type == "enableBottomTabs") {
    return enableBottomTabs(state, action);
  } else if (action.type == "setChild") {
    return setChild(state, action);
  } else if (action.type == "removeChild") {
    return removeChild(state, action);
  }

  return state;
};

export default reducer;
