import React from "react";
import {
  StyleProp,
  StyleSheet,
  ViewStyle,
  Text,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { theme } from "../../theme";

interface Props {
  text?: string;
  icon?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: theme.colors.sunsetOrange,
    borderRadius: 5 * theme.gridUnit,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 100,
    paddingHorizontal: 2 * theme.gridUnit,
  },
  text: {
    textAlign: "center",
    color: theme.colors.white,
    ...theme.fonts.arialBold14,
  },
});

export const Button = (props: Props) => (
  <TouchableOpacity
    style={[styles.container, props.style]}
    onPress={props.onPress}
  >
    {props.text && <Text style={styles.text}>{props.text}</Text>}
  </TouchableOpacity>
);
