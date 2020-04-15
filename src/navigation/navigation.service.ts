import {
  NavigationActions,
  NavigationParams,
  NavigationRoute,
  NavigationScreenProp,
  StackActions,
} from "react-navigation";

let _navigator: NavigationScreenProp<
  NavigationRoute<NavigationParams>,
  NavigationParams
>;

const setNavigator = (
  navigatorRef: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >,
) => (_navigator = navigatorRef);

const navigate = (routeName: string, params: Record<string, unknown> = {}) =>
  _navigator.dispatch(NavigationActions.navigate({ routeName, params }));

const goBack = () => _navigator.dispatch(NavigationActions.back());

const reset = (routeName: string) => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })],
    key: null,
  });
  _navigator.dispatch(resetAction);
};

export const NavigationService = { setNavigator, navigate, goBack, reset };
