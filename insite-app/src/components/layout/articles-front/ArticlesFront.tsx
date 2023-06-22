import { FC } from 'react';
import styles from './ArticlesFront.module.scss';

const ArticlesFront: FC = () => {
  return (
    <section className={styles.articles}>
    <div className="container">
      <div className={styles['articles-wrapper']}>
        <div className={styles['articles-block']}>
          <span className={styles['articles__text']}></span>
          Читайте здесь наши
          <span className={styles["articles__text--strong"]}>Статьи</span>
          </div>
          
      
      <div className={styles['articles-block']}>
        <span className={styles['articles-link__text']}>Мы подобрали лучшее для вас</span>
        <button className={styles['articles__button']}>Нажмите чтобы посмотреть</button>
      </div>
      </div>
    </div>
    </section>
  );
};

export default ArticlesFront