import { FC, Fragment, useState } from 'react';
import styles from './Categories.module.scss';

const Categories: FC = () => {
  const categories = ['Все', 'Шкафы', 'ТВ-зона', 'Спальня', 'Гардеробная', 'Кухня',];
  const [stateCategories, setStateCategories] = useState(0);

  const activity = (index: number) => {
    setStateCategories(index)
  }
  return (
    <div className={styles.categories}>
    <ul>
    {categories?.map((item, index) => (
      <Fragment key={index}>
      <li onClick={() => activity(index)} className={styles[`${stateCategories === index ? 'active' : ''}`]}>
{item}
      </li>
      </Fragment>
    ))}
    </ul>
  </div>
  );
};

export default Categories;