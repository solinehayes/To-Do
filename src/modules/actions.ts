import { ActionType, createAction } from "typesafe-actions";
import { LoginAction } from "./User/actions/login";
import { SignUpAction } from "./User/actions/signup";
import { UpdateUserAction } from "./User/actions/update";

export const clearStoreActionCreator = createAction("CLEAR_STORE")();

type ClearStoreAction = ActionType<typeof clearStoreActionCreator>;

export type Actions = ClearStoreAction | LoginAction | SignUpAction |UpdateUserAction;
