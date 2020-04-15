import React from "react";
import { RootNavigator } from "./navigation/RootNavigator";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"; // @redux
import { composeWithDevTools } from "redux-devtools-extension";
import * as firebase from "firebase";
import { rootReducer } from "./modules/reducer";
import { middlewares, sagaMiddleware } from "./modules/middleware";
import { rootSaga } from "./modules/sagas";
import { NavigationService } from "./navigation/navigation.service";
import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from "react-navigation";

const setNavigatorRef = (ref: unknown) => {
  if (!ref) return;
  NavigationService.setNavigator(
    ref as NavigationScreenProp<
      NavigationRoute<NavigationParams>,
      NavigationParams
    >,
  );
};
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAvHczJ7pVkKnG3UsuXix13YkNFPud60fY",
  authDomain: "to-do-b2263.firebaseapp.com",
  databaseURL: "https://to-do-b2263.firebaseio.com/",
  storageBucket: "gs://to-do-b2263.appspot.com",
};
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(rootSaga);

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator ref={setNavigatorRef} />
    </Provider>
  );
}
