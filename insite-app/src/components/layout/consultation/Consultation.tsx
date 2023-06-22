import { FC } from 'react';
import styles from './Consultation.module.scss';

const Consultation: FC = () => {
  return (
      <aside className={styles.consultation}>
        <div className="container">
        <div className={styles['consultation-wrapper']}>
          <p className={styles['consultation__text']}>Бесплатная консультация с мастером</p>
          <button className={styles['consultation__button']}>Записаться</button>
        </div>
        </div>
      </aside>
  );
};

export default Consultation