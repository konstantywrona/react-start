import Container from '../Container/Container';
import styles from '../Hero/Hero.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <PageTitle>About</PageTitle>
        <p>Lorem ipsum</p>
      </Container>
    </div>
  );
};

export default About;
