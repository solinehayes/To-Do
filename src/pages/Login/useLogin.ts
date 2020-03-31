import { useState } from "react";

export enum LoginState {
  LOGIN = "LOGIN",
  SIGNUP = "SIGNUP",
}

export const useLogin = () => {
  const [isSelected, setIsSelected] = useState<LoginState>(LoginState.LOGIN);
  return { isSelected, setIsSelected };
};
