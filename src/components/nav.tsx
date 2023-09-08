'use client'
import { useState } from "react"
export default function Navbar(props?){
	const Title_ = () => {
		if(!props.isHome){
			return (
				<a href="/" className="font-crimson text-xl tracking-widest lg:text-2xl">CANLIS</a>	
			)
		}

	}
	const [isToggle, setToggle] = useState(false)
	const Toggle = () => {
		setToggle(!isToggle)
	}	
	const AA = (props) => {
		return (
			<li className="font-roboto tracking-wide my-6 mr-2 text-sm lg:text-base lg:m-1 lg:font-medium">
				<a href={props.href}>{props.text}</a>
			</li>
		)
	}
	const SideBar = () => {
		if(isToggle){
			return (
				<ul className="absolute h-full w-full bg-black text-primary flex flex-col justify-center items-end top-0 right-0">
					<li className="absolute top-0 right-0 m-2 ">
						<button onClick={Toggle} className="underline-offset-2 underline">Close</button>	
					</li>
					<AA href="/reservations"text="RESERVATIONS"/>
					<AA href="/giftcards" text="GIFT CARDS"/>

					<li>
						<p>-</p>
					</li>

						<AA href="/menu" text="MENU"/>
						<AA href="/ourstory"text="OUR STORY"/>
						<AA href="/drinks" text="WINE & SPIRITS"/>
						<AA href="/events" text="EVENTS"/>
						<AA href="/careers" text="CAREERS"/>
				</ul>
			)
		}
	}
	return(
		<nav className="text-black flex justify-between p-4 w-full lg:p-16">
			<Title_ />
			<button onClick={Toggle} className=" underline underline-offset-2 text-sm lg:hidden">Menu</button>	
			<SideBar />
				<ul className=" w-fit h-fit flex items-end flex-col invisible absolute lg:visible lg:static">
					<AA href="/reservations"text="RESERVATIONS"/>
					<AA href="/giftcards" text="GIFT CARDS"/>

					<li className="mr-1">
						<p>-</p>
					</li>

					<AA href="/menu" text="MENU"/>
					<AA href="/ourstory"text="OUR STORY"/>
					<AA href="/drinks" text="WINE & SPIRITS"/>
					<AA href="/events" text="EVENTS"/>
					<AA href="/careers" text="CAREERS"/>
				</ul>
		</nav>
	)
}

Navbar.defaultProps = {
	isHome: false,
}
