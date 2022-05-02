import styles from "../styles/home.module.css"


export const SingleVideo= ({movie}) => {
const {poster_path, vote_count, title, backdrop_path, original_title} = movie
  return (
    <div className={styles.item}>
      <img className={`${styles.thumbnail}`} src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="thumbnail"/>
      <div className={styles.detailsContainer}>
        <img className={styles.channelImg} src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="channel" />
        <div className={styles.details}>
          <h4>{title}</h4>
          <small>{original_title}</small><br />
          <small>{vote_count} views. 2 years ago</small>
        </div>
      </div>
    </div>
  );
};
