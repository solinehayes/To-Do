import {
  loadingStatusReducer,
  LoadingStatusState,
  initialLoadingState,
} from "./LoadingStatus/reducer";
import { combineReducers } from "redux";
import { Actions, clearStoreActionCreator } from "./actions";
import { getType } from "typesafe-actions";

const appReducer = combineReducers({
  loadingStatus: loadingStatusReducer,
});

export interface RootState {
  loadingStatus: LoadingStatusState;
}
export const initialRootState: RootState = {
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
