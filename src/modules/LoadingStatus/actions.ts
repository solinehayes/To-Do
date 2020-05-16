import { action, ActionType } from "typesafe-actions";

export enum LoadingStatusKey {
  SIGN_UP = "SIGN_UP",
  LOGIN = "LOGIN",
  CREATE_LIST ="CREATE_LIST"
}

export const startLoading = (key: LoadingStatusKey) =>
  action("LOADING_START", { key });
export const finishLoading = (key: LoadingStatusKey) =>
  action("LOADING_END", { key });
export const setError = (key: LoadingStatusKey, error: string) =>
  action("LOADING_ERROR", { key, error });

const actions = {
  startLoading,
  finishLoading,
  setError,
};

export type LoadingStatusAction = ActionType<typeof actions>;
