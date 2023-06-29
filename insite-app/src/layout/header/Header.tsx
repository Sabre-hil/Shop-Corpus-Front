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
        <Image className={styles['header-logo']} src='/insite.svg' alt='Logo' width={120} height={34}/>
        </Link>
      <nav className={styles['header-block-links']}>
        <Link href='/' className={styles['header__link']} >Статьи</Link>
        <Link href='/' className={styles['header__link']}>Контакты</Link>
        <figure className={styles['header-search-block']}>
          <Image className={styles['header__search']} src='/search.svg' alt='Search' width={22} height={22}/>
          <input className={styles['header__input']} type="text" placeholder='Я ищу...' />
          <Image className={styles['header__clear']} src='/clear.svg' alt='Clear' width={17} height={17}/>
        </figure>
        
        </nav>
      <div className={styles['header-help-block']}>
        <nav className={styles['header-help-block__item']}>
          <Link href='/'><Image className={styles['header-help-block__item--image']} src='/location.svg' alt='Location' width={30} height={30}/>
          </Link>
          <Link href='/' className={styles['header-help-block__item--name']}>Адрес</Link>
        </nav>
        <figure id={styles.visible} className={styles['header-help-block__item']}>
          <Image className={styles['header-help-block__item--image']} src='/search.svg' alt='Search' width={19} height={19}/>
          <span className={styles['header-help-block__item--name']}>Поиск</span>
        </figure>
        <nav className={styles['header-help-block__item']}>
        <Link href='/'><Image className={styles['header-help-block__item--image']} src='/login.svg' alt='Login' width={30} height={30}/></Link>
          <Link href='/' className={styles['header-help-block__item--name']}>Войти</Link>
        </nav>
        <nav className={styles['header-help-block__item']}>
        <Link href='/'><Image className={styles['header-help-block__item--image']} src='/connect-with-us.svg' alt='Connect with us' width={30} height={30}/></Link>
          <Link href='/' className={styles['header-help-block__item--name']}>Связяться<br/>с нами</Link>
        </nav>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header