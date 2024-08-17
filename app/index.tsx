import HomeScreen from '../screens/HomeScreen'
import BasketScreen from '../screens/BasketScreen'
import RestaurantScreen from '../screens/RestaurantScreen'
import PreparingOrderScreen from '../screens/PreparingOrderScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withExpoSnack } from 'nativewind';
import { Provider } from 'react-redux'
import { store } from '../store'

const Stack = createNativeStackNavigator();
function Index() {
  return (
    <NavigationContainer independent={true}>
      <Provider store={store}>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} options={{ presentation: "modal", headerShown: false}}/>
          <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} options={{ presentation: "fullScreenModal", headerShown: false}}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
    
  );
}
export default withExpoSnack(Index);
