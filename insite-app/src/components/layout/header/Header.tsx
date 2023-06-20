import Link from 'next/link';
import { FC } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';

const Header: FC = () => {
  return (
    <header className={styles.header}>
    <div className="container">
      <div className={styles['header-block']}>
        <Link href='/'>
        <Image src='/insite.svg' alt='Logo' width={157} height={34}/>
        </Link>
      <div className={styles['header-block-links']}>
        <Link href='/' className={styles['header__link']} >Статьи</Link>
        <Link href='/' className={styles['header__link']}>Контакты</Link>
        <div className={styles['header-search-block']}>
          <Image className={styles['header__search']} src='/search.svg' alt='Search' width={22} height={22}/>
          <input className={styles['header__input']} type="text" placeholder='Я ищу...' />
          <Image className={styles['header__clear']} src='/clear.svg' alt='Clear' width={17} height={17}/>
        </div>
        
        </div>
      <div className={styles['header-help-block']}>
        <div className={styles['header-help-block__item']}>
          <Link href='/'><Image className={styles['header-help-block__item--image']} src='/location.svg' alt='Location' width={30} height={30}/>
          </Link>
          <Link href='/' className={styles['header-help-block__item--name']}>Адрес</Link>
        </div>
        <div className={styles['header-help-block__item']}>
        <Link href='/'><Image className={styles['header-help-block__item--image']} src='/login.svg' alt='Login' width={30} height={30}/></Link>
          <Link href='/' className={styles['header-help-block__item--name']}>Войти</Link>
        </div>
        <div className={styles['header-help-block__item']}>
        <Link href='/'><Image className={styles['header-help-block__item--image']} src='/connect-with-us.svg' alt='Connect with us' width={30} height={30}/></Link>
          <Link href='/' className={styles['header-help-block__item--name']}>Связяться с нами</Link>
        </div>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header