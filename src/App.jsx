import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Higlight from "./components/Higlight";
import Info from "./components/Info";
import About from "./components/About";
import Medsos from "./components/Medsos";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { formatRupiah } from "./helper/formatRupiah";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [qty, setQty] = useState(1);
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    telepon: "",
    alamat: "",
  });

  // aos
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // remove from cart
  const removeFromCart = (id) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart(filteredCart);
  };

  // total bayar
  const totalBayar = cart.reduce((total, item) => {
    return total + item.qty * item.harga;
  }, 0);

  // =============== open form =======================

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const noWa = "6282129546021";

    const listProduk = cart
      .map((item) => `-${item.nama} X ${item.qty}`)
      .join("\n");

    const text = `======= Daftar Pesanan Baru =======
    Nama : ${form.nama}
    Telepon : ${form.telepon}
    Alamat : ${form.alamat}   
    Total harga : ${formatRupiah(totalBayar)}
    `;
    const url = window.open(
      `https://wa.me/${noWa}?text=${encodeURIComponent(text)}`,
    );
    alert('☑️ pesanan sedang di proses')
    setForm('')
    setOpenCart(false)
    setOpenForm(false)
  };

  return (
    <div className=" min-h-screen font-poppins w-full">
      <Navbar openCart={openCart} setOpenCart={setOpenCart} cart={cart} setCart={setCart} />
      <Hero />
      <Medsos />
      {/* <Banner/> */}
      <Higlight />
      <Menu
        qty={qty}
        setQty={setQty}
        cart={cart}
        setCart={setCart}
        openCart={openCart}
        setOpencart={setOpenCart}
      />
      <About />
      <Info />
      <Footer />

      {/* openCart */}
      {openCart && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center p-5"
          onClick={() => setOpenCart(false)}>
          <div
            className="bg-slate-200 p-5 rounded-3xl h-[90vh] top-5 overflow-y-auto w-full md:w-[80%] grid  grid-cols-1 md:grid-cols-2 gap-10 relative"
            onClick={(e) => e.stopPropagation()}>
            <div className=" ">
              <h1 className="text-2xl font-bold p-5">Checkout</h1>

              {cart.length === 0 ? (
                <div className="flex justify-center items-center h-full"></div>
              ) : (
                cart.map((item) => {
                  return (
                    <div className="bg-white p-2 rounded-2xl shadow-lg flex mb-2  ">
                      <img
                        src={item.gambar}
                        className="w-[100px] h-[100px] object-cover"
                        alt=""
                      />
                      <div className="px-5">
                        <h1 className="font-bold">{item.nama}</h1>
                        <h1> jumlah :{item.qty}</h1>
                        <h1>{formatRupiah(item.harga)}</h1>
                        <button
                          className="bg-red-500 text-white px-5"
                          onClick={() => removeFromCart(item.id)}>
                          Batalkan
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <div className=" grid grid-rows-2 bg-white rounded-lg">
              <div className="p-10 md:p-20">
                {cart.length === 0 ? (
                  <div className="flex justify-center h-full  items-center">
                    <p>Keranjang masih kosong</p>
                  </div>
                ) : (
                  cart.map((item) => {
                    return (
                      <ul className="text-gray-700 ">
                        <li className="text-xl list-disc">
                          {item.nama} X {item.qty}
                        </li>
                      </ul>
                    );
                  })
                )}
              </div>
              <div className=" p-10">
                <hr />
                <h1 className="text-2xl font-bold mt-5">Total Bayar :</h1>
                <h1 className="text-4xl font-bold">
                  {formatRupiah(totalBayar)}
                </h1>
                <div className="flex gap-2">
                  <button
                    onClick={() => setOpenForm(true)}
                    className="bg-orange-600 px-5 py-2 rounded-lg shadow-lg text-white mt-5">
                    Pesan Sekarang
                  </button>
                  <button
                    onClick={() => setOpenCart(false)}
                    className="bg-red-500 px-5 py-2 rounded-lg shadow-lg text-white mt-5">
                    Kembali
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* open form */}
      {openForm && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center"
          onClick={() => setOpenForm(false)}>
          {" "}
          <div
            className="bg-white h-screen w-[100%]  "
            onClick={(e) => e.stopPropagation()}>
            <h1 className="text-2xl font-bold mt-[100px] text-center">
              Konfirmasi Pesanan
            </h1>
            <div className="p-10  flex justify-center">
              <form
              onSubmit={handleSubmit}
                action=""
                className="w-full md:w-[80%] rounded-lg bg-slate-200 p-5 md:p-10 flex flex-col gap-2">
                <div>
                  <label htmlFor="">Nama :</label>
                  <input
                    type="text"
                    placeholder="masukan nama anda"
                    className="w-full bg-slate-300 px-10 py-2 rounded-lg"
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="">Telepon :</label>
                  <input
                    type="text"
                    placeholder="masukan no telepon"
                    className="w-full bg-slate-300 px-10 py-2 rounded-lg"
                    name="telepon"
                    value={form.telepon}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="">Alamat :</label>
                  <textarea
                    type="text"
                    placeholder="masukan alamat lengkap"
                    className="w-full bg-slate-300 px-10 py-2 rounded-lg"
                    name="alamat"
                    value={form.alamat}
                    onChange={handleChange}
                  />
                </div>
                <p className="text-sm">*harap isi alamat lengkap</p>
                <div className="flex flex-col gap-3 md:flex-row mt-10">
                  <button type="submit" className="text-white px-5 bg-orange-500 py-2 rounded-lg shadow-lg disabled:bg-gray-500" disabled={!form.nama || !form.telepon|| !form.alamat}>
                    Mulai Pesanan
                  </button>
                  <button
                    onClick={() => setOpenForm(false)}
                    className="text-white px-5 bg-red-500 py-2 rounded-lg shadow-lg">
                    Batalkan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
