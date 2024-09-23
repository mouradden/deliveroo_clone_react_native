import { View, Text, Image, TouchableOpacity } from 'react-native'
import {StarIcon, MapPinIcon} from 'react-native-heroicons/outline/'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes
}) => {
    const navigation = useNavigation();
    // console.log("dishes:" +dishes);
  return (
    <TouchableOpacity 
        onPress={() => {
            navigation.navigate("Restaurant", {
                id,
                imgUrl,
                title,
                rating,
                genre,
                address,
                short_description,
                dishes,
            });
        }}
        className='mr-2 bg-white' 
        key={id}

        >
        <View className=''>
            <Image 
            source={{ uri: urlFor(imgUrl).url() }}
            className='h-32 w-48 rounded '
            />
        </View>
    <View className='p-2'>
        <Text className='text-lg font-bold'>{title}</Text>
        <View className='flex-row space-x-2 items-center'>
            <StarIcon size={22} fill="#00CCBB"/>
            <Text className='text-green-400'>{rating}</Text>
            <Text className='text-gray-400'>*</Text>
            <Text className='text-gray-400'>{genre}</Text>
        </View>
        <View className='flex-row items-center space-x-2 text-gray-500'>
            <MapPinIcon />
            <Text className='text-gray-400 w-32'>{address}</Text>
        </View>
    </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard