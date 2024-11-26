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


        {/* Sponsers Brand Names*/}
        <section>
          <div className=" bg-black flex gap-[106px] px-[100px] py-[44px]">
            <img src="/versac.png" alt="Sponsers-1" />
            <img src="/zara.png" alt="Sponsers-2" />
            <img src="/gucci.png" alt="Sponsers-3" />
            <img src="/prada.png" alt="Sponsers-4" />
            <img src="/calvin.png" alt="Sponsers-5" />
          </div>
        </section>

        {/* Heading of new Arrival */}
        <p className="font-integral font-bold text-[48px] leading-[57.6px] text-center mt-[72px] mb-[55px]">NEW ARRIVALS</p>

        {/* New Arrival Products */}
        <section>
          <div className="flex mt-[55px] mx-[100px] gap-[20px] items-center">
            <div className=" space-y-4">
              <img className="w-[400px] rounded-3xl" src="/black-shirt.svg" alt="failed" />
              <div className="space-y-2" >
                <p className=" font-satoshi font-bold text-[20px] leading-[27px]">T-SHIRT WITH TAPE DETAILS</p>
                <img src="/4.5-star.svg" alt="failed" />
                <span className="font-satoshi font-bold text-[24px] leading-[32.4px]">$120</span>
              </div>
            </div>
            <div className="  space-y-4">
              <img className=" w-[350px]  rounded-[20px]" src="/blue-jeans.svg" alt="failed" />
              <div className="space-y-2" >
                <p className="font-satoshi font-bold text-[20px] leading-[27px]">SKINNY FIT JEANS</p>
                <img src="/3.5-star.svg" alt="failed" />
                <div className="flex gap-[10px] items-center">
                  <span className="font-satoshi font-bold text-[24px] leading-[32.4px]">$240</span>
                  <span className="text-[#00000066] font-satoshi font-bold text-[24px] leading-[32.4px] line-through">$260</span>
                  <button className="bg-[#FF33331A] py-[6px] px-[14px] rounded-[62px]">
                    <span className="font-satoshi font-medium text-[12px] leading-[16.2px] text-[#FF3333]">-20%</span>
                  </button>
                </div>
              </div>
            </div>
            <div className=" space-y-4">
              <img className=" w-[350px] h-[322px] rounded-[20px]" src="/check-red-shirt.svg" alt="failed" />
              <div className="space-y-2" >
                <p className="font-satoshi font-bold text-[20px] leading-[27px]">CHECKERED SHIRT</p>
                <img src="/4.5-star.svg" alt="failed" />
                <span className="font-satoshi font-bold text-[24px] leading-[32.4px]">$180</span>
              </div>
            </div>
            <div className=" space-y-4">
              <img className="w-[350px] h-[316px] rounded-[20px]" src="/red-black-t-shirt.svg" alt="failed" />
              <div className="space-y-2" >
                <p className="font-satoshi font-bold text-[20px] leading-[27px]">SLEEVE STRIPED T-SHIRT</p>
                <img src="/4.5-star.svg" alt="failed" />
                <div className="flex gap-[10px] items-center">
                  <span className="font-satoshi font-bold text-[24px] leading-[32.4px]">$130</span>
                  <span className="text-[#00000066] font-satoshi font-bold text-[24px] leading-[32.4px] line-through">$160</span>
                  <button className="bg-[#FF33331A] py-[6px] px-[14px] rounded-[62px]">
                    <span className="font-satoshi font-medium text-[12px] leading-[16.2px] text-[#FF3333]">-30%</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* View All tab*/}
        <section className="flex justify-center">
          <button className="mt-9 rounded-[62px] border border-rgba(0, 0, 0, 0.1) opacity-[10px] py-[16px] px-[54px] brgba(0, 0, 0, 0.1) gap-[12px]">
            <span className="font-satoshi font-medium text-[16px] leading-[21.6px]">View All</span>
          </button>
        </section>

        {/* line break tab*/}
        <div className=" border bottom-[1px] border-rgba(0, 0, 0, 0.1) mt-[64px] mb-[64px]  mx-[100px]" />

        {/* Heading of top selling */}
        <p className="font-integral font-bold text-[48px] leading-[57.6px] text-center ">TOP SELLING</p>

        {/* Top selling Products */}
        <section>
          <div className="flex  mt-[55px] mx-[100px] gap-[20px] items-center">
            <div className=" space-y-4">
              <img className="w-[350px] h-[322px] rounded-[20px]" src="/green.svg" alt="failed" />
              <div className="space-y-2" >
                <p className="font-satoshi font-bold text-[20px] leading-[27px]">VERTICAL STRIPED SHIRT</p>
                <img src="/5.0-star.svg" alt="failed" />
                <div className="flex gap-[10px] items-center">
                  <span className="font-satoshi font-bold text-[24px] leading-[32.4px]">$212</span>
                  <span className="text-[#00000066] font-satoshi font-bold text-[24px] leading-[32.4px] line-through">$232</span>
                  <button className="bg-[#FF33331A] py-[6px] px-[14px] rounded-[62px]">
                    <span className="font-satoshi font-medium text-[12px] leading-[16.2px] text-[#FF3333]">-20%</span>
                  </button>
                </div>
              </div>
            </div>
            <div className=" space-y-4">
              <img className=" w-[350px] h-[322px] rounded-[20px]" src="/orange.svg" alt="failed" />
              <div className="space-y-2" >
                <p className="font-satoshi font-bold text-[20px] leading-[27px]">COURAGE GRAPHIC T-SHIRT</p>
                <img src="/4.0-star.svg" alt="failed" />
                <span className="font-satoshi font-bold text-[24px] leading-[32.4px]">$145</span>
              </div>
            </div>
            <div className=" space-y-4">
              <img className=" w-[350px] h-[322px] rounded-[20px]" src="/short.svg" alt="failed" />
              <div className="space-y-2" >
                <p className="font-satoshi font-bold text-[20px] leading-[27px]">LOOSE FIT BERMUDA SHORTS</p>
                <img src="/3.0-star.svg" alt="failed" />
                <span className="font-satoshi font-bold text-[24px] leading-[32.4px]">$80</span>
              </div>
            </div>
            <div className=" space-y-4">
              <img className=" w-[350px] h-[322px] rounded-[20px]" src="/black.svg" alt="failed" />
              <div className="space-y-2" >
                <p className="font-satoshi font-bold text-[20px] leading-[27px]">FADED SKINNY JEANS</p>
                <img src="/4.5-star.svg" alt="failed" />
                <span className="font-satoshi font-bold text-[24px] leading-[32.4px]">$210</span>
              </div>
            </div>
          </div>
        </section>

        {/* View All tab 2*/}
        <section className="flex justify-center">
          <button className="mt-9  rounded-[62px] border border-rgba(0, 0, 0, 0.1) opacity-[10px] py-[16px] px-[54px] brgba(0, 0, 0, 0.1) gap-[12px]">
            <span className="font-satoshi font-medium text-[16px] leading-[21.6px]">View All</span>
          </button>
        </section>

        {/* Dress style sectiom*/}
        <section className=" space-y-5 mt-[80px] mx-[100px]  rounded-[40px] bg-[#F0F0F0] ">
          <p className="pt-[70px] font-integral font-bold text-[48px] leading-[57.6px] text-center">BROWSE BY DRESS STYLE</p>
          <div className=" flex gap-x-5 items-center pt-[64px]">
            <img className="ml-[64px]" src="/casual.svg" alt="failed" />
            <img src="/formal.svg" alt="failed" />
          </div>
          <div className="flex gap-x-5 items-center pb-[76px]">
            <img className="ml-[64px]" src="/party.svg" alt="failed" />
            <img src="/gym.svg" alt="failed" />
          </div>
        </section>


        {/* Happy customres*/}
        <p className=" mt-[80px] ml-[100px] font-integral font-bold text-[48px] leading-[57.6px]">OUR HAPPY CUSTOMERS</p>

        {/*customres reviews*/}
        <section>
          <div className="mt-10 ml-[100px] flex gap-x-5 pb-[170px]">
            <div className="w-[408px] border border-#0000001A rounded-[20px] py-[28px] px-[32px]">
              <img src="/5-star.svg" alt="failed" />
              <div className="flex gap-x-1 mt-[15px]">
                <p className="font-satoshi font-bold text-[20px] leading-[22px] align-text-top">Sarah M.</p>
                <img src="/green-tick.svg" alt="failed" />
              </div>
              <p className="mt-[12px] font-satoshi font-normal text-[16px] leading-[22px] w-[344px]">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
            <div className="w-[408px] border border-#0000001A rounded-[20px] py-[28px] px-[32px]">
              <img src="/5-star.svg" alt="failed" />
              <div className="flex gap-x-1 mt-[15px]">
                <p className="font-satoshi font-bold text-[20px] leading-[22px] align-text-top">Alex K.</p>
                <img src="/green-tick.svg" alt="failed" />
              </div>
              <p className="mt-[12px] font-satoshi font-normal text-[16px] leading-[22px] w-[344px]">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
            </div>
            <div className="w-[408px] border border-#0000001A rounded-[20px] py-[28px] px-[32px]">
              <img src="/5-star.svg" alt="failed" />
              <div className="flex gap-x-1 mt-[15px]">
                <p className="font-satoshi font-bold text-[20px] leading-[22px] align-text-top">James L.</p>
                <img src="/green-tick.svg" alt="failed" />
              </div>
              <p className="mt-[12px] font-satoshi font-normal text-[16px] leading-[22px] w-[344px]">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
            </div>
          </div>
        </section>



        <footer className="bg-[#F0F0F0] px-[101px] pt-40 relative">

          {/* Footer side */}
          <section className="w-[1240px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-[#000000] mx-[100px] rounded-[20px] flex gap-x-[152px]">
              <p className="text-white font-integral font-bold text-[40px] leading-[45px] w-[750px] pl-[64px] py-[43px]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
              <div className="py-[36px] px-[64px] space-y-3">
                <button className="bg-[#FFFFFF] rounded-[62px] py-3 px-4 space-x-3 w-[368px] flex gap-y-[14px]">
                  <img src="/message-logo.svg" alt="failed" />
                  <input type="text" placeholder="Enter your email address" className="text-[#00000066] font-satoshi font-normal text-[16px] leading-[21.6px] gap-x-3" />
                </button>
                <button className="text-black bg-[#FFFFFF] font-satoshi font-medium text-[16px] leading-[21.6px] py-3 px-[88px] rounded-[62px]"> Subscribe to Newsletter </button>
              </div>
            </div>
          </section>


          <section className="pb-[50px] flex justify-between">
            <div className="w-[248px] space-y-[35px]">
              <div className="space-y-6">
                <img src="/logo.png" alt="Logo" />

              </div>
            </div>
          </section>
        </footer>

      </main>
    </>
  );
}
