import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      name: 'pageCategory',
      type: 'select',
      defaultValue: 'oneclick',
      label: 'Select Category',
      hasMany: false,
      options: [
        {
          value: 'services',
          label: 'Services',
        },
        {
          value: 'solutions',
          label: 'Solutions',
        },
        {
          value: 'hireresource',
          label: 'Hire Resources',
        },
        {
          value: 'travel',
          label: 'Travel',
        },
        {
          value: 'oneclick',
          label: 'Oneclick',
        },
        {
          value: 'centerofexcellence',
          label: 'Centerofexcellence',
        },
        {
          value: 'Custom Development',
          label: 'Custom Development',
        },
        {
          value: 'Widget Integration',
          label: 'Widget Integration',
        },
        {
          value: 'API',
          label: 'API',
        },
        {
          value: 'White Label',
          label: 'White Label',
        },
        {
          value: 'other',
          label: 'Other',
        },
      ],
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
