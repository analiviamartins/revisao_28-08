import { TouchableOpacity } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'
import ButtonTitle from "../../components/ButtonTitle/Index"

const MyButton = ({ screen, name }) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity  onPress={ () => navigation.navigate(screen)}> 
      <ButtonTitle buttonTitle= {name}/>
    </TouchableOpacity>
  )
}

export default MyButton