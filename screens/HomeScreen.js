import { View, Text, FlatList, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {UserIcon, AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline/'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import SearchItem from '../components/SearchItem'
import { useState, useEffect } from "react";
import  sanityClient  from "../sanity";



function HomeScreen() {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [queryLength, setQueryLength] = useState(0);
  const [restaurants, setRestaurants] = useState([]);
  const [RestaurantName, setRestaurantName] = useState("");
  let dynamicHeight = 24;
  useEffect(() => {
    if (RestaurantName) {
      sanityClient
        .fetch(
          `
          *[_type == "restaurant" && dishes[]->name match $name] {
            ...,
            dishes[]->{
              ...,
            }
          }
          `,
          { name: `*${RestaurantName}*` }
        )
        .then((data) => {
          setRestaurants(data);
          dynamicHeight = restaurants.length > 2 ? 32 : restaurants.length * 16;
          // console.log("res : " +JSON.stringify(restaurants));
          // console.log("height : " +dynamicHeight);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  }, [RestaurantName]);
  // console.log("restaurants : "+JSON.stringify(restaurants, null, 2));
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
  const [showResults, setShowResults] = useState(false);
  const handlePressOutside = () => {
    setShowResults(false);
    Keyboard.dismiss();
  };
    return (
      <SafeAreaView className='pt-4'>
        {/* <TouchableWithoutFeedback > */}
        <View className='bg-white flex flex-row items-center justify-between pt-2'  onPress={handlePressOutside}>

          <View className='flex-row mx-4 items-center pb-3 space-x-2'>
            <Image 
              className='w-10 h-10 bg-gray-400 rounded-full p-4'
              source={{uri: 'https://links.papareact.com/wru'}}
            />
            <View className='flex-col'>
              <Text className='text-xs'>Deliver Now!</Text>
              <Text className='text-xl flex-row font-bold space-x-4'>
                Current Location
                <ChevronDownIcon color="#00CCBB" fill="white" size={20}/>
              </Text>
            </View>
          </View>
          <TouchableOpacity className='pr-3'>
            <UserIcon color="#00CCBB" fill="white" size={30}/>
          </TouchableOpacity>
        </View> 

      {/* Search area */}
      <View className=''>
        <View className='bg-white flex-row items-center px-4 pb-2 space-x-2'>
          <View className='flex-row space-x-4 bg-gray-200 p-3 flex-1 rounded'>
              <MagnifyingGlassIcon color="#black" size={20}/>
              {/* <View className='flex-col top-10 w-80'> */}
                <TextInput placeholder="healthy food" className='flex-1' 
                  onChangeText={(text)=>{
                    setRestaurantName(text);
                    setQueryLength(text.length);
                    setShowResults(text.length > 0);
                  }}
                />
              {/* </View> */}
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" fill="white" size={25}/>
        </View>
              {
                showResults && queryLength > 0 && 
              <View className='border left-4 mr-16 rounded' style={[{ height: dynamicHeight+'px' }]}>
                  <FlatList
                    data={restaurants}
                    renderItem={({item}) => <SearchItem key={item.key} restaurant={item} />}
                    keyExtractor={item => item.id}
                  />
              </View>
              }
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
        {/* </TouchableWithoutFeedback> */}
      </SafeAreaView>
    )
}

export default HomeScreen










