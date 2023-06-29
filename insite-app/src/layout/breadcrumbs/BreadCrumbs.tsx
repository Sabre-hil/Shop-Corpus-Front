import { FC } from 'react';
import { useTypedSelector } from '@/shared/lib/useTypedSelector';
import styles from './BreadCrumbs.module.scss';

const BreadCrumbs: FC = () => {
  const furniture = useTypedSelector((state) => state.furnitures.furniture)
  return (
    <section className={styles.breadcrumbs}>
      <div className='container'>
        <span className={styles['breadcrumbs__way']}>
          Грозный / Главная / {furniture.name}
          </span>
      </div>
    </section>
  );
};

export default BreadCrumbs