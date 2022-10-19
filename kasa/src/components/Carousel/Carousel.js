import React, { useState } from 'react'
import styles from './carousel.module.scss'

import arrowRight from '@/assets/images/components/Carousel/arrow-right.svg'
import arrowLeft from '@/assets/images/components/Carousel/arrow-left.svg'

export const CarouselItem = ({ children, width }) => {
  return (
    <div className={styles.carousel__item} style={{ width: width }}>
      {children}
    </div>
  )
}

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }
    setActiveIndex(newIndex)
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.inner} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' })
        })}
      </div>
      <div className={styles.carousel__count}>
        {activeIndex + 1}/{React.Children.count(children)}
      </div>
      <div className={styles.carousel__indicators}>
        <button
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
        >
          <img src={arrowLeft} alt="arrow right" className={styles.button__arrow} />
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
        >
          <img src={arrowRight} alt="arrow right" className={styles.button__arrow} />
        </button>
      </div>
    </div>
  )
}
export default Carousel
