import { FunctionComponent } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ViewStyle,
  TextStyle,
} from "react-native";
import { BottomFullWidthButton } from "../../components/BottomFullWidthButton/BottomFullWidthButton";
import { theme } from "../../theme";
import React from "react";
import { LoginToggleButton } from "./components/toggleLoginButton";
import { useLogin, LoginState } from "./useLogin";

interface Styles {
  container: ViewStyle;
  textInput: ViewStyle;
  labelText: TextStyle;
  headerText: TextStyle;
  button: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  headerText: {
    textAlign: "center",
    ...theme.fonts.arialBold20,
    margin: 2 * theme.gridUnit,
  },
  labelText: {
    ...theme.fonts.helvetica14,
    marginBottom: theme.gridUnit,
  },
  textInput: {
    borderBottomColor: theme.colors.silver,
    borderBottomWidth: 1,
    margin: 2 * theme.gridUnit,
  },
  button: {
    textAlign: "center",
    margin: theme.gridUnit,
  },
});

export const Login: FunctionComponent = () => {
  const { isSelected, setIsSelected } = useLogin();
  return (
    <View style={styles.container}>
      <LoginToggleButton
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
      {isSelected === LoginState.LOGIN ? (
        <>
          <View style={styles.textInput}>
            <Text style={styles.labelText}>Email Address</Text>
            <TextInput placeholder={"Enter your email"} />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.labelText}>Password</Text>
            <TextInput
              textContentType="password"
              placeholder={"Enter your password"}
            />
          </View>
          <BottomFullWidthButton
            style={styles.button}
            text="Login"
            onPress={() => {}}
          />
        </>
      ) : (
        <>
          <View style={styles.textInput}>
            <Text style={styles.labelText}>Username</Text>
            <TextInput placeholder={"Enter your username"} />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.labelText}>Email Address</Text>
            <TextInput placeholder={"Enter your email"} />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.labelText}>Password</Text>
            <TextInput
              textContentType="password"
              placeholder={"Enter your password"}
            />
          </View>
          <BottomFullWidthButton
            style={styles.button}
            text="Sign up"
            onPress={() => {}}
          />
        </>
      )}
    </View>
  );
};
