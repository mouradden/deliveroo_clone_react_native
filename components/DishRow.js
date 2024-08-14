import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity';
import {PlusCircleIcon, MinusCircleIcon} from 'react-native-heroicons/outline/'
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../features/basketSlice';

const DishRow = ({ id, name, description, price, image}) => {
    const [isPressed, setIsPressed] = useState(false);
    const items = useSelector((state) => selectBasketItemsWithId(state, id));
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }));
    }
    const removeItemFromBasket = () => {
        if (!items.length) return;
        dispatch(removeFromBasket({ id }));
    }
  return (
    <>
        <TouchableOpacity
            onPress={()=>{setIsPressed(!isPressed)}}
            className=' '
        >
            <View key={id} className='flex-row p-4 bg-white'>
                <View className='flex-1 space-y-2'>
                    <Text className='text-xl capitalize '>{name}</Text>
                    <Text className='text-gray-400'>{description}</Text>
                    <Text className='text-gray-500'>{price} MAD</Text>
                </View>
                <View >
                    <Image 
                        source={{ uri: urlFor(image).url() }}
                        className='w-20 h-20 p-4 ml-2 border border-black-200 '
                    />
                </View>
            </View>
        </TouchableOpacity>
        {
            isPressed && (
                <View className='flex-row bg-white space-x-4 items-center p-2'>
                    <TouchableOpacity
                        disabled={!items.length}
                        onPress={()=>{removeItemFromBasket()}}
                    >
                        <MinusCircleIcon color="white" fill={items.length > 0 ? "#00CCBB" : "gray"} size={40}/>
                    </TouchableOpacity>

                    <Text className='text-lg'>{items.length}</Text>
                    
                    <TouchableOpacity
                        onPress={()=>{addItemToBasket()}}
                    >
                        <PlusCircleIcon color="white" fill="#00CCBB"  size={40}/>
                    </TouchableOpacity>
                </View>
            )
        }
    </>
  )
}

export default DishRow