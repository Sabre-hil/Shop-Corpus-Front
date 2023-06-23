import '@/styles/globals.scss';
import '@/styles/normalize.scss';
import '@/styles/variables.scss';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store, wrapper } from '../store/store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  )
}

export default wrapper.withRedux(App);