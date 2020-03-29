import React from "react";
import {
  StyleProp,
  StyleSheet,
  ViewStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  ShadowPropTypesIOS,
} from "react-native";
import { theme } from "../../theme";
import Icon from "react-native-vector-icons/FontAwesome";

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
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: theme.colors.sunsetOrange,
    height: 5 * theme.gridUnit,
    width: 5 * theme.gridUnit,
    borderRadius: 5 * theme.gridUnit,
  },
  text: {
    color: theme.colors.white,
    ...theme.fonts.arialBold14,
  },
});

export const RoundButton = (props: Props) => (
  <TouchableOpacity
    style={[styles.container, props.style]}
    onPress={props.onPress}
  >
    {props.text && <Text style={styles.text}>{props.text}</Text>}
    {props.icon && <Icon name={props.icon} color={theme.colors.white} />}
  </TouchableOpacity>
);
