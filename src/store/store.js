import {
  legacy_createStore as createStore
} from "@reduxjs/toolkit";
import taskReducer from "./task";
function configureStore(){
  return createStore(
    taskReducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
  );
}
export default configureStore;
/* import {applyMiddleware} from "redux";
import { logger } from "./middleware/logger";

import { thunk } from "./middleware/thunk";

const middlewareEnhancer = applyMiddleware(logger, thunk);

function configureStore() {
  return createStore(
    taskReducer,
    compose(
      middlewareEnhancer,
      window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
    )
  );
}
export default configureStore;
 */



