import React, { JSX, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import RightIcon from '../../public/home-icon.svg'
import styles from './index.module.scss'

const DynamicBreadcrumbs: React.FC = (): JSX.Element => {
  const [pathname, setPathname] = useState<string>('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname)
    }
  }, [])

  const pathnames = pathname.split('/').filter((x) => x)

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb flex align-items-center m-0">
        <li className={`${styles.breadcrumb_item} breadcrumb-item`}>
          <Link href="/" passHref legacyBehavior>
            <Link href="/" className={styles.breadcrumb_a}>
              <Image
                src={RightIcon}
                alt="check-circle image"
                aria-label="check-circle"
                loading="lazy"
                height={18}
                width={18}
              />
              Home
            </Link>
          </Link>
        </li>

        {pathnames.map((value, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          const formattedValue = decodeURIComponent(
            value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' '),
          )

          return (
            <React.Fragment key={routeTo}>
              <span className={styles.separator}>|</span>
              {isLast ? (
                <li
                  className={`${styles.breadcrumb_item} breadcrumb-item ${styles.active}`}
                  aria-current="page"
                >
                  {formattedValue}
                </li>
              ) : (
                <li className={`${styles.breadcrumb_item} breadcrumb-item`}>
                  <Link href={routeTo} passHref legacyBehavior>
                    <a href={routeTo}>{formattedValue}</a>
                  </Link>
                </li>
              )}
            </React.Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

export default DynamicBreadcrumbs
