import style from "./home.module.scss";
import Card from "../../components/Card";
import { useFetch } from "../../utils/hooks/useFetch";

import Header from "../../components/Header";
import Loader from "../../components/Loader";

import headerBackground from "../../assets/Home-Header-background.png";

const Home = () => {
  const { data, isLoading, error } = useFetch(
    "http://localhost:3000/data.json"
  );

  const hostingList = data ? data : null;

  if (error) {
    return <pre>{error}</pre>;
  }

  return (
    <>
      <Header
        home
        title={"Chez vous, partout et ailleurs"}
        background={headerBackground}
      />
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
  );
};

export default Home;
