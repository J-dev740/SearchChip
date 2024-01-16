import Image from 'next/image'
import NavBar from './components/navbar'
import LandingPage from './home'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col  items-center justify-between  bg-transparent">
      {/* home page  */}
      <LandingPage/>
    </main>
  )
}
