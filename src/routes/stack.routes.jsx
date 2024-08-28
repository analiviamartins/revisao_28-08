import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Filme from "../screens/Filme"
import Filmes from "../screens/Filmes"
import Hobby from "../screens/Hobby"
import Hobbys from "../screens/Hobbys"

const Stack= createNativeStackNavigator();

const StackRoutes = () => { return(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Filme" component={Filme}/>
        <Stack.Screen name="Filmes" component={Filmes}/>
        <Stack.Screen name="Hobby" component={Hobby}/>
        <Stack.Screen name="Hobbys" component={Hobbys}/>
    </Stack.Navigator>
)}

export default StackRoutes;