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
import {  useSelector } from "react-redux";
import { isLoadingSelector } from "../../modules/LoadingStatus/selector";
import { LoadingStatusKey } from "../../modules/LoadingStatus/actions";


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
  onValidate: (name:string,color:ListColors) => void;
}
export enum ListColors {
  GREEN = "Green",
  YELLOW ="Yellow",
  BLUE = 'Blue',
  PINK = "Pink",
  ORANGE = "Orange",
}
export const listColorToThemeColor ={
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
  const [color, setColor] = useState<ListColors>(ListColors.GREEN);
  const [listName, setListName] = useState<string>("");
  const inset = useSafeArea();
  const saveIsLoading =useSelector(isLoadingSelector(LoadingStatusKey.CREATE_LIST));
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
            <TextInput placeholder={"Name"} value={listName}
              onChangeText={setListName}/>
          </View>
          <View style={styles.textInput}>
            <Text style={styles.labelText}>Color</Text>
            <Picker
              selectedValue={color}
              style={{ height: 3 * theme.gridUnit, width: 100 }}
              onValueChange={(itemValue) => {
                setColor(itemValue);
              }}
            >
              <Picker.Item label={ListColors.GREEN} value={ListColors.GREEN} />
              <Picker.Item label={ListColors.BLUE} value={ListColors.BLUE} />
              <Picker.Item label={ListColors.PINK} value={ListColors.PINK} />
              <Picker.Item label={ListColors.YELLOW} value={ListColors.YELLOW} />
              <Picker.Item label={ListColors.ORANGE} value={ListColors.ORANGE} />
            </Picker>
          </View>
        </View>
        <View style={styles.buttonView}>
          <Button text={"Cancel"} onPress={onClose} />
          <Button text={"Save"} onPress={() => onValidate(listName, color)} isLoading={saveIsLoading}/>
        </View>
      </View>
    </Modal>
  );
};
