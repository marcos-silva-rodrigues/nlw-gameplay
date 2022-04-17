import { TextInputProps, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

export function SmallInput(props: TextInputProps) {
  return <TextInput keyboardType="numeric" {...props} style={styles.container} />;
}
