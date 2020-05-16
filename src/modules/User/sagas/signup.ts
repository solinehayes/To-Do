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
import { ErrorService } from "../../../Lib/ErrorService";
import { updateUserActionCreator } from "../actions/update";
import { useUser } from "../../../db/user/useUser";

export function* signupSaga(
  action: ReturnType<typeof signUpActionCreator>,
): SagaIterator {
  const {createUser} = useUser();
  yield put(startLoading(LoadingStatusKey.SIGN_UP));
  const { email, password, username } = action.payload;
  try {
    const userData = yield call(
      [firebase.auth(), "createUserWithEmailAndPassword"],
      email,
      password,
    );
    yield put(updateUserActionCreator({ id: userData.user.uid }));
    yield call(createUser, userData.user.uid, email, username);
    yield call([NavigationService, "navigate"], "AuthenticatedNavigator", {});
  } catch (error) {
    console.log(error);
    yield call([ErrorService, "showErrorModal"]);
  } finally {
    yield put(finishLoading(LoadingStatusKey.SIGN_UP));
  }
}
