import { SagaIterator } from "redux-saga";
import firebase from "firebase";
import { loginActionCreator } from "../actions/login";
import { call, put } from "redux-saga/effects";
import {
  startLoading,
  LoadingStatusKey,
  finishLoading,
} from "../../LoadingStatus/actions";
import { NavigationService } from "../../../navigation/navigation.service";
import { ErrorService } from "../../../Lib/ErrorService";

export function* loginSaga(
  action: ReturnType<typeof loginActionCreator>,
): SagaIterator {
  yield put(startLoading(LoadingStatusKey.LOGIN));
  const { email, password } = action.payload;
  try {
    yield call(
      [firebase.auth(), "signInWithEmailAndPassword"],
      email,
      password,
    );
    yield call([NavigationService, "navigate"], "AuthenticatedNavigator", {});
  } catch (error) {
    yield call([ErrorService, "showErrorModal"]);
  } finally {
    yield put(finishLoading(LoadingStatusKey.LOGIN));
  }
}
