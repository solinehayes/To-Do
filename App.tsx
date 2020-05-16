import React from "react";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"; // @redux
import { composeWithDevTools } from "redux-devtools-extension";
import firebase from "firebase";
import { rootReducer } from "./src/modules/reducer";
import { middlewares, sagaMiddleware } from "./src/modules/middleware";
import { rootSaga } from "./src/modules/sagas";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/navigation/navigation.service";
import { ErrorModal } from "./src/components/ErrorModal/ErrorModal.component";
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

// Initialize Firebase
const firebaseConfig = {
  projectId: "todo-30ff7",
  apiKey: "AIzaSyAnLhNOxXMnCWnXsWkv7EuVK3TTiTloL9o",
  authDomain: "todo-30ff7.firebaseapp.com",
  databaseURL: "https://todo-30ff7.firebaseio.com/",
  storageBucket: "gs://todo-30ff7.appspot.com",
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
      <NavigationContainer ref={navigationRef}>
        <RootNavigator />
        <ErrorModal />
      </NavigationContainer>
    </Provider>
  );
}
