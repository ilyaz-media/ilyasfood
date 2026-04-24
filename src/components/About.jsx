import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import img from "../assets/4.png";

export default function About() {
  return (
    <div
      id="about"
      className=" scroll-mt-20 mt-10 py-10 px-5 text-center text-gray-800 min-h-screen w-[80%] mx-[auto]">
      <h1 className="text-orange-400 font-bold ">ABOUT US</h1>
      <h1 className="font-bold text-3xl">Tentang Kami</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-10">
        <div className="flex justify-center flex-col gap-5" data-aos="fade-up">
          <p className=" text-start">
        IlyasFood menghadirkan ayam geprek dengan cita rasa khas, perpaduan ayam renyah dan sambal segar yang bisa disesuaikan. Kami berkomitmen menggunakan bahan berkualitas dan menjaga konsistensi rasa, agar setiap hidangan selalu lezat dan memuaskan.

          </p>
          <div className="flex gap-5">
            <FaInstagram size={40} />
            <FaFacebook size={40} />
            <FaLinkedin size={40} />
            <FaGithub size={40} />
          </div>
        </div>
        <div data-aos="fade-down">
          <div className="p-2 h-[400px] rounded-full bg-orange-400 overflow-hidden ">
            <img src={img} alt="" className="h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
