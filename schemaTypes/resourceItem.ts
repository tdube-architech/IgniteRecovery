import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'resourceItem',
  title: 'Resource Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Resource Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "SAMHSA National Helpline"'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'resourceCategory' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Details about the resource (e.g., "free, confidential, 24/7").',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Optional phone number. E.g., "1-800-662-4357"',
    }),
    defineField({
      name: 'url',
      title: 'Website URL',
      type: 'url',
      description: 'Optional website link. Must be a valid URL (e.g., "https://www.samhsa.gov").',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order within the category.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      categoryTitle: 'category.title',
    },
    prepare(selection) {
      const { title, categoryTitle } = selection;
      return {
        title: title,
        subtitle: categoryTitle ? `Category: ${categoryTitle}` : 'No category assigned',
      };
    },
  },
});
