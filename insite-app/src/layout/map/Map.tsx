import { FC } from 'react';
import styles from './Map.module.scss'

const Map: FC = () => {
  return (
    <section className={styles.newsletter}>
      <div className="container">
        <div className={styles['newsletter-wrapper']}>
            <h2 className={styles['newsletter-description']}>
              Мы находимся здесь
          </h2>
          <div className={styles.map} >
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7955bc12c6e4d027e1947b9efcbfbea94029731d2af6670339e1f3a9094e0e6d&amp;source=constructor" width="440" height="270" frameBorder="0"></iframe>
          </div>
        </div>
      </div>
      </section>
  );
};

export default Map