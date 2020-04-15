import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginActionCreator } from "../../modules/User/actions/login";
import { signUpActionCreator } from "../../modules/User/actions/signup";
import { isLoadingSelector } from "../../modules/LoadingStatus/selector";
import firebase from "firebase";
import { store } from "../../App";

export enum LoginState {
  LOGIN = "LOGIN",
  SIGNUP = "SIGNUP",
}

export const useLogin = () => {
  const [isSelected, setIsSelected] = useState<LoginState>(LoginState.LOGIN);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const dispatch = useDispatch();

  const isLoginLoading = useSelector(isLoadingSelector("LOGIN"));
  const isSignUpLoading = useSelector(isLoadingSelector("SIGN_UP"));

  const login = (email: string, password: string) => {
    dispatch(loginActionCreator({ email, password }));
  };

  const signup = async (email: string, password: string, username: string) => {
    dispatch(signUpActionCreator({ email, password, username }));
  };
  return {
    isSelected,
    setIsSelected,
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    login,
    signup,
    isLoginLoading,
    isSignUpLoading,
  };
};
