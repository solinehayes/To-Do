import React from "react";
import { RootNavigator } from "./navigation/RootNavigator";
import { createStore } from "redux";
import { Provider } from "react-redux"; // @redux

import * as firebase from "firebase";
import { rootReducer } from "./modules/reducer";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAvHczJ7pVkKnG3UsuXix13YkNFPud60fY",
  authDomain: "to-do-b2263.firebaseapp.com",
  databaseURL: "https://to-do-b2263.firebaseio.com/",
  storageBucket: "gs://to-do-b2263.appspot.com",
};
export const store = createStore(rootReducer);
firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
