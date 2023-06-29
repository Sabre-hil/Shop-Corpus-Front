import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';
import styles from './Furniture.module.scss';
import { useTypedSelector } from '@/shared/lib/useTypedSelector';
import Layout from '../../layout/Layout';

const Furniture: FC = () => {
  const furnitures = useTypedSelector((state) => state.furnitures.furnitures)
  const image = furnitures.map((el) => el.Device_Images.map(el => el.path));

  return (
      <main className={styles.furniture}>
        <div className="container">
          <div className={styles['furniture-block']}>
            {furnitures? furnitures.map((furniture, i) => (
              <div key={furniture.id} className={styles['furniture__item']}>
              <Image className={styles['furniture__image']} src={`http://localhost:4000/${image[i][0]}`} alt="Мебель" width={415} height={280}/>
              <span className={styles['furniture__price']}>{`${furniture.price} ₽`}</span>
              <Link className={styles['furniture__link']} href={`/furniture/${furniture.id}`}>
                <p className={styles['furniture__description']}>{`${furniture.category} ${furniture.name}`}</p>
                </Link>
              <div className={styles['furniture-star__block']}>
                <Image className={styles['furniture-star__image']} src='/star.svg' alt="Звезда" width={20} height={20}/>
                <Image className={styles['furniture-star__image']} src='/star.svg' alt="Звезда" width={20} height={20}/>
                <Image className={styles['furniture-star__image']} src='/star.svg' alt="Звезда" width={20} height={20}/>
                <Image className={styles['furniture-star__image']} src='/star.svg' alt="Звезда" width={20} height={20}/>
                <Image className={styles['furniture-star__image']} src='/star.svg' alt="Звезда" width={20} height={20}/>
              </div>
          </div>
            )) : <>Loading...</>}
          </div>
        </div>
      </main>
  );
};

export default Furniture;