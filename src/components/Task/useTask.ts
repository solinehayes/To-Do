import { theme } from "../../theme";
import { useState } from "react";

export const useTask = () => {
  const setColor = (importance) => {
    if (importance) {
      if (importance < 0.2) {
        return theme.colors.yellow;
      } else if (importance < 0.4) {
        return theme.colors.supernova;
      } else if (importance < 0.6) {
        return theme.colors.orangePeel;
      } else if (importance < 0.8) {
        return theme.colors.internationalOrange;
      } else {
        return theme.colors.red;
      }
    } else {
      return theme.colors.transparent;
    }
  };
  const [isModalVisible, setModalIsVisible] = useState<boolean>(false);
  const toggleModalVisibility = () => {
    setModalIsVisible(!isModalVisible);
  };

  return {
    setColor,
    isModalVisible,
    setModalIsVisible,
    toggleModalVisibility,
  };
};
