import React, { FunctionComponent, useState } from "react";
import {
  StyleSheet,
  View,
  ViewStyle,
  TextStyle,
  ScrollView,
} from "react-native";
import { RoundButton } from "../../components/roundButton/roundButton";
import { theme } from "../../theme";
import { Task } from "../../components/Task/Task.component";

interface Styles {
  topContainer: ViewStyle;
  plusButton: TextStyle;
  buttonContainer: ViewStyle;
  listCard: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  topContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  plusButton: {
    margin: 3 * theme.gridUnit,
  },
  listCard: {
    margin: theme.gridUnit,
  },
});
export const Tasks: FunctionComponent = () => {
  const [isModalVisible, setModalIsVisible] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>("testtest");
  const [importance, setImportance] = useState<number>(0.5);
  const toggleModalVisibility = () => {
    setModalIsVisible(!isModalVisible);
  };
  return (
    <>
      <ScrollView contentContainerStyle={styles.topContainer}>
        <Task
          text={taskName}
          setText={setTaskName}
          setImportance={setImportance}
          importance={importance}
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <RoundButton icon="bars" onPress={() => {}} style={styles.plusButton} />
        <RoundButton
          icon="plus"
          onPress={toggleModalVisibility}
          style={styles.plusButton}
        />
      </View>
    </>
  );
};
