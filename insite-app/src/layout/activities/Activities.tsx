import { FC } from 'react';
import styles from './Activities.module.scss'

const Activities: FC = () => {
  return (
    <section className={styles.newsletter}>
      <div className="container">
        <div className={styles['newsletter-wrapper']}>
            <h2 className={styles['newsletter-description']}>
              Мы находимся
            <button className={styles["newsletter__button"]}>Здесь</button>
          </h2>
        </div>
      </div>
      </section>
  );
};

export default Activities