import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../Page/Home';
import { Detail} from '../Page/Detail'

const Stack = createNativeStackNavigator();


export function AppRoutes(){
    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Detail" component={Detail}/>
    </Stack.Navigator>
}