import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ChooseYourList } from "../pages/ChooseYourList/ChooseYourList";
import { Tasks } from "../pages/Tasks/Tasks.page";
import { StackNavigationOptions } from "react-navigation-stack/lib/typescript/src/vendor/types";
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
export const AuthenticatedNavigator = createAppContainer(
  createStackNavigator(
    {
      ChooseYourList: {
        screen: ChooseYourList,
        navigationOptions: {
          title: "Your lists",
        },
      },
      Tasks: {
        screen: Tasks,
        navigationOptions: {
          title: "Your Tasks",
        },
      },
    },
    {
      initialRouteName: "ChooseYourList",
      defaultNavigationOptions: defaultHeaderNavigationOptions,
    },
  ),
);
