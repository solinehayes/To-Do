import { theme } from "../../theme";
import React, { FunctionComponent, useState } from "react";
import {
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  View,
  Modal,
  TextInput,
  Picker,
  Slider,
} from "react-native";
import { Button } from "../Button/Button";

interface Styles {
  modal: ViewStyle;
  headerText: TextStyle;
  textInput: ViewStyle;
  labelText: TextStyle;
  buttonView: ViewStyle;
  form: ViewStyle;
  sliderInput: ViewStyle;
}

interface Props {
  isVisible: boolean;
  onClose: () => void;
  setIsVisible?: (boolean) => void;
  onValidate: () => void;
  taskName?: string;
}

const styles = StyleSheet.create<Styles>({
  modal: {
    flex: 1,
    ...theme.shadow,
    margin: 2 * theme.gridUnit,
    backgroundColor: theme.colors.white,
    borderRadius: theme.gridUnit,
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
  sliderInput: {
    margin: 2 * theme.gridUnit,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 2 * theme.gridUnit,
  },
  form: {
    flex: 1,
  },
});

export const ModifyTask: FunctionComponent<Props> = ({
  onClose,
  isVisible,
  onValidate,
  taskName = "",
}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {}}
    >
      <View style={styles.modal}>
        <Text style={styles.headerText}>Edit task</Text>
        <View style={styles.form}>
          <View style={styles.textInput}>
            <Text style={styles.labelText}>Task</Text>
            <TextInput placeholder={"Task name"} value={taskName} />
          </View>
          <View style={styles.sliderInput}>
            <Text style={styles.labelText}>Importance</Text>
            <Slider
              step={0.1}
              minimumTrackTintColor={theme.colors.sunsetOrange}
            />
          </View>
        </View>
        <View style={styles.buttonView}>
          <Button text={"Cancel"} onPress={onClose} />
          <Button text={"Save"} onPress={onValidate} />
        </View>
      </View>
    </Modal>
  );
};
