import React from "react";
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { theme } from "../../theme";

interface Props {
  style?: StyleProp<ViewStyle>;
  color: string;
  name: string | null;
  onPress: () => void;
}

interface Styles {
  container: ViewStyle;
  text: TextStyle;
  shadowContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    borderRadius: theme.gridUnit,
    overflow: "hidden",
    alignItems: "center",
  },
  shadowContainer: {
    ...theme.shadow,
    shadowRadius: 10,
    borderRadius: theme.gridUnit,
    width: "50%",
  },
  text: {
    ...theme.fonts.helveticaBold14,
    color: theme.colors.white,
    marginVertical: 1.5 * theme.gridUnit,
    marginHorizontal: 0.5 * theme.gridUnit,
    textAlign: "center",
  },
});

export const ListCard = ({ style, name, onPress, color }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.shadowContainer, style, { backgroundColor: color }]}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};
