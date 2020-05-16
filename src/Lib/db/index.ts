import * as firebase from "firebase";
require("firebase/firestore");

export const createUser = async (
  userId: string,
  email: string,
  username: string,
): Promise<any> => {
  var userData = {
    email,
    username,
  };

  firebase
    .firestore()
    .collection("users")
    .doc(userId)
    .set(userData)
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};
