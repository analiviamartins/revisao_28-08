import { View, Text } from 'react-native'
import React from 'react'
import MyButton from "../../components/MyButton/index"
import Title from "../../components/Title/index"
import styles from "./styles"

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title={"Home screen"}/>

      <MyButton screen= {"Totoro"} name={"go to totoro"}/>
      <MyButton screen= {"Guibi"} name={"go to Guibi"}/>
    </View>
  )
}