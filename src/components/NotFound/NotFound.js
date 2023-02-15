import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import styles from '../Hero/Hero.module.scss';

const NotFound = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <PageTitle>404 Not found</PageTitle>
      </Container>
    </div>
  );
};

export default NotFound;
