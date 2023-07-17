import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage";
import LearnMore from "@/components/LearnMore";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <Homepage />
      <LearnMore />
      <Footer />
    </div>
  );
}
