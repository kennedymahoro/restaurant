export default function Footer(){
	const year = new Date().getFullYear();
	return(
		<footer className="text-xs font-crimson mx-4 my-7">
			<p className="mb-2">Get eary access and a peek behind the scenes. <a className="underline underline-offset-1" href="/newsletter"> Sign up for the Canlis newsletter.</a> </p>
			<p className="font-semibold mb-2">(200) 200-3000</p>
			<p className="pb-8">{`© 1950 - ${year} Canlis`}</p>
		</footer>	
	)
}
