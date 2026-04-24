import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import bg from '../assets/1.png'
import Typing from "../assets/animation/Typed";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div id="home" className="min-h-[70vh] pt-10 w-[100%] mx-[auto]" style={{backgroundImage:`url(${bg})`,backgroundPosition:'center', backgroundSize:'cover'}}>
    <div className="min-h-[70vh] p-10 bg-black/50 w-full " >
      <div className="flex justify-center items-center gap-5 min-h-screen md:min-h-[70vh]">
        <div className="p-5 h-full text-white  flex flex-col justify-center items-center relative ">        
          <h1 className=" text-7xl  lg:text-8xl font-bold  text-center" data-aos="fade-up">
            Fried Chicken <span className="text-orange-500">IlyasFood</span> 
          </h1>
          <h2 className=" text-2xl mt-5 text-center  " data-aos='fade-down'>
            Renyahnya Ngena, Rasanya Juara, Sekali Coba Pasti Balik Lagi!

          </h2>
          <div className="flex mt-2 gap-2">
            <a href="#menu" className="py-3 px-5 rounded-lg bg-orange-400 shadow-lg text-white">Pesan Sekarang</a>
            <a href="#menu" className="py-3 px-5 rounded-lg bg-slate-50 shadow-lg text-black">Hubungi kami</a>
          </div>
        </div>
     
      </div>
    </div>
    </div>


  );
}
