import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../Page/Home';
import { Detail} from '../Page/Detail'
import { Cart} from '../Page/Cart'

const Stack = createNativeStackNavigator();


export function AppRoutes(){
    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Detail" component={Detail}/>
        <Stack.Screen name="Cart" component={Cart}/>
    </Stack.Navigator>
}