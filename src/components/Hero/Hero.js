import styles from './Hero.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <PageTitle>MY TO-DO APP</PageTitle>
        <p className={styles.subtitle}>
          A simple to-do app, with lists, columns and cards
        </p>
      </div>
    </>
  );
};

export default Hero;
