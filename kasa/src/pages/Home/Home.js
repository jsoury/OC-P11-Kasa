import style from "./home.module.scss";
import Card from "../../components/Card";
import { useFetch } from "../../utils/hooks/useFetch";

import Header from "../../components/Header";

import headerBackground from "../../assets/Home-Header-background.png";

const Home = () => {
  const { data, isLoading, error } = useFetch("./data.json");

  const hostingList = data ? data : null;
  console.log(hostingList[0]);

  if (error) {
    return <pre>{error}</pre>;
  }

  return (
    <>
      <Header
        title={"Chez vous, partout et ailleurs"}
        background={headerBackground}
      />
      {isLoading ? (
        <div>Loding</div>
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
