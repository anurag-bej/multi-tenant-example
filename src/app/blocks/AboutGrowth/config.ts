import { Block } from 'payload'

export const AboutGrowthBlock: Block = {
  slug: 'about_growth',
  imageURL: 'https://d1rdz15x9x7c4f.cloudfront.net/assets/payload-images/about-growth.png',
  labels: {
    singular: 'About Growth',
    plural: 'About Growth',
  },
  fields: [
    {
      type: 'radio',
      name: 'showInScroller',
      label: 'Display block in scroller',
      defaultValue: 'notShow',
      options: [
        {
          label: 'Not Show',
          value: 'notShow',
        },
        {
          label: 'Show',
          value: 'Show',
        },
      ],
    },
    {
      type: 'text',
      name: 'scrollerTitle',
      label: 'Enter Scroller Title',
    },
    {
      type: 'select',
      name: 'theme',
      label: 'Choose Theme',
      required: true,
      defaultValue: 'dark',
      options: [
        {
          value: 'dark',
          label: 'Dark',
        },
        {
          value: 'light',
          label: 'Light',
        },
      ],
    },
    {
      name: 'mainTitle',
      type: 'text',
      label: 'Main Title',
      required: true,
    },
    {
      name: 'subTitle',
      type: 'text',
      label: 'Sub Title',
      required: true,
    },
    {
      type: 'array',
      name: 'list',
      label: 'Create List',
      minRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'score',
          type: 'text',
          label: 'Score',
          required: true,
          admin: {
            placeholder: 'ex.200+',
          },
        },
      ],
    },
  ],
}
