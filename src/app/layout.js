import { Header } from './components/surfaces/Header'
import { Montserrat } from '@next/font/google'
import './globals.scss'
import { Footer } from './components/surfaces/Footer'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: ['--font-montserrat']
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body className={`${montserrat.className}`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
