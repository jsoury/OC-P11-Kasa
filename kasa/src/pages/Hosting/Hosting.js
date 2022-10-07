import styles from "./hosting.module.scss";
import Card from "../../components/Card";
import { useFetch } from "../../utils/hooks/useFetch";
import { useParams, useLocation } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";

const Hosting = () => {
  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  console.log(location);

  const { data, isLoading, error } = useFetch(
    "http://localhost:3000/data.json",
    "c67ab8a7"
  );

  const hosting = data ? data : null;
  console.log(hosting);

  if (error) {
    return <pre>{error}</pre>;
  }

  return (
    <>
      <span>{id}</span>
      {isLoading ? (
        <div>Loding</div>
      ) : (
        <div>
          <Card
            id={hosting.id}
            title={hosting.title}
            cover={hosting.cover}
          ></Card>
          <div className={styles.collapse__wrapper}>
            <Collapse label={"Description"}>
              <p>
                Vous serez à 50m du canal Saint-martin où vous pourrez
                pique-niquer l'été et à côté de nombreux bars et restaurants. Au
                cœur de Paris avec 5 lignes de métro et de nombreux bus.
                Logement parfait pour les voyageurs en solo et les voyageurs
                d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes
                à pied).
              </p>
            </Collapse>
            <Collapse label={"Équipements"}>
              <ul>
                <li>Climatisation</li>
                <li>Wi-Fi</li>
                <li>Cuisine</li>
                <li>Espace de travail</li>
                <li>Fer à repasser</li>
                <li>Sèche-cheveux</li>
                <li>Cintres</li>
              </ul>
            </Collapse>
          </div>
        </div>
      )}
    </>
  );
};

export default Hosting;
