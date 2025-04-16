
import { motion } from "framer-motion";
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./components/nav";
import GetStarted from "./components/GetStarted.jsx";
import Login from "./components/login";
import Footer from './components/footer';
import Tagline from './components/tagline.jsx';
import Feature from './components/Feature.jsx';
import img from './assets/friendlandbg.jpg';
import mbimg from './assets/mbview.jpg';
import SecondPage from "./components/SecondPage.jsx";
import About from "./components/About.jsx";   
import ThirdPage from './components/ThirdPage.jsx';

// Importing pages from the footer folder
import Product from "./footer/Productt.jsx";
import HelpSupport from "./footer/HelpSupport.jsx";
import FAQ from "./footer/FAQ";
import PrivacyPolicy from "./footer/PrivacyPolicy";
import Terms from "./footer/Terms";
import ReportIssue from "./footer/ReportIssue";

const text = "MATCH THE MOMENT...";

function AnimatedText({ text }) {
  return (
    <motion.span 
      className="inline-block"
      initial="hidden"
      whileInView="visible"  
      viewport={{ once: false, amount: 0.5 }} 
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 20 }, 
            visible: { opacity: 1, y: 0 }, 
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}

      {/* Animated Heart ❤️ */}
      <motion.span
        className="inline-block ml-2"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: text.length * 0.1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        ❤️
      </motion.span>
    </motion.span>
  );
}

function App() {
  return (
    <div className="relative flex flex-col items-center min-h-screen">
      {/* Background Image (Fixed) */}
      <div id='landPage' className="fixed top-0 left-0 w-screen h-screen -z-10">
        <img src={window.innerWidth <= 768 ? mbimg : img}
          alt="Friends"
          className="vignette w-full h-full object-cover opacity-85"
        />
      </div>

      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Nav />
            <h1 className="text-center text-6xl sm:text-8xl lg:text-8xl pb-150 font-bold uppercase text-pink mt-16 sm:mt-20 drop-shadow-lg flex"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }} // Applied Helvetica Font
            >
              <AnimatedText text={text} />
            </h1>
            <Login />
            
            <div className='rounded-t-[10rem] flex w-screen h-screen bg-[#000000] gap-x-25 '>
              <SecondPage />
            </div>

            <Tagline />
            <ThirdPage/>
            <Footer />
          </>
        } />

        {/* About Page */}
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Feature/>}/>

        {/* Other Pages */}
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/product" element={<Product />} />
        <Route path="/support" element={<HelpSupport />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/report" element={<ReportIssue />} />
      </Routes>
    </div>
  );
}

export default App;