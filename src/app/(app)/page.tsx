import { headers } from 'next/headers'
import { getPayload } from 'payload'
import React from 'react'
import configPromise from '@payload-config'

const fetchData = async (domain: string) => {
  const payload = await getPayload({ config: configPromise })
  // Adjust the URL to point to your Payload CMS API based on the domain
  const response = await payload.find({
    collection: 'pages',
    overrideAccess: false,
    where: {
      and: [
        {
          'tenant.domain': {
            equals: domain,
          },
          'slug': {
            equals: 'home-new'
          }
        },
      ],
    },
  })
  if (!response) {
    throw new Error('Failed to fetch tenant data')
  }
  return response
}



const Page = async () => {
  // Fetch data for the tenant based on the domain

    const headerList: any = await headers();
    const host = headerList.get("host");
    const domainValue:string = host 
    console.log('domainValue ',domainValue);
  const tenantData = await fetchData(domainValue)
  console.log('tenantData ',tenantData);
  return (
    <div>
      <h1>Multi-Tenant Example</h1>
      <p>
        This multi-tenant example allows you to explore multi-tenancy with domains and slugs.
      </p>

      <h2>Domains</h2>
      <p>When you visit a tenant by domain, the domain is used to determine the tenant.</p>
      <p>
        For example, visiting{' '}
        <a href={`http://${domainValue}`}>
          {`http://${domainValue}`}
        </a>{' '}
        will show the tenant with the domain "{domainValue}".
      </p>

      <h2>Tenant Data</h2>
      {/* <p>{tenantData ? `Tenant name: ${tenantData}` : 'No tenant data found'}</p> */}

      <h2>Slugs</h2>
      <p>When you visit a tenant by slug, the slug is used to determine the tenant.</p>
      <p>
        For example, visiting{' '}
        <a href={`http://localhost:3000/tenant-slugs/silver/login`}>
          http://localhost:3000/tenant-slugs/silver/login
        </a>{' '}
        will show the tenant with the slug "silver".
      </p>
    </div>
  )
}

export default Page
