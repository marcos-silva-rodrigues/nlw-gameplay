import React from "react";
import { Image, Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

type ButtonnProps = RectButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: ButtonnProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
