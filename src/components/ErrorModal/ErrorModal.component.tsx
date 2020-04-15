import React, { FunctionComponent } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Modal from "react-native-modal";
import { theme } from "../../theme";
import { useErrorModal } from "./useErrorModal";
import { Button } from "../Button/Button";

interface Styles {
  container: ViewStyle;
  modal: ViewStyle;
  message: TextStyle;
  title: TextStyle;
  confirmationButton: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    marginTop: theme.gridUnit,
    marginHorizontal: theme.gridUnit * 2,
    backgroundColor: theme.colors.white,
    padding: 2 * theme.gridUnit,
    borderRadius: theme.gridUnit,
    ...theme.shadow,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    flex: 1,
    margin: 0,
    justifyContent: "center",
  },
  message: {
    color: theme.colors.red,
  },
  title: {
    ...theme.fonts.arialBold16,
    color: theme.colors.red,
    marginBottom: 2 * theme.gridUnit,
  },
  confirmationButton: {
    marginTop: 3 * theme.gridUnit,
    height: 40,
    minWidth: "60%",
  },
});

const ANIMATION_DELAY = 200;

export const ErrorModal: FunctionComponent = () => {
  const { isVisible, closeModal, title, message } = useErrorModal();

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInDown"
      animationInTiming={ANIMATION_DELAY}
      animationOut="slideOutUp"
      animationOutTiming={ANIMATION_DELAY}
      hasBackdrop={true}
      coverScreen={false}
      style={styles.modal}
    >
      <SafeAreaView>
        <View style={styles.container}>
          {!!title && <Text style={styles.title}>{title}</Text>}
          {!!message && <Text style={styles.message}>{message}</Text>}
          <Button
            style={styles.confirmationButton}
            text="OK"
            onPress={closeModal}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};
