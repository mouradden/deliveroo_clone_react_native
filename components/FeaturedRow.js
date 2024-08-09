import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import {ArrowRightIcon} from 'react-native-heroicons/outline/'
import RestaurantCard from './RestaurantCard'
import  sanityClient  from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        sanityClient.fetch(
            `
            *[_type == "featured" && _id == $id] {
                ...,
                restaurants[]->{
                  ...,
                  dishes[]->,
                  type-> {
                    name
                  }
                },
              }[0]
            `,
            { id }
            ).then((data) => {
                setRestaurants(data?.restaurants);
              });
    }, []);


  return (
    <View className='pb-2'>
        <View className='flex-row'>
            <Text className='text-lg font-bold flex-1'>{title}</Text>
            <ArrowRightIcon color="#00CCBB"/>
        </View>
        <Text className='text-xs text-gray-400'>{description}</Text>
        <ScrollView
           horizontal
           contentContainerStyle={{ paddingTop: 10 }}
           showsHorizontalScrollIndicator={false}
           className='flex-row'
        >
          {
            restaurants?.map((restaurant) =>  
                <RestaurantCard 
                    key={restaurant._id}
                    imgUrl={restaurant.image}
                    title={restaurant.name}
                    rating={restaurant.rating}
                    genre={restaurant.type?.name}
                    address={restaurant.address}
                    short_description={restaurant.short_description}
                    dishes={restaurant.dishes}
                />
            ) 
          }
        </ScrollView>
    </View>
  )
}

export default FeaturedRow