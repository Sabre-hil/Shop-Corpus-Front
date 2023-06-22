import { FC, PropsWithChildren } from 'react';
import { Roboto  }from 'next/font/google';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/Meta';
import Header from './header/Header';
import Footer from './footer/Footer';
import Consultation from './consultation/Consultation';
import Activities from './activities/Activities';
import ArticlesFront from './articles-front/ArticlesFront';



const roboto = Roboto({weight: ['400', '700', '900'], subsets: ['latin'], variable: '--roboto' });

const Layout: FC<PropsWithChildren<IMeta>> = ({children, title, description}) => {
  return (
    <Meta title={title} description={description}>
      <Header/>
      {children}
      <ArticlesFront/>
      <Activities/>
      <Consultation/>
      <Footer/>
      </Meta>
  )
}

export default Layout