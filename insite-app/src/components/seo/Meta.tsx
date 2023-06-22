import Head from 'next/head';
import {FC, PropsWithChildren} from 'react';

const getTitle = (title: string) => `${title} | insite company`

export interface IMeta {
  title: string
  description?: string
}

const Meta: FC<PropsWithChildren<IMeta>> = ({title, description, children}) => {
  return (
    <>
    <Head>
      <title>{getTitle(title)}</title>
      {description? (
        <><meta name='description' content={description} />
        <meta name='og:title' content={getTitle(title)} />
        <meta name='og:title:description' content={description} /></>
        
      ) : (<meta name='robotes' content='noindex, nofollow'/>)}
    </Head>
    {children}
    </>
  )
}

export default Meta;