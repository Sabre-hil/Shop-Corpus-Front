import { FC } from 'react';
import Layout from '../layout/Layout';
import Furniture from '@/components/furniture/Furniture';

const App: FC = () => {

  return (
      <Layout title='INSITE | Лучшая мебель в Грозном | Лучшая кухня в Грозном | Лучшие шкафы в Грозном - по отличной цене - по хорошей цене' description='Кухня в Грозном - Шкафы в Грозном - Мебель в Грозном - ТВ зона - Спальня в Грозном - Гардеробная - По низким и доступным ценам - статьи как лучше оформить интерьер'>
        <Furniture />
      </Layout>
  );
};

export default App;