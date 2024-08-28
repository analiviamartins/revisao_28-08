import { View, Image, Text } from 'react-native'
import React from 'react'
import MyButton from "../../components/MyButton/index"
import Title from "../../components/Title/index"
import styles from "./styles"

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title={"Soso & Nana"} />
      <View>
        <View>
          <Image
            style={styles.image}
            source={require('../../../assets/images/soso.jpg')}
          />
        </View>
        <Text>Sophia Marcondes</Text>
        <Text>17 anos</Text>
        <Text style={styles.question}>Filme favorito:</Text>
        <MyButton screen={"Filme"} name={"Como treinar o seu dragão"} />
        <Text style={styles.question}>Hobby favorito:</Text>
        <MyButton screen={"Hobby"} name={"Fazer tecido Acrobático"} />
      </View>
      <View>
        <View>
          <Image
            style={styles.image}
            source={require('../../../assets/images/ana.jpg')}
          />
        </View>
        <Text>Ana Lívia Martins</Text>
        <Text>17 anos</Text>
        <Text style={styles.question}>Filme favorito:</Text>
        <MyButton screen={"Filmes"} name={"É assim que acaba"} />
        <Text style={styles.question}>Hobby favorito:</Text>
        <MyButton screen={"Hobbys"} name={"Ler"} />
      </View>
    </View>
  )
}