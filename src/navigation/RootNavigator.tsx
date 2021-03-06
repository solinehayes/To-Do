import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthenticatedNavigator } from "./AuthenticatedNavigator";
import { Login } from "../pages/Login/Login";
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

const RootStack = createStackNavigator<Record<string, undefined>>();
export const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={"Login"}>
      <RootStack.Screen
        name="AuthenticatedNavigator"
        component={AuthenticatedNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Login"
        component={Login}
        options={{
          ...defaultHeaderNavigationOptions,
        }}
      />
    </RootStack.Navigator>
  );
};
