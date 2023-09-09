
import Navbar from "@/components/nav"
import Image from "next/image"

import plate_duck from '/public/plate_duck.jpg'
import plate_purple from '/public/plate_purple.jpg'

export default function Menu(){
  return (
    <div className="px-4">
      <Navbar />
      <section className=" mt-48">
        <h1 className="text-5xl font-thinman tracking-wider my-5">Menu</h1>
        <p className="font-crimson text-sm">We're serving a multi-course dining experience where you choose three of the courses (and we like to surprise you with several others).</p> 
        <p className="font-crimson text-sm my-4">$175</p>
      </section>
      <div>
        <Image src={plate_duck} alt="image of food on a plate" />
        <Image src={plate_purple} alt="image of food on a plate" />
      </div>
    </div>
  )
}
