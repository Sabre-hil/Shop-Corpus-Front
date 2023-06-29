import { FC, PropsWithChildren } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Meta from './seo/Meta';
import Header from './header/Header';
import Footer from './footer/Footer';
import Consultation from './consultation/Consultation';
import ArticlesFront from './articles-front/ArticlesFront';
import { MetaTegsType } from '@/app/types/metaTegsType';
import SortPanel from './sort-panel/SortPanel';
import BreadCrumbs from './breadcrumbs/BreadCrumbs';

const Layout: FC<PropsWithChildren<MetaTegsType>> = ({children, title, description}) => {
  const router = usePathname();
  
  return (
    <Meta title={title} description={description}>
      <Header/>
      {router === '/'? <SortPanel/> : <BreadCrumbs/>}
      {children}
      {router === '/'? <ArticlesFront/>: <></>}
      {/* {router === '/'? <Map/> : <></>} */}
      {router === '/'? <Consultation/> : <></>}
      <Footer/>
      </Meta>
  )
}

export default Layout