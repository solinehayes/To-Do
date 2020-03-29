import React from "react";
import { RootNavigator } from "./navigation/Navigator";

import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAvHczJ7pVkKnG3UsuXix13YkNFPud60fY",
  authDomain: "to-do-b2263.firebaseapp.com",
  databaseURL: "https://to-do-b2263.firebaseio.com/",
  storageBucket: "gs://to-do-b2263.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return <RootNavigator />;
}
