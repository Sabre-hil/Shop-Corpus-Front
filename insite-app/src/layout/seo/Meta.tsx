import {FC, PropsWithChildren} from 'react';
import Head from 'next/head';
import { MetaTegsType } from '@/app/types/metaTegsType';

const getTitle = (title: string) => `${title} | insite company`

const Meta: FC<PropsWithChildren<MetaTegsType>> = ({title, description, children}) => {
  return (
    <>
    <Head>
      <title>{getTitle(title)}</title>
      {description? (
        <>
        <meta name='description' content={description} />
        <meta name='og:title' content={getTitle(title)} />
        <meta name='og:title:description' content={description} />
        <meta http-equiv="X-UA-Compatible" content="IE=9,10,11" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </>
        
      ) : (<meta name='robotes' content='all'/>)}
    </Head>
    {children}
    </>
  )
}

export default Meta;