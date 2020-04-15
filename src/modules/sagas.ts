import { userSaga } from "./User/sagas";
import { all, fork } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

export function* rootSaga(): SagaIterator {
  yield all([fork(userSaga)]);
}
