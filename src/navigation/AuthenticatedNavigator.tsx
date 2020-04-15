import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { ChooseYourList } from "../pages/ChooseYourList/ChooseYourList";
import { Tasks } from "../pages/Tasks/Tasks.page";

const defaultHeaderNavigationOptions = {
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
const AuthenticatedStack = createStackNavigator<Record<string, undefined>>();
export const AuthenticatedNavigator = () => {
  return (
    <AuthenticatedStack.Navigator initialRouteName={"ChooseYourList"}>
      <AuthenticatedStack.Screen
        name="ChooseYourList"
        component={ChooseYourList}
        options={{
          ...defaultHeaderNavigationOptions,
          headerTitle: "Your lists",
        }}
      />
      <AuthenticatedStack.Screen
        name="Tasks"
        component={Tasks}
        options={{
          ...defaultHeaderNavigationOptions,
          headerTitle: "Your tasks",
        }}
      />
    </AuthenticatedStack.Navigator>
  );
};
