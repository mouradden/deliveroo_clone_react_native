import {defineType} from 'sanity'

export const featured = defineType({
  name: 'featured',
  title: 'Featured Menu categories',
  type: 'document',
  fields: [
      {
          name: 'name',
          title: 'Name of Featured Category',
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
          name: 'restaurants',
          title: 'Restaurants',
          type: 'array',
          of: [{type: "reference", to : [{type: "restaurant"}]}],
      },
  ],
})