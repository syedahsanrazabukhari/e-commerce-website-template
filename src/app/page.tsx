export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sm:px-[100px] h-[34px] sm:h-[38px] bg-black flex justify-center sm:justify-between items-center">
        <p className="text-[#FFFFFF] font-satoshi font-normal text-[14px] leading-[18.9px] grow text-center">Sign up and get 20% off to your first order. <span className="underline decoration-solid decoration-underline text-[#FFFFFF]">Sign Up Now</span></p>
        <img src="/cross.svg" alt=" failed" className="max-sm:hidden" />
      </header>





      {/* Navbar */}
      <nav className="px-4 sm:px-[100px] py-6 flex justify-between items-center gap-x-10">
        <div className="flex items-center gap-x-4">
          <img src="/nav-hamburger.svg" alt="Hamburger" className="sm:hidden" />
          <img src="/logo.png" alt="Logo" title="Shop.co" />
        </div>


        <ul className="flex gap-x-6 items-center max-sm:hidden">
          <li className="flex gap-x-1 items-center">
            <span>Shop</span>
            <img src="/downward-arrow.svg" alt="Arrow-down" />
          </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>



        <div className="relative grow max-sm:hidden">
          <img src="/search.svg" alt="Search" className="absolute top-3 left-4" />
          <input type="text" className="py-3 pl-[52px] pr-4 rounded-full bg-[#F0F0F0] w-full" placeholder="Search for products..." />
        </div>

        <div className="flex items-center gap-x-3 sm:gap-x-[14px]">
          <img src="/cart.svg" alt="Cart" />
          <img src="/user.svg" alt="User" />
          <img src="/search-mobile.svg" alt="Search" className="sm:hidden" />
        </div>
      </nav>




      {/* Main */}
      <main>

        {/* Hero */}
        <section className="px-4 sm:px-[100px] py-10 sm:py-[113px] max-sm:h-[1000px] bg-cover bg-[-80px] hero-bg bg-[#F2F0F1]">
          <div className="sm:w-[577px] space-y-12">
            <div className="space-y-8">
              <h1 className="w-[315px] text-[36px] sm:text-6xl sm:w-[557px] sm:text-[64px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

              <p className="sm:w-[458px] text-[14px] leading-5 sm:opacity-60">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

              <button className="max-sm:w-full sm:px-[54px] sm:w-[210px] py-4 bg-black text-white rounded-full">Shop now</button>
            </div>

            <div className="flex max-sm:flex-wrap max-sm:justify-center max-sm:gap-y-3 sm:divide-x divide-[#0000001a]">
              <div className="pr-4 ml-8 sm:pr-8 max-sm:border-r border-[#0000001a]">
                <h2>200+</h2>
                <span className="max-sm:text-[12px] opacity-60">International Brands</span>
              </div>
              <div className="pl-8 sm:px-8">
                <h2>2,000+</h2>
                <span className="opacity-60">High-Quality Products</span>
              </div>
              <div className="sm:pl-8">
                <h2>30,000+</h2>
                <span className="opacity-60">Happy Customers</span>
              </div>
            </div>
          </div>
        </section>


        {/* Sponsers Brand Names*/}
        <section className="px-4 sm:px-[100px] py-10 sm:py-11 bg-black flex flex-wrap max-sm:gap-x-8 max-sm:gap-y-6 sm:justify-between">
          <img src="/versace.png" alt="versace" className="h-6 sm:h-8" />
          <img src="/zara.png" alt="zara" className="h-6 sm:h-8" />
          <img src="/gucci.png" alt="gucci" className="h-6 sm:h-8" />
          <img src="/prada.png" alt="prada" className="h-6 sm:h-8" />
          <img src="/calvin.png" alt="calvin" className="h-6 sm:h-8" />
        </section>

        {/* Heading of new Arrival */}
        <p className="font-integral font-bold text-[32px] leading-[38px] mt-[50px]  mb-[32px] sm:text-[48px] sm:leading-[57.6px] text-center sm:mt-[72px] sm:mb-[55px]">NEW ARRIVALS</p>

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
            <div className="max-sm:hidden space-y-4">
              <img className=" w-[350px] h-[322px] rounded-[20px]" src="/check-red-shirt.svg" alt="failed" />
              <div className="space-y-2" >
                <p className="font-satoshi font-bold text-[20px] leading-[27px]">CHECKERED SHIRT</p>
                <img src="/4.5-star.svg" alt="failed" />
                <span className="font-satoshi font-bold text-[24px] leading-[32.4px]">$180</span>
              </div>
            </div>
            <div className=" max-sm:hidden space-y-4">
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
          <button className="max-sm:w-full max-sm:mx-4 mt-9 rounded-[62px] border border-rgba(0, 0, 0, 0.1) opacity-[10px] py-[16px] px-[54px] brgba(0, 0, 0, 0.1) gap-[12px]">
            <span className="font-satoshi font-medium text-[16px] leading-[21.6px]">View All</span>
          </button>
        </section>

        {/* line break tab*/}
        <div className=" border bottom-[1px] border-rgba(0, 0, 0, 0.1) my-10 mx-4 sm:my-[64px]  sm:mx-[100px]" />

        {/* Heading of top selling */}
        <p className="font-integral font-bold text-[32px] leading-[38px] mt-[50px]  mb-[32px] sm:text-[48px] sm:leading-[57.6px] text-center sm:mt-[72px] sm:mb-[55px]">TOP SELLING</p>

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
            <div className="max-sm:hidden  space-y-4">
              <img className=" w-[350px] h-[322px] rounded-[20px]" src="/short.svg" alt="failed" />
              <div className="space-y-2" >
                <p className="font-satoshi font-bold text-[20px] leading-[27px]">LOOSE FIT BERMUDA SHORTS</p>
                <img src="/3.0-star.svg" alt="failed" />
                <span className="font-satoshi font-bold text-[24px] leading-[32.4px]">$80</span>
              </div>
            </div>
            <div className="max-sm:hidden  space-y-4">
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
        <section className=" space-y-5 mt-[80px] mx-[100px]  rounded-[40px] bg-[#F0F0F0]">
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
                <button className="text-black bg-[#FFFFFF] font-satoshi font-medium text-[16px]  w-[366px] h-[54px] leading-[21.6px] py-3 px-[88px] rounded-[62px]"> Subscribe to Newsletter </button>
              </div>
            </div>
          </section>


          <section className=" flex  ml-[70px] gap-x-[90px] items-center">
            <div className="w-[236px]">
              <img src="/logo.png" alt="Logo" />
              <p className="mt-[25px] font-satoshi font-normal text-[14px] leading-[22px] text-[#00000099]">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
              <img className="mt-[40px]" src="social.svg" alt="failed" />
            </div>
            <div className="flex flex-col gap-[26px]" >
              <span className="font-satoshi font-medium text-[16px] leading-[18px] tracking-[3px] text-black"> COMPANY</span>
              <div className="text-[#00000099] font-satoshi font-normal text-[16px] leading-[19px] flex flex-col gap-5">
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>
              </div>
            </div>
            <div className="flex flex-col gap-[26px] w-[140px]" >
              <span className="font-satoshi font-medium text-[16px] leading-[18px] tracking-[3px] text-black">HELP</span>
              <div className="text-[#00000099] font-satoshi font-normal text-[16px] leading-[19px] flex flex-col gap-5">
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div className="flex flex-col gap-[26px] w-[130px]" >
              <span className="font-satoshi font-medium text-[16px] leading-[18px] tracking-[3px] text-black"> FAQ</span>
              <div className="text-[#00000099] font-satoshi font-normal text-[16px] leading-[19px] flex flex-col gap-5">
                <p>Account</p>
                <p>Manage Deliveries</p>
                <p>Orders</p>
                <p>Payments</p>
              </div>
            </div>
            <div className="flex flex-col gap-[26px] w-[154px]" >
              <span className="font-satoshi font-medium text-[16px] leading-[18px] tracking-[3px] text-black"> Resources</span>
              <div className="text-[#00000099] font-satoshi font-normal text-[16px] leading-[19px] flex flex-col gap-5">
                <p>Free eBooks</p>
                <p>Development Tutorial</p>
                <p>How to - Blog</p>
                <p>Youtube Playlist</p>
              </div>
            </div>

          </section>
          <div className="border bottom-[1px] border-rgba(0, 0, 0, 0.1)  mt-[50px] mb-[25px]  mx-[50px] " />
          <div className="mx-[60px] pb-[88px] flex justify-between items-center">
            <p className="text-[#00000099] font-satoshi font-normal text-[14px] leading-[18.9px] ">Shop.co © 2000-2023, All Rights Reserved</p>
            <img src="/payment.svg" alt="failed" />
          </div>
        </footer>

      </main>
    </>
  );
}
