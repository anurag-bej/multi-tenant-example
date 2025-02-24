'use client'
import React, { useState } from 'react'
import styles from './index.module.scss'

export type Type = {
  blockType?: 'about_growth'
  blockName?: string
  mainTitle: string
  subTitle: string
  theme: string
  list: {
    title: string
    score: string
  }[]
  scrollerId?: any
}

export const AboutGrowthComponent: React.FC<Type> = (props) => {
  const { mainTitle } = props
  const { subTitle } = props
  const { theme } = props
  const { list } = props
  const { scrollerId } = props
  const [anim, setanim] = useState(true)

  const animationDuration = 2000
  const frameDuration = 1000 / 60
  const totalFrames = Math.round(animationDuration / frameDuration)
  const easeOutQuad = (t: any) => t * (2 - t)

  const animateCountUp = (el: any) => {
    let frame = 0
    const countTo = parseInt(el.innerHTML, 10)
    const counter = setInterval(() => {
      frame += 1
      const progress = easeOutQuad(frame / totalFrames)
      const currentCount = Math.round(countTo * progress)

      if (parseInt(el.innerHTML, 10) !== currentCount) {
        el.innerHTML = currentCount
      }

      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)
  }

  const runAnimations = (classname: any) => {
    const countupEls = document.querySelectorAll(`.${classname}`)
    countupEls.forEach(animateCountUp)
  }

  const divScroll = () => {
    if (anim === true) {
      runAnimations('countup_div')
    }
  }

  return (
    <section
      onMouseEnter={() => divScroll()}
      onMouseLeave={() => setanim(false)}
      id={scrollerId}
      className={`${styles.company_info} ${theme === 'dark' ? styles.bg_dark : styles.bg_light}`}
    >
      <div className="container">
        <div className={styles.block_title}>
          <span>{mainTitle}</span>
          <h2>{subTitle}</h2>
        </div>
        <div className={styles.info_detail}>
          <ul>
            {list?.map((item, i) =>
              item?.score.indexOf('+') > -1 ? (
                <li key={i}>
                  <div className={styles.block_count}>
                    <span className="countup_div">{item?.score.replace(/\+/g, '')}</span>+
                  </div>
                  <div className={styles.block_text}>{item?.title}</div>
                </li>
              ) : (
                <li key={i}>
                  <div className={styles.block_count}>{item?.score}</div>
                  <div className={styles.block_text}>{item?.title}</div>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutGrowthComponent
