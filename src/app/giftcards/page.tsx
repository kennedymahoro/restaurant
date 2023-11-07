import Navbar from "@/components/nav";
import Footer from "@/components/footer";

export default function Page() { 
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <main>
        <h1>Give Canlis.</h1>
        <p>Gift cards are available in any amount; we recommend $500 for a dinner for two. We process orders on the following business day. Please allow 5-7 days for shipping. Gift cards are non-refundable.</p>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}