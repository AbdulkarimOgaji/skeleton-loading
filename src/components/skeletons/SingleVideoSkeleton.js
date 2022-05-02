import styles from "../../styles/skeleton.module.css"

export const SingleVideoSkeleton = () => {
  return (
    <div className={styles.item}>
      <div className={[styles.thumbnail, styles.skeleton].join(" ")}></div>
      <div className={styles.detailsContainer}>
        <div className={[styles.channelImg, styles.skeleton].join(" ")}></div>
        <div className={styles.details}>
          <div className={[styles.title, styles.skeleton].join(" ")}></div>
          <div className={[styles.lead, styles.skeleton].join(" ")}></div>
        </div>
      </div>
    </div>
  );
};
