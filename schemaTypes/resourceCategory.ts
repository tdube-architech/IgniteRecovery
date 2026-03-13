import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'resourceCategory',
  title: 'Resource Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Category Description',
      type: 'text',
      description: 'Optional introductory text for this category (e.g., the paragraph about Naloxone Access).',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order in which categories appear on the page (e.g., 1 for top, 2 for next).',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      order: 'order',
    },
    prepare(selection) {
      const { title, order } = selection;
      return {
        title: title,
        subtitle: `Order: ${order}`,
      };
    },
  },
});
