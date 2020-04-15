import {
  CommonActions,
  NavigationContainerRef,
} from "@react-navigation/native";
import React from "react";

export const navigationRef = React.createRef<NavigationContainerRef>();

export const NavigationService = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigate: (name: string, params: Record<string, any>) => {
    navigationRef &&
      navigationRef.current &&
      navigationRef.current.navigate(name, params);
  },
  reset: (routeName: string) => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: routeName }],
    });
    navigationRef &&
      navigationRef.current &&
      navigationRef.current.dispatch(resetAction);
  },
};
