import { createAction, ActionType } from "typesafe-actions";

interface SignUpPayload {
  email: string;
  password: string;
  username: string;
}

export const signUpActionCreator = createAction(
  "SIGN_UP",
  (payload: SignUpPayload) => payload,
)();
export type SignUpAction = ActionType<typeof signUpActionCreator>;
