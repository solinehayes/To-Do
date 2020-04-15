import { takeLatest } from "redux-saga/effects";
import { loginSaga } from "./login";
import { signupSaga } from "./signup";

export function* userSaga() {
  yield takeLatest("SIGN_UP", signupSaga);
  yield takeLatest("LOGIN", loginSaga);
}
