import styles from './hosting.module.scss'
import React, { useEffect, useState } from 'react'
import { useFetch } from '@/utils/hooks/useFetch'
import { useParams } from 'react-router-dom'

import Collapse from '@/components/Collapse/Collapse'
import Tag from '@/components/Tag'
import StarRating from '@/components/StarRating'
import Carousel, { CarouselItem } from '@/components/Carousel'
import Loader from '@/components/Loader'
import Error from '@/components/Error'

const Hosting = () => {
  const { id } = useParams()
  const [height, setHeight] = useState([])
  const [maxHeight, setMaxHeight] = useState(0)

  const { data, isLoading, error } = useFetch('data.json', id)
  console.log(data)

  const handleMaxHeight = () => {
    let max = Math.max(...height)
    setMaxHeight(max)
  }

  useEffect(() => {
    handleMaxHeight()
  })

  const hosting = data ? data : null

  if (error || !data) {
    return (
      <Error>
        <pre>{error}</pre>
      </Error>
    )
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.hosting}>
          <Carousel>
            {hosting.pictures.map((picture, index) => (
              <CarouselItem key={`${index} ${hosting.title}`}>
                <img src={picture} alt={`${index} ${hosting.title}`} />
              </CarouselItem>
            ))}
          </Carousel>
          <header className={styles.hosting__header}>
            <div className={styles.hosting__header__right}>
              <h1>{hosting.title}</h1>
              <div>{hosting.location}</div>
              <div className={styles.tag__wrapper}>
                {hosting.tags.map((tag) => (
                  <Tag key={`${hosting.id}-${tag}`} label={tag}></Tag>
                ))}
              </div>
            </div>
            <div className={styles.host__wrapper}>
              <div className={styles.host}>
                {hosting.host.name.split(' ')[0]}
                <br />
                {hosting.host.name.split(' ')[1]}
                <img
                  className={styles.host__picture}
                  src={hosting.host.picture}
                  alt="portrait du loueur"
                />
              </div>
              <StarRating rating={hosting.rating}></StarRating>
            </div>
          </header>

          <div className={styles.collapse__wrapper}>
            <Collapse
              label={'Description'}
              height={height}
              setHeight={setHeight}
              maxHeight={maxHeight}
              setMaxHeight={setMaxHeight}
            >
              <p>{hosting.description}</p>
            </Collapse>
            <Collapse
              label={'Équipements'}
              height={height}
              setHeight={setHeight}
              maxHeight={maxHeight}
              setMaxHeight={setMaxHeight}
            >
              <ul>
                {hosting.equipments.map((equipment) => (
                  <li key={`${hosting.id}-${equipment}`}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      )}
    </>
  )
}

export default Hosting
