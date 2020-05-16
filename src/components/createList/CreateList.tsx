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
import { useSafeArea } from "react-native-safe-area-context";

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
export enum ListColors {
  GREEN = "Green",
  YELLOW ="Yellow",
  BLUE = 'Blue',
  PINK = "Pink",
  ORANGE = "Orange",
}
const listColorToThemeColor ={
  [ListColors.GREEN]: theme.colors.caribbeanGreen,
  [ListColors.YELLOW]: theme.colors.brightSun,
  [ListColors.BLUE]: theme.colors.dodgerBlue,
  [ListColors.PINK]: theme.colors.pinkFlamingo,
  [ListColors.ORANGE]: theme.colors.koromiko,
}

const styles = StyleSheet.create<Styles>({
  modal: {
    flex: 1,
    ...theme.shadow,
    marginHorizontal: 2 * theme.gridUnit,
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
  const inset = useSafeArea();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {}}
    >
      <View
        style={[
          styles.modal,
          {
            marginTop: theme.gridUnit + inset.top,
            marginBottom: theme.gridUnit + inset.bottom,
          },
        ]}
      >
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
              <Picker.Item label={ListColors.GREEN} value={listColorToThemeColor[ListColors.GREEN]} />
              <Picker.Item label={ListColors.BLUE} value={listColorToThemeColor[ListColors.BLUE]} />
              <Picker.Item label={ListColors.PINK} value={listColorToThemeColor[ListColors.PINK]} />
              <Picker.Item label={ListColors.YELLOW} value={listColorToThemeColor[ListColors.YELLOW]} />
              <Picker.Item label={ListColors.ORANGE} value={listColorToThemeColor[ListColors.ORANGE]} />
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
