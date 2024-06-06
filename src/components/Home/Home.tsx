import styles from './Home.module.scss';
import picture from '../../assets/Profil.jpg';
import ContactButton from '../ContactButton/ContactButton';

const Home = () => {
  return (
    <div className={styles.homeSection}>
      <div className={styles.textContainer}>
        <h1>Milhan Verschelle</h1>
        <h2>
          Dévoloppeur Web <span className={styles.blueText}>&#38;</span> Mobile
        </h2>
        <ContactButton />
      </div>

      <div className={styles.imageInformation}>
        <img src={picture} alt="Milhan Verschelle"></img>
      </div>
    </div>
  );
};

export default Home;
