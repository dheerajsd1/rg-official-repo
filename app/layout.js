import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/common/header/page'
import Footer from '@/components/common/footer/page'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RG Consultancy',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/app/favicon.ico" />
        {/* <meta name="google-site-verification" content="QonOgQstR2HCVtbluPu-CBKFhTwCwFK5kJwW_zVADMM" /> */}
        <meta name="description" content={metadata.description} />
        {/* Add any other head elements here */}
      </Head>
      
      <body className={inter.className}>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  )
}
