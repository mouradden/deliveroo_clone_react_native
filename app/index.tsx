
import { Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen'
import RestaurantScreen from '../screens/RestaurantScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withExpoSnack } from 'nativewind';

const Stack = createNativeStackNavigator();
function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
export default withExpoSnack(Index);
