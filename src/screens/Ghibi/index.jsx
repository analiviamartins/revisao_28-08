import { View, Text } from 'react-native'
import React from 'react'
import MyButton from "../../components/MyButton/index"
import Title from "../../components/Title/index"
import styles from "./styles"

export default function Guibi() {
  return (
    <View style={styles.container}>
      <Title title={"Guibi screen"}/>

      <MyButton screen= {"Home"} name={"go to Home"}/>
      <MyButton screen= {"Totoro"} name={"go to totoro"}/>
    </View>
  )
}