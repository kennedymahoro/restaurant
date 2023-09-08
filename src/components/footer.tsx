export default function Footer(){
	const year = new Date().getFullYear();
	return(
		<footer>
			<section>
				<p>Get eary access and a peek behind the scenes.</p>
				<a>Sign up for the Canlis newsletter.</a>
			</section>
			<p>(200) 200-3000</p>
			<p>{`© 1950 - ${year} Canlis`}</p>
		</footer>	
	)
}
