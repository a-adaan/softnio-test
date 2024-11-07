import ContactSection from "./component/contact/ContactSection";
import MobileProductDetails from "./component/details/MobileProductDetails";
import ProductDetails from "./component/details/ProductDetails";
import Footer from "./component/footer/Footer";
import Navbar from "./component/header/Navbar";
import DetailsSection from "./component/hero/DetailsSection";
import HeroSection from "./component/hero/HeroSection";
import Testimonial from "./component/testimonials/Testimonial";

function App() {
  return (
    <>
      <div className="bg-[#c1332a]">
        <div className="container ">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <DetailsSection />
      <ProductDetails />
      <MobileProductDetails />
      <ContactSection />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
