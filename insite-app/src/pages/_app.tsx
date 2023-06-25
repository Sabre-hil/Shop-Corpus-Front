import type { AppProps } from 'next/app'
import { wrapper } from '../app/store/store';
import '../app/styles/globals.scss';
import '../app/styles/normalize.scss';
import '../app/styles/reset.scss';
import '../app/styles/variables.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(App);