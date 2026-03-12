import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'insuranceProvider',
  title: 'Insurance Provider',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Insurance Provider Name',
      type: 'string',
      description: 'The name of the accepted insurance provider.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to sort the providers in the dropdown list.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
