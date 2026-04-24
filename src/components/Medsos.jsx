import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { FaLocationPin, FaMessage } from "react-icons/fa6";

export default function Medsos() {
  return (
    <div className="bg-white rounded-3xl shadow-lg -translate-y-10 p-5 flex gap-5 items-start w-[90%] mx-[auto] justify-center flex-col md:flex-row text- text-sm">
      
      <div className="flex gap-5 text-center justify-center items-center ">
        <FaLocationPin size={20} className="text-red-400" />
         <p>Sukamurni, Cilawu, Garut Regency, West Java</p>
      </div>
      <div className="flex gap-5">
        <FaPhone size={20} className="text-green-400" />
                <p>+62-823-345-984.</p>
      </div>
      <div className="flex gap-5">
        <FaFacebook size={20} className="text-blue-400" />
        <p>IlyasFood_official</p>
      </div>
      <div className="flex gap-5">
        <FaInstagram size={20} className="bg-gradient-to-br from-red-500 to-red-400 rounded-full text-white" />
        <p>IlyasFood_official</p>
      </div>
    </div>
  );
}
