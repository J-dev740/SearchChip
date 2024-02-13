import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/navbar'
import SideBar from './components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  openGraph: {
    title: 'PrathibhaProductions',
    description: 'Welcome to PrathibhaProductions',
    url: 'https://prathibhaproductions.com/',
    siteName: 'PrathibhaProductions',
    images: [
      {
        url: 'https://www.marklogic.com/wp-content/uploads/2018/01/tribeca-film-festival-suitcase-facebook-1600x745.jpg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://www.marklogic.com/wp-content/uploads/2018/01/tribeca-film-festival-suitcase-facebook-1600x745.jpg',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {/* navbar */}
        <div className='bg-[url("./bg.webp")] bg-cover bg-center  w-full h-full  bg-no-repeat '>
        <div 
        // style={{backgroundImage:`url(https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=600)`}}
        className='relative bg-black bg-opacity-85 w-full h-fit   '>
          <SideBar/>
          <NavBar />
          {children}
        </div>

        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
      </body>
    </html>
  )
}
