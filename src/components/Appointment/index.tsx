import React from "react";
import { Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";
import { styles } from "./styles";
import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
  id: string,
  name: string;
  owner: boolean;
  icon: null | string,
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner, name: guildName } = data.guild;
  const { primary, on } = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{guildName}</Text>

            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playerInfo}>
              <PlayerSvg fill={owner ? primary : on} />
              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {owner ? "Anfritrião" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
