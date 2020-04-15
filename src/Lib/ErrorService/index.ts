import { DeviceEventEmitter } from "react-native";

export interface ErrorModalInput {
  title?: string;
  message?: string;
}

export const ErrorService = {
  showErrorModal: (errorModalInput?: ErrorModalInput) => {
    DeviceEventEmitter.emit("showErrorModal", errorModalInput);
  },
};
