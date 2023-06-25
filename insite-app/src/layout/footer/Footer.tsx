import { FC } from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
    <div className="container">
      <div className={styles['footer-wrapper']}>
        <Image
          width={100}
          height={37}
          src="/insite.svg"
          alt="Logo: Best Tour Plane"
          className={styles['footer-logo']}
        />
        <div className={`footer__list ${styles['footer__categories']}`}>
          <h3 className={styles['footer__title']}>ВСЕ КАТЕГОРИИ</h3>
          <ul className={styles['footer__ul']}>
            <li className={styles['footer__item']}>
              <a href="#" className={styles['footer__link']}>Шкафы</a>
            </li>
            <li className={styles['footer__item']}>
              <a href="#" className={styles['footer__link']}>ТВ-зона</a>
            </li>
            <li className={styles['footer__item']}>
              <a href="#" className={styles['footer__link']}>Спальня</a>
            </li>
            <li className={styles['footer__item']}>
              <a href="#" className={styles['footer__link']}>Кухня</a>
            </li>
            <li className={styles['footer__item']}>
              <a href="#" className={styles['footer__link']}>Гардеробная</a>
            </li>
            <li className={styles['footer__item']}>
              <a href="#" className={styles['footer__link']}>Офисная мебель и оборудоание</a>
            </li>
          </ul>
        </div>
        <div className={`footer__list ${styles['footer__additional']}`}>
          <h3 className={styles['footer__title']}>О КОМПАНИИ</h3>
          <ul className={styles['footer__ul']}>
            <li className={styles['footer__item']}>
              <a href="#" className={styles['footer__link']}>Адрес</a>
            </li>
            <li className={styles['footer__item']}>
              <a href="#" className={styles['footer__link']}>Наши контакты</a>
            </li>
            <li className={styles['footer__item']}>
              <a href="#" className={styles['footer__link']}>Как мы работаем</a>
            </li>
            <li className={styles['footer__item']}>
              <a href="#" className={styles['footer__link']}>Наши партнеры</a>
            </li>
            <li className={styles['footer__item']}>
              <a href="#" className={styles['footer__link']}>О нашей продукции</a>
            </li>
          </ul>
        </div>
        <div className={styles['footer__social-network']}>
          <h3 className={styles["footer__title"]}>Социальные сети</h3>
          <div className={styles['footer__social-links']}>
            <a href="#" className={styles['footer__link']}>
              <Image
                width={20}
                height={20} src="/whatsapp.svg" alt="WhatsApp"/>
            </a>
            <a href="#" className={styles['footer__link']}>
              <Image
                width={20}
                height={20} src="/youtube.svg" alt="YouTube" />
            </a>
            <a href="#" className={styles['footer__link']}>
              <Image
                width={20}
                height={20} src="/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div className={styles['footer__legal']}>
          <h3 className={styles['footer__title"']}>ЮРИД ИНФОРМАЦИЯ</h3>
          <ul className={styles['footer__ul']}>
            <li className={styles['footer__li']}>
              <a href="#" className={styles['footer__link']}>Условия</a>
            </li>
            <li className={styles['footer__li']}>
              <a href="#" className={styles['footer__link']}>Отказ от ответственности</a>
            </li>
            <li className={styles['footer__li']}>
              <a href="#" className={styles['footer__link']}>Политика отмены</a>
            </li>
            <li className={styles['footer__li']}>
              <a href="#" className={styles['footer__link']}>Конфиденциальность</a>
            </li>
          </ul>
        </div>
        <div className={styles['footer__contact-details']}>
          <h3 className={styles['footer__title']}>КОНТАКТЫ</h3>
          <p className={styles['footer__text']}>
            Не стесняйтесь обращаться к нам по телефону, электронной почте или через нашего телеграм бота
          </p>
          <ul className={styles['footer__ul']}>
            <li className={styles['footer__ item']}>
              <div className={styles['footer__icon-wrapper']}>
                <Image
                  width={20}
                  height={20}
                  className={styles['footer__icon']}
                  src="/location.svg"
                  alt="Map"
                />
              </div>
              9748 Blossom Hill Rd undefined Lansing, Idaho 68545 United
              States
            </li>
            <li className={styles['footer__item']}>
              <div className={styles['footer__icon-wrapper']}>
                <Image
                  width={20}
                  height={20}
                  className={styles['footer__icon']}
                  src="/phone-call.svg"
                  alt="Phone call"
                />
              </div>
              Tel (business hours) : 269 1500 Tel (hotline) Monday -
              Saturday:<br />
              52-56-61-38 (08:00 am – 20:00 pm) Tel (hotline) Sunday:<br />
              52-56-61-38 (08:00 am – 14:00 pm)<br />
            </li>
            <li className={styles['footer__item']}>
              <div className={styles['footer__icon-wrapper']}>
                <Image
                  width={20}
                  height={20}
                  className={styles['footer__icon']}
                  src="/email.svg"
                  alt="Email"
                />
              </div>
              cherly.lawson@example.com
            </li>
          </ul>
        </div>
        <div className={styles['footer__contact-form']}>
          <h3 className={styles['footer__title']}>ОТПРАВИТЬ НАМ СООБЩЕНИЕ</h3>
          <form className={styles['footer__form']}>
            <div className={styles['footer__input-group']}>
              <input
                type="text"
                className={styles['footer__input']}
                placeholder="Ваше имя"
                name="name"
                required
              />
            </div>
            <div className={styles['footer__input-group']}>
              <input
                type="tel"
                className={styles['footer__input']}
                placeholder="Ваш номер"
                name="phone"
                required
              />
            </div>
            <textarea
              className={styles['footer__message']}
              placeholder="Сообщение..."
              name="message"
              required
            ></textarea>
            <button type="submit" className={styles['footer__button']}>Отправить</button>
            <span className={styles['footer__info']}>* Поля необходимо заполнить</span>
          </form>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;