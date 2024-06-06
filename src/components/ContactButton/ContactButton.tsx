import styles from './ContactButton.module.scss';

const ContactButton = () => {
  return (
    <>
      <a
        href="#contact"
        className={styles.btnFlip}
        data-back="ici"
        data-front="Contactez-moi"
      ></a>
    </>
  );
};

export default ContactButton;
