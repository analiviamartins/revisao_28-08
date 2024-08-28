import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MyButton from "../../components/MyButton/index"
import Title from "../../components/Title/index"
import styles from "./styles"



export default function Hobby() {
  return (
    <View style={styles.container}>
      <Title title={"Fazer tecido acrobático"} />
      <MyButton screen={"Home"} name={"go to Home"} />
    </View>
  )
}