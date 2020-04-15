import {
  startLoading,
  LoadingStatusKey,
  finishLoading,
} from "../../LoadingStatus/actions";
import { signUpActionCreator } from "../actions/signup";
import { call, put } from "redux-saga/effects";
import firebase from "firebase";
import { SagaIterator } from "redux-saga";
import { NavigationService } from "../../../navigation/navigation.service";

export function* signupSaga(
  action: ReturnType<typeof signUpActionCreator>,
): SagaIterator {
  yield put(startLoading(LoadingStatusKey.SIGN_UP));
  const { email, password, username } = action.payload;
  try {
    yield call(
      [firebase.auth(), "createUserWithEmailAndPassword"],
      email,
      password,
    );
    yield call([NavigationService, "navigate"], "AuthenticatedNavigator", {});
  } catch (error) {
    console.warn(error);
  } finally {
    yield put(finishLoading(LoadingStatusKey.SIGN_UP));
  }
}
