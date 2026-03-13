import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'openPosition',
  title: 'Open Position',
  type: 'document',
  fields: [
    defineField({
      name: 'positionName',
      title: 'Position Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle this off to hide the job posting without deleting it.',
      initialValue: true,
    }),
    defineField({
      name: 'datePosted',
      title: 'Date Posted',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'Fall River, MA',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'text',
      description: 'A few short paragraphs describing the responsibilities and requirements.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'positionName',
      subtitle: 'location',
      isActive: 'isActive'
    },
    prepare(selection) {
      const { title, subtitle, isActive } = selection;
      return {
        title: title,
        subtitle: `${isActive ? '🟢 Active' : '🔴 Inactive'} - ${subtitle}`,
      };
    },
  },
});
