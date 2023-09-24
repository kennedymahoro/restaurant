//import Image from 'next/image'
import Navbar from "@/components/nav"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className=" w-screen h-screen bg-primary">
     <Navbar isHome={false}/>      
      <Footer />
    </main>
  )
}
