import React from "react";
import {
  StyleSheet,
  ViewStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { theme } from "../../theme";

interface Props {
  text: string;
  onPress: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}

interface Styles {
  container: ViewStyle;
  text: TextStyle;
  disableButton: ViewStyle;
  enableButton: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    position: "absolute",
    bottom: 2 * theme.gridUnit,
    left: 0,
    borderRadius: 5 * theme.gridUnit,
    justifyContent: "center",
    height: 50,
    width: "95%",
    marginHorizontal: 2 * theme.gridUnit,
  },
  text: {
    textAlign: "center",
    color: theme.colors.white,
    ...theme.fonts.arialBold14,
  },
  disableButton: {
    backgroundColor: theme.colors.silver,
  },
  enableButton: {
    backgroundColor: theme.colors.sunsetOrange,
  },
});

export const BottomFullWidthButton = (props: Props) => (
  <TouchableOpacity
    style={[
      styles.container,
      props.isDisabled ? styles.disableButton : styles.enableButton,
    ]}
    onPress={props.onPress}
    disabled={props.isDisabled || props.isLoading}
  >
    {props.isLoading ? (
      <ActivityIndicator testID="demoLoader" color={theme.colors.white} />
    ) : (
      props.text && <Text style={styles.text}>{props.text}</Text>
    )}
  </TouchableOpacity>
);
