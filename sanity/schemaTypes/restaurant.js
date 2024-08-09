import {defineType} from 'sanity'

export const restaurant = defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
      {
          name: 'name',
          title: 'Restaurant name',
          type: 'string',
          validation: (Rule) => Rule.required(),
      },
      {
          name: 'short_description',
          title: 'Short description',
          type: 'string',
          validation: (Rule) => Rule.max(200),
      },
      {
          name: 'image',
          title: 'image of the Restaurant',
          type: 'image',
      },
      {
          name: 'address',
          title: 'Restaurant address',
          type: 'string',
          validation: (Rule) => Rule.required(),
      },      
      {
          name: 'rating',
          title: 'Enter a Rating from (1-5 stars)',
          type: 'number',
          validation: (Rule) => Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 and 5"),
        },      
        {
            name: 'type',
            title: 'Category',
            validation: (Rule) => Rule.required(),
            type: 'reference',
            to : [{ type: "category"}],
        },
        {
            name: 'dishes',
            title: 'Dishes',
            type: 'array',
            of : [{ type: "reference", to: [{ type: "dish"}]}],
        },

  ],
})