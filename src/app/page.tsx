import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="px-[100px] h-[38px] bg-black flex justify-between items-center">
        <p className="text-[#FFFFFF] font-satoshi font-normal text-[14px] leading-[18.9px] grow text-center">Sign up and get 20% off to your first order. <span className="underline decoration-solid decoration-underline text-[#FFFFFF]">Sign Up Now</span></p>
        <img className="" src="/cross.svg" alt=" failed" />
      </header>






      {/* Navbar */}
      <nav className="px-[100px] py-6 flex justify-between items-center gap-x-10">
        <img src="/logo.png" alt="Logo" title="Shop.co" />

        <ul className="flex gap-x-6 items-center">
          <li className="flex gap-x-1 items-center">
            <span>Shop</span>
            <img src="/downward-arrow.svg" alt="Arrow-down" />
          </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>

        <div className="relative grow">
          <img src="/search.svg" alt="Search" className="absolute top-3 left-4" />
          <input type="text" className="py-3 pl-[52px] pr-4 rounded-full bg-[#F0F0F0] w-full" placeholder="Search for products..." />
        </div>

        <div className="flex items-center gap-x-[14px]">
          <img src="/cart.svg" alt="Cart" />
          <img src="/user.svg" alt="User" />
        </div>
      </nav>




      {/* Main */}
      <main>

        {/* Hero */}
        <section className="px-[100px] py-[113px] bg-cover bg-[-80px]" style={{ backgroundImage: "url('./hero-bg.png')" }}>
          <div className="w-[577px] space-y-12">
            <div className="space-y-8">
              <h1 className="text-6xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

              <p className="opacity-60">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

              <button className="px-[54px] py-4 bg-black text-white rounded-full">Shop now</button>
            </div>

            <div className="flex divide-x divide-[#0000001a]">
              <div className="pr-8">
                <h2>200+</h2>
                <span className="opacity-60">International Brands</span>
              </div>
              <div className="px-8">
                <h2>2,000+</h2>
                <span className="opacity-60">High-Quality Products</span>
              </div>
              <div className="pl-8">
                <h2>30,000+</h2>
                <span className="opacity-60">Happy Customers</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
