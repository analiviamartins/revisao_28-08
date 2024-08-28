import { Text } from 'react-native'
import styles from "./styles"

const ButtonTitle = ({ buttonTitle }) => {

  return (
         <Text style={styles.buttontitle}>{buttonTitle}</Text>
  )
}

export default ButtonTitle