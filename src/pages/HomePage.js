import styles from "../styles/home.module.css";
import { SingleVideo } from "../components/SingleVideo";




export const HomePage = ({movies}) => {
    
    
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
          <div className={styles.pill}>Home</div>
          <div className={styles.pill}>Magnus Carlsen</div>
          <div className={styles.pill}>Javascript</div>
          <div className={styles.pill}>Indoor games</div>
          <div className={styles.pill}>Go</div>
          <div className={styles.pill}>Lectures</div>
          <div className={styles.pill}>Databases</div>
          <div className={styles.pill}>Algorithms</div>
          <div className={styles.pill}>Mortal Kombat XL</div>
        </div>
        <div className={styles.items}>
          {movies.length && movies.map((mov, i) => <SingleVideo key={i} movie={mov} />)}
        </div>
      </div>
    </>
  );
};
