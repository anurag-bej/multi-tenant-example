import type { CollectionConfig } from 'payload'

import { ensureUniqueSlug } from './hooks/ensureUniqueSlug'
import { superAdminOrTenantAdminAccess } from '@/collections/Pages/access/superAdminOrTenantAdmin'
import { hero } from '@/heros/config'
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'
import { AboutGrowthBlock } from '@/app/blocks/AboutGrowth/config'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    create: () => true,
    delete: () => true,
    read: () => true,
    update: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    // {
    //   name: 'slug',
    //   type: 'text',
    //   hooks: {
    //     beforeValidate: [ensureUniqueSlug],
    //   },
    //   index: true,
    // },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                AboutGrowthBlock,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: false,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
    // {
    //   name: 'tenantnew',
    //   type: 'relationship',
    //   relationTo: 'tenants', // Assuming you have a 'tenants' collection
    //   required: false,
    // },
  ],
}
