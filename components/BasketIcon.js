import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'

const BasketIcon = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length == 0)  return null;
  
  return (
    <View className='absolute bottom-10 w-full items-center'>
        <TouchableOpacity 
          className='flex-row justify-around mb-8 rounded items-center w-80 h-16 bg-[#00CCBB]'
          onPress={()=>{
            navigation.navigate("Basket");
          }}  
        >
            <Text className='text-lg text-white font-bold p-2 bg-[#01a296]'>
            {items.length}
            </Text>
            <Text className='text-lg text-white font-bold'>
            View Basket
            </Text>
            <Text className='text-lg text-white font-bold'>
            {basketTotal}
            </Text>
        </TouchableOpacity>
    </View>

  )
}

export default BasketIcon