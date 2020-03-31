import React from "react";
import {
  StyleSheet,
  ViewStyle,
  Text,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { theme } from "../../theme";

interface Props {
  text: string;
  onPress: () => void;
}

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    position: "absolute",
    bottom: theme.gridUnit,
    left: theme.gridUnit,
    backgroundColor: theme.colors.sunsetOrange,
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
});

export const BottomFullWidthButton = (props: Props) => (
  <TouchableOpacity style={[styles.container]} onPress={props.onPress}>
    {props.text && <Text style={styles.text}>{props.text}</Text>}
  </TouchableOpacity>
);
