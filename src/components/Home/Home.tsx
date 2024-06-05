import styles from './Home.module.scss';
import picture from '../../assets/Profil.jpg';

const Home = () => {
  return (
    <div className={styles.homeSection}>
      <div className={styles.textContainer}>
        <h1>Milhan Verschelle</h1>
        <h2>
          Dévoloppeur Web <span className={styles.blueText}>&#38;</span> Mobile
        </h2>
        <div className={styles.flip}>
          {/* <a>
              <div class="black">Constactez-moi</div>
              <div className={styles.white}>Constactez-moi</div>
            </a> */}
        </div>
      </div>

      <div className={styles.imageInformation}>
        <img src={picture} alt="Milhan Verschelle"></img>
      </div>
    </div>
  );
};

export default Home;
