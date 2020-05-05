import {
  loadingStatusReducer,
  LoadingStatusState,
  initialLoadingState,
} from "./LoadingStatus/reducer";
import { combineReducers } from "redux";
import { Actions, clearStoreActionCreator } from "./actions";
import { getType } from "typesafe-actions";
import { initialUserState, UserState, userReducer } from "./User/reducer/reducer";
import { useReducer } from "react";

const appReducer = combineReducers<RootState>({
  loadingStatus: loadingStatusReducer,
  user: userReducer,
});

export interface RootState {
  user: UserState;
  loadingStatus: LoadingStatusState;
}
export const initialRootState: RootState = {
  user :initialUserState,
  loadingStatus: initialLoadingState,
};
type RootReducer = ReturnType<typeof appReducer>;

export const rootReducer = (
  state: RootState | undefined,
  action: Actions,
): RootReducer => {
  if (action.type === getType(clearStoreActionCreator)) return initialRootState;
  return appReducer(state, action);
};
