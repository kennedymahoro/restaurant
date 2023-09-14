import Navbar from "@/components/nav"
import Footer from "@/components/footer"
export default function Reservation(){
  const className_div = "my-10";
  const className_h6 = "";
  const className_p = "text-xs my-2 font-thin font-crimson sm:w-11/12 sm:text-base lg:w-6/12 "
  return(
  <div className="w-screen h-screen text-sm sm:mx-14">
      <Navbar />
      <h1 className="font-thinman text-5xl mt-64 lg:mt-0 lg:text-6xl lg:tracking-wide mb-56 mx-4  sm:text-8xl sm:mt-96">Reservations</h1>
      <div className={className_div}>
        <h6 className={className_h6}>GET A TABLE</h6>
        <p className={className_p}>Tables become available 3 months in advance, and can be made online through Tock.</p>
      </div>
      <button type="button" className="bg-black rounded-full text-primary mx-4 py-2 px-3"><a href="https://www.exploretock.com/canlis/">RESERVE ON TOCK</a></button>
      <div className={className_div}>
        <h6 className={className_h6}>DIETARY RESTRICTIONS</h6>
        <p  className={className_p}>To serve you as safely as we can, we ask that you indicate any serious dietary restrictions when booking your reservation. Please note that alliums, salt, soy, sugar, and seaweed cannot be removed from the menu at this time. We try our best to accommodate other allergies but do not modify dishes or recipes during service.</p>
        <p className={className_p}>Set menus for vegetarian, vegan, gluten-free, and dairy-free guests are always available. These menus are built by our kitchen team nightly and we are unable to share them ahead of time.</p>
        <p className={className_p}>For those with severe or complex dietary restrictions, please reach out directly to discuss if we can accommodate your needs before booking a reservation.</p>
      </div>
      <div className={className_div}>
        <h6 className={className_h6}>ATTIRE</h6>
        <p className={className_p}>We’re a very dressy restaurant. We recommend a suit or sport coat for men, and ask that no T-shirts, shorts, hats, or casual attire of any kind be worn. At Canlis you can’t be overdressed, so go big, look good and have fun with it!</p>
      </div>
      <div className={className_div}>
        <h6 className={className_h6}>CHILDREN</h6>
        <p className={className_p}>All ages are welcome in our dining room but we ask that children be prepared for a lengthy dining experience. Children prone to draw attention to themselves should stay home. We do not allow tablets or phones to entertain children at the table and we will request devices used in this manner to be turned off. Dining as a family is a part of the fabric of this place, but it is an art best practiced long before your reservation. For the communal sake of our dining room please choose wisely.</p>
      </div>
      <div className={className_div}>
        <h6 className={className_h6}>CANCELLATIONS</h6>
        <p className={className_p}>If you need to cancel a reservation for any reason you may do so forty-eight hours in advance and we will issue a full refund of your deposit. The reservation becomes non-refundable two days prior to your booking. Reservations changing to a smaller party size do not receive a refunded deposit. To recoup the deposit for a reservation decreasing in size you may cancel the reservation outside the 48-hour window and rebook a smaller table if one is available. We cannot make exceptions for COVID-19 diagnoses.</p>
      </div>

      <h6 className=" ">OTHER QUESTIONS</h6>
      <p className={`${className_p}`}>Please email <a href="mailto:reservations@canlis.com">reservations@canlis.com</a></p>

      <Footer /> 
    </div>
  )
}
