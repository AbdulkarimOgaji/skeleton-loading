import { SingleVideoSkeleton } from "./SingleVideoSkeleton";
import styles from "../../styles/skeleton.module.css";

export const HomeSkeleton = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.hamburger}>
          {" "}
          <div className={styles.hamburgerBtn}></div>
        </div>
        <div className={styles.searchBar}>
          <form>
            <input type="text" className={styles.search} /><i className={`bi bi-search ${styles.searchIcon}`}></i>
          </form>
        </div>
        <div className={styles.rightMenu}>
        <ul>
            <li>
              <a href="/">
                <i className="bi bi-camera-video" ></i>
              </a>
            </li>
            <li>
              <a href="/">
              <i className="bi bi-list" ></i>
                
              </a>
            </li>
            <li>
              <a href="/">
              <i className="bi bi-bell" ></i>
              </a>
            </li>
            <li>
              <a href="/">
              <i className="bi bi-person-circle" ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.sidebar}></div>
      <div className={styles.content}>
        <div className={styles.filters}>
            
        </div>
        <div className={styles.items}>
          <SingleVideoSkeleton />
          <SingleVideoSkeleton />
          <SingleVideoSkeleton />
          <SingleVideoSkeleton />
          <SingleVideoSkeleton />
          <SingleVideoSkeleton />
          <SingleVideoSkeleton />
          <SingleVideoSkeleton />
          <SingleVideoSkeleton />
          <SingleVideoSkeleton />
        </div>
      </div>
    </>
  );
};
