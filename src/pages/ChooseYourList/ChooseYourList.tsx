import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View, ViewStyle, TextStyle } from "react-native";
import { RoundButton } from "../../components/roundButton/roundButton";
import { theme } from "../../theme";
import { CreateList } from "../../components/createList/CreateList";
import { ListCard } from "../../components/ListCard/ListCard";

interface Styles {
  topContainer: ViewStyle;
  plusButton: TextStyle;
  buttonContainer: ViewStyle;
  listCard: ViewStyle;
}
interface Props {
  navigation: any;
}

const styles = StyleSheet.create<Styles>({
  topContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
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
export const ChooseYourList: FunctionComponent<Props> = ({ navigation }) => {
  const [isModalVisible, setModalIsVisible] = useState<boolean>(false);
  const toggleModalVisibility = () => {
    setModalIsVisible(!isModalVisible);
  };
  return (
    <>
      <View style={styles.topContainer}>
        <ListCard
          name={"List A"}
          color={theme.colors.caribbeanGreen}
          onPress={() => navigation.navigate("Tasks")}
          style={styles.listCard}
        />
        <ListCard
          name={"List A"}
          color={theme.colors.caribbeanGreen}
          onPress={() => navigation.navigate("Tasks")}
          style={styles.listCard}
        />
        <ListCard
          name={"List A"}
          color={theme.colors.caribbeanGreen}
          onPress={() => navigation.navigate("Tasks")}
          style={styles.listCard}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RoundButton icon="bars" onPress={() => {}} style={styles.plusButton} />
        <RoundButton
          icon="plus"
          onPress={toggleModalVisibility}
          style={styles.plusButton}
        />
      </View>
      <CreateList
        onClose={toggleModalVisibility}
        isVisible={isModalVisible}
        onValidate={toggleModalVisibility}
      />
    </>
  );
};
