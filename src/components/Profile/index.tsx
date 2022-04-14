import React from 'react';
import { Text, View } from "react-native";
import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>

      <Avatar urlImage="http://github.com/markus-del.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
          <Text style={styles.username}>
            Marcos
          </Text>
        </View>

        <Text style={styles.message}> 
          Hoje é dia de derrota
        </Text>
      </View>
    </View>
  )
}