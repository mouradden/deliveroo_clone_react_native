import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native'
import { selectBasketItems, selectBasketTotal } from '@/features/basketSlice'
import { useDispatch, useSelector } from 'react-redux'
import { XCircleIcon } from 'react-native-heroicons/outline/'
import { useNavigation } from '@react-navigation/native'
import { setRestaurant } from '@/features/restaurantSlice'
import { useEffect, useState } from 'react'
import { selectRestaurant } from '../features/restaurantSlice'
import { urlFor } from '../sanity'


const BasketScreen = () => {
    const navigation = useNavigation();
    const items = useSelector(selectBasketItems);
    const restaurant = useSelector(selectRestaurant);
    const dispatch = useDispatch();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

    useEffect(() => {
        const groupedItems = items.reduce((results, item)=>{
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});

        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    console.log(groupedItemsInBasket);
  return (
    <SafeAreaView>
        <View className='p-2 items-center flex-row bg-white'>
            <View className='flex-1 items-center'>
                <Text className='text-xl font-bold'>Basket</Text>
                <Text className='text-gray-400 p-2'>{restaurant.title}</Text>
            </View>
            <TouchableOpacity className=''
                onPress={navigation.goBack}
            >
                <XCircleIcon size={48} color="white" fill="#00CCBB"/>
            </TouchableOpacity>
        </View>
        <View className='bg-white my-2 p-4 flex-row items-center space-x-4'>
            <View className='flex-row items-center space-x-6 flex-1'>
                <Image 
                    className='w-8 h-8 bg-gray-400 rounded-full p-4'
                    source={{uri: 'https://links.papareact.com/wru'}}
                />
                <Text>Deliver in 25-35 minutes</Text>
            </View>
            <Text className='text-[#00CCBB]'>Change</Text>
        </View>
        <ScrollView>
            {
                Object.entries(groupedItemsInBasket).map(([key, items]) => (
                    <View 
                        key={key}
                        className='p-4 mt-2 bg-white px-6 flex-row items-center space-x-6'    
                    >
                        <View className='flex-row items-center space-x-4 flex-1 '>
                            <Text style={{ whiteSpace: 'nowrap' }}>{items.length} x</Text>
                            <Image 
                                source={{ uri: urlFor(items[0]?.image).url() }}
                                className='w-11 h-11 border border-black rounded-full'
                            />
                            <Text className='capitalize font-bold'>{items[0]?.name}</Text>
                        </View>
                        
                            <Text>{items[0]?.price} MAD</Text>
                            <Text className='text-[#00CCBB]'>Remove</Text>
                    </View>
                ))
            }
        </ScrollView>

    </SafeAreaView>
  )
}

export default BasketScreen