import styles from "./hosting.module.scss";
import Card from "../../components/Card";
import { useFetch } from "../../utils/hooks/useFetch";
import { useParams, useLocation } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag";
import StarRating from "../../components/Star-rating";

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
        <div>Loading</div>
      ) : (
        <div>
          <h1>{hosting.title}</h1>
          <div>{hosting.location}</div>
          <div className={styles.tag__wrapper}>
            {hosting.tags.map((tag) => (
              <Tag label={tag}></Tag>
            ))}
          </div>
          <div className={styles.host__wrapper}>
            <div className={styles.host}>
              {hosting.host.name}
              <img src={hosting.host.picture} alt="portrait du loueur" />
            </div>
            <StarRating rating={hosting.rating}></StarRating>
          </div>

          <div className={styles.collapse__wrapper}>
            <Collapse label={"Description"}>
              <p>{hosting.description}</p>
            </Collapse>
            <Collapse label={"Équipements"}>
              <ul>
                {hosting.equipments.map((equipment) => (
                  <li>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      )}
    </>
  );
};

export default Hosting;
