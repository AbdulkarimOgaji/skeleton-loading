import styles from "../../styles/skeleton.module.css"

export const SingleVideo = () => {
  return (
    <div className={styles.item}>
      <div className={styles.thumbnail}></div>
      <div className={styles.detailsContainer}>
        <div className={styles.channelImg}></div>
        <div className={styles.details}>
          <div className={styles.title}></div>
          <div className={styles.lead}></div>
        </div>
      </div>
    </div>
  );
};
