import { View, Text } from 'react-native'
import React from 'react'
import MyButton from "../../components/MyButton/index"
import Title from "../../components/Title/index"
import styles from "./styles"

export default function Totoro() {
  return (
    <View style={styles.container}>
      <Title title={"Totoro screen"}/>
      <MyButton screen= {"Home"} name= {"Back to Home"}/>
    </View>
  )
}