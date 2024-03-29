import style from './home.module.scss'
import { useFetch } from '@/utils/hooks/useFetch'

import Header from '@/components/Hero'
import Loader from '@/components/Loader'
import Card from '@/components/Card'

import headerBackground from '@/assets/images/components/Hero/Home-Header-background.png'

const Home = () => {
  const { data, isLoading, error } = useFetch('data.json')

  const hostingList = data ? data : null

  if (error) {
    return <pre>{error}</pre>
  }

  return (
    <>
      <Header home title={'Chez vous, partout et ailleurs'} background={headerBackground} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className={style.cardWrapper}>
          {hostingList.map((hosting) => (
            <Card
              key={hosting.id}
              id={hosting.id}
              title={hosting.title}
              cover={hosting.cover}
            ></Card>
          ))}
        </div>
      )}
    </>
  )
}

export default Home
