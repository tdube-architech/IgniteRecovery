import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'teamCategory',
  title: 'Team Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      description: 'e.g., Leadership, Clinical Team, Recovery Coaches',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to sort the categories on the page. Lower numbers appear first.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
