import Image from "next/image"
import Navbar from "@/components/nav"
import Footer from "@/components/footer"

import plate_duck from '/public/plate_duck.jpg'
import plate_purple from '/public/plate_purple.jpg'
import plate_beef from '/public/plate_beef.jpg'
import plate_fish from '/public/plate_fish.jpg'

export default function Menu(){

  const Menu_Section_items = (props) => {
    return(
      <div className="my-7">
        <p className="font-roboto text-sm mb-1">{props.name}</p>
        <p className="text-xs">{props.items}</p>
      </div>
    )
  }

  const Menu_Section = (props) => {
    return (
      <section className="mx-5 my-16">
        <h6 className="italic font-crimson my-4">{props.title}</h6>
        <Menu_Section_items name={props.name1} items={props.item1} />
        <Menu_Section_items name={props.name2} items={props.item2} />
        <Menu_Section_items name={props.name3} items={props.item3} />
      </section>
    )
  }

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section className=" mt-48 mb-60 mx-5 lg:mx-36 sm:mx-16 lg:mt-0 lg:relative top-0">
        <h1 className="text-5xl font-thinman tracking-wider mt-5 md:text-8xl md:mt-0">Menu</h1>
        <p className="font-crimson text-sm my-6 sm:w-8/12 lg:w-6/12">We're serving a multi-course dining experience where you choose three of the courses (and we like to surprise you with several others).</p> 
        <p className="font-crimson text-sm mb-4">$175</p>
      </section>
      <div className="w-screen h-auto lg:flex lg:justify-center">
        <Image src={plate_duck} alt="image of food on a plate"  />
        <Image src={plate_purple} alt="image of food on a plate" />
      </div>
      <div className="grid place-items-center w-screen">
        <hr className="divide-solid divide-y-4 w-9/12  my-9 divide-black" />
      </div>
      <div className="lg:flex lg:justify-center">
        <section className="lg:flex lg:flex-col lg:justify-center">
          <Menu_Section title="One" name1="SABLEFISH" item1="hazelnut, corn, kombu"
                                    name2="ARTICHOKE" item2="wildflower, spinach walnut"
                                    name3="DUCK" item3="summer squash, blueberry, dashi"/>

          <Menu_Section title="Two" name1="HALIBUT" item1="snap pea, geoduck, nori"
                                    name2="EGGPLANT ZURITA" item2="Tsuyahime rice, cherry tomato, cucumber"
                                    name3="COULETTE" item3="Walla Walla onion, oyster, chive"/>

          <Menu_Section title="Three" name1="SMOKED CACAO" item1="nougatine, milk ice cream"
                                    name2="STRAWBERRY" item2="rhubarb, white chololate, kasu"
                                    name3="DRIED PERSIMMON" item3="devonshire cream, vermouth, yuzu"/>


        </section>
      </div>
        <div className="text-xs mx-4 my-10 font-crimson text-center ">
          <p>A 20% service charge will be added to your final bill and is retained by Canlis. No additional gratuity is expected.
          </p>
          <p className="mt-2">
            * Eating raw or undercooked ingredients can increase your risk of foodborne illness. It may also increase your chances of having a great time.
          </p>
        </div>

      <div className="w-screen h-auto lg:flex lg:justify-center">
        <Image src={plate_beef} alt="a plate of food, beef" />
        <Image src={plate_fish} alt="a plate of food, fish" />
      </div>
      <Footer />
    </div>
  )
}
