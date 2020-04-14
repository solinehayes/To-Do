import { FunctionComponent, useState } from "react";
import { StyleSheet, View, ViewStyle, TextStyle, Text } from "react-native";
import React from "react";
import { theme } from "../../../theme";
import { LoginState } from "../useLogin";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Styles {
  container: ViewStyle;
  selected: ViewStyle;
  selectedText: TextStyle;
  unSelected: ViewStyle;
  unSelectedText: TextStyle;
}

interface Props {
  isSelected: LoginState;
  setIsSelected: (state: LoginState) => void;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: theme.colors.sunsetOrange,
    borderRadius: 15,
    margin: 2 * theme.gridUnit,
    height: 50,
  },
  selected: {
    backgroundColor: theme.colors.sunsetOrange,
    width: "50%",
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  unSelected: {
    backgroundColor: theme.colors.transparent,
    width: "50%",
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedText: {
    ...theme.fonts.arialBold14,
    color: theme.colors.white,
  },
  unSelectedText: {
    ...theme.fonts.arialBold14,
    color: theme.colors.sunsetOrange,
  },
});

export const LoginToggleButton: FunctionComponent<Props> = ({
  isSelected,
  setIsSelected,
}) => {
  const changingToggle = () => {
    if (isSelected === LoginState.LOGIN) {
      setIsSelected(LoginState.SIGNUP);
    } else {
      setIsSelected(LoginState.LOGIN);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={
          isSelected === LoginState.LOGIN ? styles.selected : styles.unSelected
        }
      >
        <TouchableOpacity onPress={changingToggle}>
          <Text
            style={
              isSelected === LoginState.LOGIN
                ? styles.selectedText
                : styles.unSelectedText
            }
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={
          isSelected === LoginState.SIGNUP ? styles.selected : styles.unSelected
        }
      >
        <TouchableOpacity onPress={changingToggle}>
          <Text
            style={
              isSelected === LoginState.SIGNUP
                ? styles.selectedText
                : styles.unSelectedText
            }
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
