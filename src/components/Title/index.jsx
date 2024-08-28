import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from "./styles"

const Title = ({ title }) => {
    const navigation = useNavigation();
  return (
         <Text style={styles.title}>{title}</Text>
  )
}

export default Title