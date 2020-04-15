import { createAction, ActionType } from "typesafe-actions";

interface LoginPayload {
  email: string;
  password: string;
}

export const loginActionCreator = createAction(
  "LOGIN",
  (payload: LoginPayload) => payload,
)();
export type LoginAction = ActionType<typeof loginActionCreator>;
