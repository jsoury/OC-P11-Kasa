import styles from "./star-rating.module.scss";

function StarRating({ rating }) {
  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span
            key={`${index}-${rating}`}
            className={`${styles.star} ${
              index <= rating ? styles.on : styles.off
            }`}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
