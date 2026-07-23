import CustomerRating from "@/components/CustomerRating";
import FaqSection from "@/components/FaqSection";
import HomePage from "@/components/HomePage";
import LogoMarquee from "@/components/LogoMarquee";


export default function Home() {
  return (
    <div className="">
  <HomePage></HomePage>
  <LogoMarquee></LogoMarquee>
  <CustomerRating></CustomerRating>
  <FaqSection></FaqSection>
    </div>
  );
}
