import { useEffect, useState } from "react";
import { DeviceEventEmitter } from "react-native";
import { ErrorModalInput } from "../../lib/ErrorService";

const DEFAULT_TITLE = "";
const DEFAULT_MESSAGE = "An error has occurred, please try again later.";

export const useErrorModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const showModal = (title: string, message: string): void => {
    setTitle(title);
    setMessage(message);
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };
  const listener = ({ title, message }: ErrorModalInput = {}): void => {
    showModal(title || DEFAULT_TITLE, message || DEFAULT_MESSAGE);
  };

  useEffect(() => {
    DeviceEventEmitter.addListener("showErrorModal", listener);

    return () => {
      DeviceEventEmitter.removeListener("showErrorModal", listener);
    };
  }, []);

  return { isVisible, closeModal, title, message };
};
