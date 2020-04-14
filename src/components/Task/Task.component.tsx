import { theme } from "../../theme";
import React, { FunctionComponent, useState } from "react";
import {
  StyleSheet,
  Text,
  ViewStyle,
  View,
  TextInput,
  Platform,
  Switch,
  TextStyle,
} from "react-native";
import { Button } from "../Button/Button";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useTask } from "./useTask";
import Icon from "react-native-vector-icons/FontAwesome";
import CheckBox from "react-native-check-box";
import { ModifyTask } from "../ModifyTask/ModifyTask.component";

interface Styles {
  container: ViewStyle;
  checkBox: ViewStyle;
  checkBoxAndText: ViewStyle;
  text: TextStyle;
}

interface Props {
  text: string;
  date?: Date | undefined;
  isDone?: boolean;
  importance?: number | undefined;
  setText: (text: string) => void;
  setImportance: (importance: number) => void;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderColor: theme.colors.silver,
    margin: theme.gridUnit,
    height: 50,
    width: "95%",
  },
  checkBox: {
    margin: theme.gridUnit,
  },
  checkBoxAndText: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  text: { ...theme.fonts.arialBold14 },
});

export const Task: FunctionComponent<Props> = ({
  text,
  setText,
  date = undefined,
  isDone = false,
  importance,
  setImportance,
}: Props) => {
  const {
    setColor,
    isModalVisible,
    setModalIsVisible,
    toggleModalVisibility,
  } = useTask();

  return (
    <>
      <TouchableHighlight
        onLongPress={toggleModalVisibility}
        activeOpacity={0.1}
        underlayColor={theme.colors.white}
      >
        <View style={styles.container}>
          <View style={styles.checkBoxAndText}>
            <CheckBox isChecked={isDone} style={styles.checkBox} />
            <TextInput value={text} style={styles.text} />
            {date == undefined ? <Text>{date}</Text> : null}
          </View>

          <Icon name="flag" color={setColor(importance)} size={17} />
        </View>
      </TouchableHighlight>
      <ModifyTask
        onClose={toggleModalVisibility}
        isVisible={isModalVisible}
        onValidate={toggleModalVisibility}
        importance={importance}
        taskName={text}
        setTaskName={setText}
      />
    </>
  );
};
