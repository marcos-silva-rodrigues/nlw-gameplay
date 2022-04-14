import React from 'react';
import { Text, View, Image, StatusBar } from "react-native";
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from "../../components/Profile";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
    </View>
  );
};