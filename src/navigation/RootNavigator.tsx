import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ChooseYourList } from "../pages/ChooseYourList/ChooseYourList";
import { StackNavigationOptions } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { AuthenticatedNavigator } from "./AuthenticatedNavigator";
import { Login } from "../pages/Login/Login";
const defaultHeaderNavigationOptions: StackNavigationOptions = {
  headerStyle: {
    borderBottomWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: "#FF4A4A",
  },
  headerTitleStyle: {
    color: "#FFFFFF",
    fontFamily: "Arial",
  },
};
export const RootNavigator = createAppContainer(
  createStackNavigator(
    {
      AuthenticatedNavigator: {
        screen: AuthenticatedNavigator,
        navigationOptions: {
          headerShown: false,
        },
      },
      Login: {
        screen: Login,
        navigationOptions: {
          title: "Login",
        },
      },
    },
    {
      initialRouteName: "AuthenticatedNavigator",
      defaultNavigationOptions: defaultHeaderNavigationOptions,
    },
  ),
);
