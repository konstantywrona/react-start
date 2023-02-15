import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import styles from '../Hero/Hero.module.scss';

const Favourite = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <PageTitle>Favourite</PageTitle>
        <p>Lorem ipsum</p>
      </Container>
    </div>
  );
};

export default Favourite;
