'use client'
import { useState } from "react"
export default function Navbar(props?){
	const Title_ = () => {
		if(!props.isHome){
			return (
				<h1> Canlis</h1>	
			)
		}

	}
	const [isToggle, setToggle] = useState(false)
	const Toggle = () => {
		setToggle(!isToggle)
	}	
	const SideBar = () => {
		if(isToggle){
			return (
				<ul className="absolute h-full w-full bg-black text-primary flex flex-col justify-center items-end top-0 right-0">
					<li className="absolute top-0 right-0 m-2">
						<button onClick={Toggle}>Close</button>	
					</li>
					<li>
						<a href="/reservations">RESERVATIONS</a>
					</li>
					<li>
						<a href="/giftcards">GIFT CARDS</a>
					</li>
					<li>
						<p>-</p>
					</li>
					<li>
						<a href="/menu">MENU</a>
					</li>
					<li>
						<a href="/ourstory">OUR STORY</a>
					</li>
					<li>
						<a href="/drinks">WINE & SPIRITS</a>
					</li>
					<li>
						<a href="/events">EVENTS</a>
					</li>
					<li>
						<a href="/careers">CAREERS</a>
					</li>
				</ul>
			)
		}
	}
	return(
		<nav className="text-black flex justify-between p-2 w-full">
			<Title_ />
			<button onClick={Toggle} className=" underline underline-offset-1 text-sm">Menu</button>	
			<SideBar />
		</nav>
	)
}

Navbar.defaultProps = {
	isHome: false,
}
