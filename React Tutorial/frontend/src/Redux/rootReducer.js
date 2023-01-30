// import { combineReducers } from "redux";
// import { operationsReducers } from "./todoapp/reducers/operations";

// export const rootReducer = combineReducers({
//   operationsReducers,
// });

import { combineReducers } from "redux";
import { operationsReducers } from "./todoapp/reducers/operations";

export const rootReducer = combineReducers({
  operationsReducers,
});
