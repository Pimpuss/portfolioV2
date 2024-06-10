import styles from './Home.module.scss';
import picture from '../../assets/Profil.jpg';
import ContactButton from '../ContactButton/ContactButton';

const Home = () => {
  return (
    <div className=" homeSection flex flex-row justify-evenly items-center text-primaryWhite h-screen w-full">
      <div className="relative text-center font-titleMenu">
        <h1 className="font-bold text-7xl">Milhan Verschelle</h1>
        <h2 className="text-4xl m-8 font-thin">
          Dévoloppeur Web <span className={styles.blueText}>&#38;</span> Mobile
        </h2>
        <ContactButton />
      </div>
      <div className="imageInformation w-1/5">
        <img
          className="rounded-full border-2 border-primaryBlue"
          src={picture}
          alt="Milhan Verschelle"
        ></img>
      </div>
    </div>
  );
};

export default Home;
