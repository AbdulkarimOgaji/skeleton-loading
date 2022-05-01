import { SingleVideo } from "./SingleVideo";
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
            <input type="text" className={styles.search} />
          </form>
        </div>
        <div className={styles.rightMenu}>
          <ul>
            <li>
              <a href="/">
                <div></div>
              </a>
            </li>
            <li>
              <a href="/">
                <div></div>
              </a>
            </li>
            <li>
              <a href="/">
                <div></div>
              </a>
            </li>
            <li>
              <a href="/">
                <div></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.sidebar}></div>
      <div className={styles.content}>
        <div className={styles.filters}>
            {/* <div className={styles.pill}>Home</div>
            <div className={styles.pill}>Magnus Carlsen</div>
            <div className={styles.pill}>Javascript</div>
            <div className={styles.pill}>Indoor games</div>
            <div className={styles.pill}>Go</div>
            <div className={styles.pill}>Lectures</div>
            <div className={styles.pill}>Databases</div>
            <div className={styles.pill}>Algorithms</div> */}
        </div>
        <div className={styles.items}>
          <SingleVideo />
          <SingleVideo />
          <SingleVideo />
          <SingleVideo />
          <SingleVideo />
        </div>
      </div>
    </>
  );
};
