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
import { SafeAreaView } from "react-navigation";

interface Styles {
  container: ViewStyle;
  textInput: ViewStyle;
  labelText: TextStyle;
  headerText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: theme.gridUnit,
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
});

export const Login: FunctionComponent = () => {
  const {
    isSelected,
    setIsSelected,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    signup,
    login,
    isLoginLoading,
    isSignUpLoading,
  } = useLogin();
  return (
    <SafeAreaView style={styles.container}>
      <LoginToggleButton
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
      {isSelected === LoginState.LOGIN ? (
        <>
          <View style={styles.textInput}>
            <Text style={styles.labelText}>Email Address</Text>
            <TextInput
              placeholder={"Enter your email"}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.labelText}>Password</Text>
            <TextInput
              textContentType="password"
              placeholder={"Enter your password"}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <BottomFullWidthButton
            text="Login"
            onPress={() => login(email, password)}
            isLoading={isLoginLoading}
            isDisabled={!password || !email}
          />
        </>
      ) : (
        <>
          <View style={styles.textInput}>
            <Text style={styles.labelText}>Username</Text>
            <TextInput
              placeholder={"Enter your username"}
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.labelText}>Email Address</Text>
            <TextInput
              placeholder={"Enter your email"}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.labelText}>Password</Text>
            <TextInput
              textContentType="password"
              placeholder={"Enter your password"}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <BottomFullWidthButton
            text="Sign up"
            onPress={() => signup(email, password, username)}
            isLoading={isSignUpLoading}
            isDisabled={!password || !email || !username}
          />
        </>
      )}
    </SafeAreaView>
  );
};
