import styles from './Introduction.module.css';

const Introduction = () => {
  return (
    <section className={styles.hero}>
      <h1>Welcome to my blog</h1>
      <p>
        Where I write about what interests me: Lifestyle, Philosophy, Science,
        and other things!
      </p>
    </section>
  );
};

export default Introduction;
