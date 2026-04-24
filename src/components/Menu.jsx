import { useState } from "react";
import { menus } from "../data/menu";
import { FaCartShopping } from "react-icons/fa6";
import { formatRupiah } from "../helper/formatRupiah";

export default function Menu({
  qty,
  setQty,
  openCart,
  setOpencart,
  cart,
  setCart,
}) {
  const [selectedProduk, setSelectedProduk] = useState(null);
  const [openBuy, setOpenBuy] = useState(false);
  
  // openbuy
  const handleOpenBuy = (item) => {
    setOpenBuy(true);
    setSelectedProduk(item);
    setQty(1);
  };

  // openCart
  const addTocart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty +1 } : i,
        );
      } else {
        return [...prevCart, { ...item, qty }];
      }
    });
    setOpencart(true)
    setOpenBuy(false)
  };

  const addtocart2 = (item)=>{
     setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty +1 } : i,
        );
      } else {
        return [...prevCart, { ...item, qty }];
      }
    });
    alert('☑️ berhasil ditambahkan ke keranjang')
  }

  return (
    <section id="menu" className="text-center text-gray-800 mt-10   py-10 min-h-screen scroll-mt-10">
      <h1 className="font-bold text-xl text-red-400">MENUS</h1>
      <h1 className="font-bold e text-3xl">Daftar Menu</h1>
      <p className="font-light w-[500px]  m-[auto]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        alias,recusandae.
      </p>
      <div className="mt-10 w-[90%] m-[auto]  rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {menus.map((item) => {
          return (
            <div className="text-start  bg-white  shadow-lg flex flex-col gap-2 rounded-2xl " data-aos='fade-up'>
              <img
                src={item.gambar}
                alt=""
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className=" flex flex-col gap-2 px-6 py-2">
                <h1 className="font-bold ">{item.nama}</h1>
                <h1 className="text-orange-400 font-semibold text-xl">
                  {formatRupiah(item.harga)}
                </h1>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleOpenBuy(item)}
                    className="bg-orange-400 px-5 text-white rounded-lg shadow-lg py-2">
                    Pesan{" "}
                  </button>
                  <button onClick={()=> addtocart2(item)} className=" px-5 textorange-400 text-orange-500 border-2 border-orange-400 rounded-lg shadow-lg py-2">
                    <FaCartShopping />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProduk && openBuy && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-20  " onClick={()=> setOpenBuy(false)}>
          <div className="bg-white p-10 w-[90%] max-h-[90vh] z-20 text-start overflow-y-auto rounded-xl" onClick={(e)=> e.stopPropagation()}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 ">
              <div className="bg-white  py-10 px-2">
                <img
                  src={selectedProduk.gambar}
                  className="h-[200px] md:h-[400px] rounded-2xl shadow-lg w-full object-cover"
                  alt=""
                />
              </div>
              <div className="bg-white  flex">
                <div className="flex flex-col justify-center ">
                  <h1 className="text-2xl">{selectedProduk.nama}</h1>
                  <h1 className="text-3xl font-bold mt-2">
                    {formatRupiah(selectedProduk.harga)}
                  </h1>
                  <div>
                    {/* qty */}
                    <div className="p-2">
                      <h1 className="text-2xl mb-2">qty :</h1>
                      <div className="flex gap-2">
                        <button
                          className="bg-slate-200 px-2"
                          onClick={() => qty > 1 && setQty(qty - 1)}>
                          -
                        </button>
                        {qty}
                        <button
                          className="bg-slate-200 px-2"
                          onClick={() => setQty(qty + 1)}>
                          +
                        </button>
                      </div>
                    </div>

                    {/* beli */}
                    <div className="flex gap-2">
                      <button
                        className="bg-orange-500 text-white rounded-lg shadow-lg px-5 py-2 mt-5"
                        onClick={() => addTocart(selectedProduk)}
                        >
                        Checkout
                      </button>
                      <button
                        onClick={() => setOpenBuy(false)}
                        className="bg-red-500 text-white rounded-lg shadow-lg px-5 py-2 mt-5">
                        Batalkan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
