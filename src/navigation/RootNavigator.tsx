import React  from "react";
import { useSelector } from 'react-redux';
import { createStackNavigator } from "@react-navigation/stack";
import { AuthenticatedNavigator } from "./AuthenticatedNavigator";
import { Login } from "../pages/Login/Login";
import { userIdSelector, userSelector } from "../modules/User/selector/selector";

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
  const isLoggedIn = !!useSelector(userIdSelector);
  return (
    <RootStack.Navigator initialRouteName={isLoggedIn? "AuthenticatedNavigator":"Login"}>
      {isLoggedIn?
      <RootStack.Screen
        name="AuthenticatedNavigator"
        component={AuthenticatedNavigator}
        options={{ headerShown: false }}
      /> :
      <RootStack.Screen
        name="Login"
        component={Login}
        options={{
          ...defaultHeaderNavigationOptions,
        }}
      />}
    </RootStack.Navigator>
  );
};
