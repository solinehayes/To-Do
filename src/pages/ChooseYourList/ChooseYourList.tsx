import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View, ViewStyle, TextStyle } from "react-native";
import { RoundButton } from "../../components/roundButton/roundButton";
import { theme } from "../../theme";
import { CreateList, ListColors } from "../../components/createList/CreateList";
import { ListCard } from "../../components/ListCard/ListCard";
import { useLists } from "../../db/lists/useLists";
import { ErrorService } from "../../Lib/ErrorService/index";
import { startLoading, LoadingStatusKey, finishLoading } from "../../modules/LoadingStatus/actions";
import { userIdSelector } from "../../modules/User/selector/selector";
import { useSelector } from "react-redux";


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
  const {createList} = useLists();
  const userId = useSelector(userIdSelector);
  const [isModalVisible, setModalIsVisible] = useState<boolean>(false);
  const toggleModalVisibility = () => {
    setModalIsVisible(!isModalVisible);
  };
  const saveNewList = async  (name:string,color: ListColors)=>{
    let savedSuccessfully = true;
    try{
      startLoading(LoadingStatusKey.CREATE_LIST)
      await createList(name,color, userId);
    }
    catch(error){
      console.log(error)
      ErrorService.showErrorModal();
      savedSuccessfully = false;
    }
    finally{
      finishLoading(LoadingStatusKey.CREATE_LIST);
      if (savedSuccessfully) toggleModalVisibility();
    }
  }



  return (
    <>
      <View style={styles.topContainer}>
        <ListCard
          name={"List A"}
          color={ListColors.BLUE}
          onPress={() => navigation.navigate("Tasks")}
          style={styles.listCard}
        />
        <ListCard
          name={"List B"}
          color={ListColors.ORANGE}
          onPress={() => navigation.navigate("Tasks")}
          style={styles.listCard}
        />
        <ListCard
          name={"List C"}
          color={ListColors.PINK}
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
        onValidate={saveNewList}
      />
    </>
  );
};
