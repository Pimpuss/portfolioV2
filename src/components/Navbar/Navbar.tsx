import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <>
      <div className={styles.holderNav}>
        <ul className={styles.navList} id="myMenu">
          <li data-menuanchor="home">
            <a href="#home" id="home">
              Home
            </a>
          </li>
          <li data-menuanchor="about">
            <a href="#about" id="about">
              À propos
            </a>
          </li>
          <li data-menuanchor="skills">
            <a href="#skills" id="skills">
              Compétences
            </a>
          </li>
          <li data-menuanchor="experience">
            <a href="#experience" id="experience">
              Expériences
            </a>
          </li>
          <li data-menuanchor="Contact">
            <a href="#contact" id="Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
