import { FaLocationPin } from "react-icons/fa6";

export default function Info() {
  return (
    <div id="info" className="mt-10 text-center text-white bg-gray-900 py-10">
      <h1 className="font-bold text-orange-400">INFO</h1>
      <h1 className="text-3xl font-bold">Info Lengkap</h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-2 mx-[auto] w-[90%]">
        <div className="px-5 ">
          <div className=" h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31657.070781080063!2d107.9160864476074!3d-7.338862234896818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1776797332423!5m2!1sen!2sid"
             loading="lazy"
              className="w-full h-full rounded-2xl"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="mt-2 flex gap-3 px-5 py-2 items-center bg-slate-800">
            <FaLocationPin size={40} className="text-orange-500"/>
            <p>Sukamurni, Cilawu, Garut Regency, West Java</p>
          </div>
        </div>
        <div className="px-5 ">
          <form
            action=""
            className=" border border-slate-400 px-5 py-10 rounded-2xl shadow-lg text-start">
            <label htmlFor="">Email :</label>
            <input
              type="text"
              className="w-full px-5 py-2 rounded-full bg-slate-800 mt-2"
              placeholder="Masukan email kamu"
            />
            <label htmlFor="">Pesan :</label>
            <textarea
              type="text"
              className="w-full px-5 py-2 rounded-2xl bg-slate-800 mt-2 h-[100px]"
              placeholder="Masukan Pesan"
            />
            <button className="bg-orange-600 px-5 py-2 text-white mt-5 rounded-lg">
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
