import { View, Text, ScrollView } from 'react-native';
import CardCategory from './CardCategory';
import { useState, useEffect } from "react";
import sanityClient from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      sanityClient.fetch(
        `
        *[_type == "category"]
        `
      ).then((data) => {
        setCategories(data);
      })
  }, [])

  return (
    <ScrollView 
        horizontal
        contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 10 }}
        showsHorizontalScrollIndicator={false}
        
    >
      {
        categories?.map((category) => (
          <CardCategory key={category._id} imgUrl={category.image} title={category.name} />
          
        ))

      }
    </ScrollView>
  );
};

export default Categories;
