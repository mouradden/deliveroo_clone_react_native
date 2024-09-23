import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {StarIcon} from 'react-native-heroicons/outline/'
import { useNavigation } from "@react-navigation/native";

const SearchItem = ({key, restaurant}) => {   
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity 
            key={restaurant._id} 
            className='flex-row items-center p-3 bg-gray-200 m-1 rounded'
            onPress={() => {
                navigation.navigate("Restaurant", {
                    key: restaurant._id,
                    imgUrl: restaurant.image,
                    title: restaurant.name,
                    rating: restaurant.rating,
                    genre: restaurant.type?.name,
                    address: restaurant.address,
                    short_description: restaurant.short_description,
                    dishes: restaurant.dishes,
                });
                
            }}
            >
        <Text className='flex-1 font-bold text-md'>{restaurant?.name}</Text>
        <View className='flex-row space-x-2 items-center bg-gray-200 rounded p-2'>
            <Text className='text-md font-bold text-green-600'>{restaurant.rating}</Text>
            <StarIcon size={16} color='green' fill="green"/>
        </View>
        </TouchableOpacity>
    );
}


export default SearchItem