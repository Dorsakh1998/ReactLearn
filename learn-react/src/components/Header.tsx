import { HeaderProps } from "../types/types";
import { useState, useEffect } from "react";

const Header: React.FC<HeaderProps> = ({ shopName, cartCount }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500
                        ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="max-w-[1800px] mx-auto px-6">
        <div
          className={`relative glass-strong rounded-3xl 
                         border border-white/5
                         transition-all duration-500
                         ${
                           scrolled
                             ? "shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
                             : "shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                         }`}
        >
          {/* Pattern خطوط جاده */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(
                     90deg,
                     transparent,
                     transparent 40px,
                     rgba(255,255,255,0.5) 40px,
                     rgba(255,255,255,0.5) 45px
                   )`,
              }}
            ></div>
          </div>

          {/* نور محیطی متحرک */}
          <div
            className="absolute -top-10 left-1/4 w-64 h-64 
                          bg-military-600/10 rounded-full blur-[80px] 
                          animate-pulse pointer-events-none"
          ></div>

          <div className="relative px-6 md:px-8 py-4 flex items-center justify-between gap-6">
            {/* بخش راست: لوگو و برند */}
            <div className="flex items-center gap-4">
              {/* لوگو متحرک */}
              <div className="relative group cursor-pointer">
                {/* چرخ دنده */}
                <div className="relative w-14 h-14">
                  {/* سایه */}
                  <div
                    className="absolute inset-0 bg-military-600/20 rounded-full blur-xl 
                                  group-hover:bg-military-500/30 transition-all duration-500"
                  ></div>

                  {/* چرخ دنده اصلی */}
                  <div
                    className="relative w-full h-full rounded-full
                                  bg-gradient-to-br from-dark-700 to-dark-800
                                  border-2 border-military-600/30
                                  flex items-center justify-center
                                  group-hover:rotate-90 transition-all duration-700
                                  shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]"
                  >
                    {/* دندانه‌های چرخ دنده */}
                    <svg
                      className="w-10 h-10 text-military-500/80 group-hover:text-military-400
                                    transition-colors duration-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                    </svg>

                    {/* نقطه مرکزی */}
                    <div
                      className="absolute w-3 h-3 bg-military-600 rounded-full
                                    shadow-[0_0_10px_rgba(107,133,85,0.6)]"
                    ></div>
                  </div>
                </div>
              </div>

              {/* نام برند */}
              <div className="text-right">
                <h1
                  className="text-xl md:text-2xl font-light text-white tracking-wide
                               relative inline-block group/text cursor-pointer"
                >
                  <span className="relative z-10">{shopName}</span>

                  {/* خط زیر متحرک */}
                  <span
                    className="absolute bottom-0 right-0 w-0 h-[2px] 
                                   bg-gradient-to-l from-military-500 to-transparent
                                   group-hover/text:w-full transition-all duration-500"
                  ></span>
                </h1>
                <p className="text-[10px] text-zinc-500 font-light tracking-[0.2em] uppercase mt-1">
                  Auto Parts & Accessories
                </p>
              </div>
            </div>

            {/* بخش مرکز: منوی ناوبری */}
            <nav className="hidden lg:flex items-center gap-1">
              {["محصولات", "برندها", "خدمات", "تماس"].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative px-5 py-2 text-sm font-light text-zinc-400 
                              hover:text-white transition-colors duration-300
                              group/link"
                >
                  <span className="relative z-10">{item}</span>

                  {/* دایره پس‌زمینه */}
                  <span
                    className="absolute inset-0 rounded-xl
                                   bg-military-600/0 group-hover/link:bg-military-600/10
                                   scale-0 group-hover/link:scale-100
                                   transition-all duration-300"
                  ></span>
                </a>
              ))}
            </nav>

            {/* بخش چپ: سبد خرید */}
            <div className="flex items-center gap-4">
              {/* دکمه سرچ */}
              <button
                className="hidden md:flex items-center justify-center
                                 w-10 h-10 rounded-xl
                                 glass border border-white/5
                                 text-zinc-400 hover:text-white
                                 hover:border-military-500/30
                                 transition-all duration-300
                                 group/search"
              >
                <svg
                  className="w-5 h-5 group-hover/search:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* سبد خرید */}
              <button
                className="relative flex items-center gap-3 px-4 py-2.5 rounded-xl
                                 glass border border-white/5
                                 hover:border-military-500/30
                                 transition-all duration-300
                                 group/cart"
              >
                {/* آیکون سبد */}
                <div className="relative">
                  <svg
                    className="w-6 h-6 text-zinc-300 group-hover/cart:text-military-300
                                  group-hover/cart:scale-110 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>

                  {/* Badge تعداد */}
                  {cartCount > 0 && (
                    <div
                      className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1
                                    bg-gradient-to-br from-military-500 to-military-700
                                    rounded-full
                                    flex items-center justify-center
                                    border border-dark-850
                                    shadow-[0_2px_8px_rgba(107,133,85,0.6)]
                                    group-hover/cart:scale-110 transition-transform duration-300"
                    >
                      <span className="text-white text-[9px] font-medium font-en">
                        {cartCount > 9 ? "9+" : cartCount}
                      </span>
                    </div>
                  )}
                </div>

                {/* متن */}
                <div className="hidden sm:block text-right">
                  <div className="text-white text-xs font-light">سبد خرید</div>
                  <div className="text-zinc-500 text-[9px] font-light font-en">
                    {cartCount} {cartCount === 1 ? "item" : "items"}
                  </div>
                </div>

                {/* خط عمودی */}
                <div className="hidden sm:block w-px h-8 bg-white/5"></div>

                {/* فلش */}
                <svg
                  className="hidden sm:block w-4 h-4 text-zinc-500 
                                group-hover/cart:text-military-400 
                                group-hover/cart:translate-x-0.5
                                transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
