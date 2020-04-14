import { useState } from "react";
import firebase from "react-native-firebase";

export enum LoginState {
  LOGIN = "LOGIN",
  SIGNUP = "SIGNUP",
}

export const useLogin = () => {
  const [isSelected, setIsSelected] = useState<LoginState>(LoginState.LOGIN);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const login = () => {};
  const signup = () => {};
  return {
    isSelected,
    setIsSelected,
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
  };
};
