import { FC, useState } from 'react';
import { useTypedSelector } from '../../shared/lib/useTypedSelector';
import styles from './FurnitureDetail.module.scss';
import Image from 'next/image';
import Layout from '../../layout/Layout';

const FurnitureDetail: FC = () => {
  const furniture = useTypedSelector((state) => state.furnitures.furniture);
  const image = furniture.Device_Images?.map((el) => el.path);
  const [imageState, setImageState] = useState<number>(0);
  console.log('длина', image?.length)


  const nextImage = () => {
    if (imageState < image?.length - 1) {
      setImageState((prev) => prev + 1)
    } else {
      setImageState(0)
    }
  }

  const prevImage = () => {
    if (imageState) {
      setImageState((prev) => prev - 1)
    } else {
      setImageState(+image?.length - 1)
    }
  }

  return (
    <Layout title={`${furniture.category} - ${furniture.name} | Лучшая мебель в Грозном | Лучшая кухня в Грозном | Лучшие шкафы в Грозном - по отличной цене - по хорошей цене' description='Кухня в Грозном - Шкафы в Грозном - Мебель в Грозном - ТВ зона - Спальня в Грозном - Гардеробная - По низким и доступным ценам - статьи как лучше оформить интерьер`} description={'Кухня в Грозном - Шкафы в Грозном - Мебель в Грозном - ТВ зона - Спальня в Грозном - Гардеробная - По низким и доступным ценам - статьи как лучше оформить интерьер'}>
      <main className={styles.furniture}>
      <div className='container'>
        <h1 className={styles['furniture__name']}>{furniture.name}</h1>
        <aside className={styles['furniture-block']}>
            <figure className={styles['furniture__image--block']}>
              <div className={styles['furniture__arrow']}>
              <Image className={styles['furniture__image']} src={image? `http://localhost:4000/${image[imageState]}`: ''} alt='Кухня' width={850} height={540}/>
              <Image onClick={() => prevImage()} className={styles['furniture__arrow--left']} src='/arrow-left.svg' alt='' width={50} height={50}/>
              <Image onClick={() => nextImage()} className={styles['furniture__arrow--right']} src='/arrow-right.svg' alt='' width={50} height={50}/>
              <span className={styles['furniture__counter']}>{`${imageState + 1} / ${image?.length}`}</span>
              </div>
              <p className={styles['furniture__description']}>{furniture.description}</p>
            </figure>
            <form className={styles['furniture__form']} action="">
              <p className={styles['furniture__price']}>{`${furniture.price} ₽`}</p>
              <p className={styles['furniture-review__data']}>Введите свои данные и наш менеджер свяжется с вами</p>
              <input className={styles['furniture__input']} type="text" placeholder='ФИО' />
              <input className={styles['furniture__input']} type="tel" pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$' placeholder='Ваш номер' />
              <button className={styles['furniture__button']}>Сделать заявку</button>
              <span className={styles['furniture__confidentiality--white']}>Нажимая на кнопку вы соглашаетесь с</span>
              <span className={styles['furniture__confidentiality']}>политикой конфиденциальности.</span>
              <span className={styles['furniture__bot']}>Вас перенаправят в телеграм бот для оформления и уточнение вашего заказа</span>
              <button className={styles['furniture__button--review']}>Оставить отзыв</button>
            </form>
        </aside>
        <aside className={styles['furniture-about']}>
          <h3 className={styles['furniture-about__name']}>{furniture.category}</h3>
          <div className={styles['furniture-about__block']}>
            <div>
              <div className={styles['furniture-about__item']}>
                <p className={styles['furniture-about__type']}>Класс {furniture.category}</p>
                <p className={styles['furniture-about__view']}>Элит</p>
              </div>
              <div className={styles['furniture-about__item']}>
                <p className={styles['furniture-about__type']}>Размеры</p>
                <p className={styles['furniture-about__view']}>{furniture.size}</p>
              </div>
              <div className={styles['furniture-about__item']}>
                <p className={styles['furniture-about__type']}>Звезд</p>
                <p className={styles['furniture-about__view']}>5</p>
              </div>
            </div>
            <div className={styles['furniture-about__item']}>
              <div>
              <div className={styles['furniture-about__item']}>
                <p className={styles['furniture-about__type']}>Материалы</p>
                <p className={styles['furniture-about__view']}>{furniture.facade}</p>
              </div>
              <div className={styles['furniture-about__item']}>
                <p className={styles['furniture-about__type']}>Производство</p>
                <p className={styles['furniture-about__view']}>{furniture.made}</p>
              </div>
              </div>
              <div></div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  </Layout>
  );
};

export default FurnitureDetail