import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-5 py-10 bg-slate-900 text-gray-200 m">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-[90%] mx-[auto] ">
        <div className=" p-5">
          <h1 className="text-3xl font-bold text-orange-400">Rumah makan Geprek</h1>
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nulla accusantium amet rerum?</p>
        </div>
        <div className="flex flex-col gap-2  p-5 font-light">
            <a href="">Home</a>
            <a href="">Menu</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>
        <div className=" p-5 flex flex-col gap-5">
            <div className="flex gap-5 items-center ">
                <FaInstagram className="text-gray-400" size={30}/>
                <h1>ilyas@gmail.com</h1>
            </div>
            <div className="flex gap-5 items-center">
                <FaFacebook className="text-gray-400" size={30}/>
                <h1>ilyas@gmail.com</h1>
            </div>
            <div className="flex gap-5 items-center">
                <FaWhatsapp className="text-gray-400" size={30}/>
                <h1>+62-8123-456-789</h1>
            </div>
           
        </div>
      </div>
      <div className="copyright w-[95%] h-[100px] mt-10 mx-[auto] border-t border-gray-600 flex justify-center items-center">
          <p>© 2026 Ayam Geprek Ilyas. All rights reserved.</p>

      </div>
      
    </footer>
  );
}
