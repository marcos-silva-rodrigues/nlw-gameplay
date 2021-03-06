import { Inter_500Medium } from "@expo-google-fonts/inter";
import React from "react";
import { FlatList, View } from "react-native";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { styles } from "./styles";

type Props ={
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
      {
        id: '1',
        name: 'Lendários',
        icon: 'image.png',
        owner: true,
      },
      {
        id: '3',
        name: 'Lendários',
        icon: 'image.png',
        owner: true,
      }
    ]
  
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 69, paddingTop: 103 }}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        style={styles.guilds}
      />
    </View>
  );
}