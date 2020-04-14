import { ActionType, createAction } from "typesafe-actions";

export const clearStoreActionCreator = createAction("CLEAR_STORE")();

type ClearStoreAction = ActionType<typeof clearStoreActionCreator>;

export type Actions = ClearStoreAction;
