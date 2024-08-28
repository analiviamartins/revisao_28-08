import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'
import styles from "./styles"

export default function Totoro() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Totoro screen</Text>
      <TouchableOpacity onPress={ () => navigation.navigate("Home")}>
        <Text style={styles.text}>Back to Home</Text>
      </TouchableOpacity>'
    </View>
  )
}