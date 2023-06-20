import { FC, PropsWithChildren } from 'react';
import { Roboto  }from 'next/font/google';
import Header from './header/Header';

const roboto = Roboto({weight: ['400', '700', '900'], subsets: ['latin'], variable: '--roboto' });

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      </>
  )
}

export default Layout