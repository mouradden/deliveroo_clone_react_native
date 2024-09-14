import { View, Text, Button, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {UserIcon, AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline/'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import { useState, useEffect } from "react";
import  sanityClient  from "../sanity";


// `
//   *[_type == "featured"] {
//     ...,
//     restaurants[]->{
//       ...,
//       dishes[]->
//     }
//   }
// `
function HomeScreen() {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(()=>{
    sanityClient.fetch(
      `
      *[_type == "featured"] {
           ...,
           restaurants[]->{
             ...,
             dishes[]->
           }
         }
      `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);
  // featuredCategories.map((category => console.log("category name : " +category.name)));
    return (
      <SafeAreaView className='pt-4'>
        <View className='bg-white flex flex-row items-center justify-between'>

          <View className='flex-row mx-4 items-center pb-3 space-x-2'>
            <Image 
              className='w-8 h-8 bg-gray-400 rounded-full p-4'
              source={{uri: 'https://links.papareact.com/wru'}}
            />
            <View className='flex-col'>
              <Text className='text-xs'>Deliver Now!</Text>
              <Text className='text-xl flex-row'>
                Current Location
                <ChevronDownIcon color="#00CCBB" fill="white" size={20}/>
              </Text>
            </View>
          </View>
          <View className='pr-3'>
            <UserIcon color="#00CCBB" fill="white" size={30}/>
          </View>
        </View> 

      {/* Search area */}
      <View className='bg-white flex-row items-center px-4 pb-2 space-x-2'>
        <View className='flex-row space-x-4 bg-gray-200 p-3 flex-1 rounded'>
            <MagnifyingGlassIcon color="#black" size={20}/>
          <TextInput placeholder="healthy food" className='flex-1' />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" fill="white" size={25}/>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingTop: 10, paddingButtom: 10  }}
      >
        {/* categories */}
        <ScrollView 
          className='bg-gray-100 px-2'
          contentContainerStyle={{paddingBottom:10}}
        >
          <Categories />
        </ScrollView>

        {/* FeaturedRow */}
        <View className='flex-col px-4'>
          {
            featuredCategories?.map((category) =>(
              <FeaturedRow 
                key={category._id} 
                id={category._id} 
                title={category.name} 
                description={category.short_description} 
                /> 
              
            ))
          }
        
        </View>
        </ScrollView>
      </SafeAreaView>
    )
}

export default HomeScreen










