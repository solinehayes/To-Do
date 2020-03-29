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
} from "react-native";
import { Button } from "../Button/Button";

interface Styles {
  modal: ViewStyle;
  headerText: TextStyle;
  textInput: ViewStyle;
  labelText: TextStyle;
  buttonView: ViewStyle;
  form: ViewStyle;
}

interface Props {
  isVisible: boolean;
  onClose: () => void;
  setIsVisible?: (boolean) => void;
  onValidate: () => void;
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
    borderBottomColor: theme.colors.narvik,
    borderBottomWidth: 1,
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

export const CreateList: FunctionComponent<Props> = ({
  onClose,
  isVisible,
  onValidate,
}: Props) => {
  const [color, setColor] = useState<string>(theme.colors.caribbeanGreen);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {}}
    >
      <View style={styles.modal}>
        <Text style={styles.headerText}>New list</Text>
        <View style={styles.form}>
          <View style={styles.textInput}>
            <Text style={styles.labelText}>Name</Text>
            <TextInput placeholder={"Name"} />
          </View>
          <View style={styles.textInput}>
            <Text style={styles.labelText}>Color</Text>
            <Picker
              selectedValue={color}
              style={{ height: 3 * theme.gridUnit, width: 100 }}
              onValueChange={(itemValue, itemIndex) => {
                setColor(itemValue);
              }}
            >
              <Picker.Item label="Green" value={theme.colors.caribbeanGreen} />
              <Picker.Item label="Yellow" value={theme.colors.brightSun} />
              <Picker.Item label="Blue" value={theme.colors.dodgerBlue} />
              <Picker.Item label="Pink" value={theme.colors.pinkFlamingo} />
              <Picker.Item label="Orange" value={theme.colors.koromiko} />
            </Picker>
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
