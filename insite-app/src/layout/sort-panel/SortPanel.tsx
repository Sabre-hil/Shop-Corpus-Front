import Categories from '@/components/categories/Categories';
import Sort from '@/components/sort/Sort';
import { FC } from 'react';
import styles from './SortPanel.module.scss';

const SortPanel: FC = () => {
  return (
    <section className={styles['sort-panel']}>
      <div className="container">
        <div className={styles['sort-panel__block']}>
          <Categories/>
          <Sort/>
        </div>
        
      </div>
  </section>
  );
};

export default SortPanel