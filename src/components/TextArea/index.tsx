import { TextInputProps, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

export function TextArea(props: TextInputProps) {
  return <TextInput {...props} style={styles.container} />;
}
