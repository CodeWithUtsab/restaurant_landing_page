import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Testimonial from "./components/Testimonial/Testimonial";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
