export default function Higlight() {
  return (
    <div id="hightlight" className="min-h-[50vh] mt-20 w-[90%] mx-[auto] mb-10 text-center">
      <h1 className="text-orange-600 font-bold">HIGHTLIGHT</h1>
      <h1 className="text-3xl font-bold">Kenapa Harus memilih Ayam Geprek Kami ?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
        {/* left */}
        <div className=" gap-10 bg-orange-600 rounded-3xl  relative h-full" data-aos='fade-up'>
            <div className="box bg-orange-500 p-5 absolute -translate-y-8 -translate-x-3 rounded-3xl text-white font-bold text-xl">100% fresh</div>          
         <img src="src\assets\2.jpg" alt="" className=" w-full h-[100%] object-cover rounded-3xl" />
        </div>
        {/* center */}
           <div className="p-5 mb-10 " data-aos="fade-up" data-aos-delay='400'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus exercitationem corrupti cumque hic mollitia, magni
          explicabo vel quas! Quae ipsam sit quaerat itaque. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Dicta dolorum natus mollitia
          numquam animi unde magni illo excepturi voluptatum veniam?
          <div className=" grid grid-cols-3 gap-2 mt-5">
            
            <div className="p-3 bg-orange-400 text-white font-bold">
               <span className="text-3xl">20K+</span> <br /> Pelanggan Puas
            </div>
            <div className="p-3 bg-orange-400 text-white font-bold">
               <span className="text-3xl">50K+</span> <br /> Porsi Terjual
            </div>
            <div className="p-3 bg-orange-400 text-white font-bold">
               <span className="text-3xl">4.9+</span> <br /> Ranting Pelanggan
            </div>
          </div>
        </div>

         {/* right */}
        <div className=" gap-10 bg-orange-600 rounded-3xl  relative h-[100%] " data-aos="fade-up" data-aos-delay='600'>
            <div className="box bg-orange-500 p-5 absolute -translate-y-8 right-0 translate-x-3 rounded-3xl text-white font-bold text-xl">Bikin nagih !</div>          
         <img src="src\assets\1.png" alt="" className=" w-full h-[100%] object-cover rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
