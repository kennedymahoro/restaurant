import Navbar from "@/components/nav";
import Footer from "@/components/footer";

export default function Page() { 
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <main className="mx-4">
        <h1 className="font-thinman my-20 text-4xl">Give Canlis.</h1>
        <p className="font-crimson text-sm my-4">Gift cards are available in any amount; we recommend $500 for a dinner for two. We process orders on the following business day. Please allow 5-7 days for shipping. Gift cards are non-refundable.</p>

        {/* Form goes here */}
        <div>
          <h5 className="font-roboto">Amount</h5>
          <div>
            <div className="flex border-b">
            <h1 className="text-4xl font-thinman">$</h1>
            <input className="outline-none" type="number" />
            </div>
            <div>
              <input type="submit" value="From: " />
              <input type="submit" value="To: " />
              <input type="submit" value="Message (OPTIONAL) " />
            </div>

            <div>
              <h5>Shipping</h5>
              <div>
                <input type="radio" value="SHIP TO ME" />
                <input type="radio" value="SHIP TO RECIPIENT" />
              </div>
              <h5>Payment</h5>

              <div>
                <input type="submit" value="NAME ON CARD " />
                <input type="number" value="CARD NUMBER " />
                <div>
                  <input type="number" value="EXP. (MM)" />
                  <input type="number" value="EXP. (YY) " />
                  <input type="number" value="SECURITY CODE " />
                </div>
              </div>
              <h5>Contact</h5>
              <div>
                <input type="email" value="YOUR EMAIL " />
                <input type="number" value="YOUR PHONE NUMBER " />
              </div>
            </div>
          </div>
          <button>Purchase</button>
          <p>Gift cards are processed on the following business day. Please allow 5-7 days for shipping.</p>
            
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
