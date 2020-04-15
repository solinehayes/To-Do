import {
  startLoading,
  LoadingStatusKey,
  finishLoading,
} from "../../LoadingStatus/actions";
import { signUpActionCreator } from "../actions/signup";
import { call, put } from "redux-saga/effects";
import firebase from "firebase";
import { SagaIterator } from "redux-saga";

export function* signupSaga(
  action: ReturnType<typeof signUpActionCreator>,
): SagaIterator {
  console.log("saga launched");
  yield put(startLoading(LoadingStatusKey.SIGN_UP));
  const { email, password, username } = action.payload;
  console.log("test saga");
  try {
    yield call(
      [firebase.auth(), "createUserWithEmailAndPassword"],
      email,
      password,
    );
  } catch (error) {
    console.warn(error);
  } finally {
    yield put(finishLoading(LoadingStatusKey.SIGN_UP));
  }
}
