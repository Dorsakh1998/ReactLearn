import { HeaderProps } from "../types/types";

const Header: React.FC<HeaderProps> = ({ shopName, cartCount }) => {
  return (
    <header
      className="sticky top-0 z-[1000] w-full
                       glass-strong
                       border-b border-white/5
                       shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
    >
      {/* Pattern پس‌زمینه */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* نور محیطی */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px]
                      bg-military-600/5 rounded-full blur-[100px] pointer-events-none"
      ></div>

      <div className="relative max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* لوگو و برند */}
          <div className="flex items-center gap-4">
            {/* لوگو */}
            <div className="relative w-12 h-12">
              <div
                className="absolute inset-0 bg-gradient-to-br from-military-500 to-military-700 
                              rounded-2xl blur-md opacity-50"
              ></div>
              <div
                className="relative w-full h-full glass rounded-2xl
                              flex items-center justify-center
                              border border-military-500/30
                              shadow-[0_4px_16px_rgba(107,133,85,0.3)]"
              >
                <svg
                  className="w-6 h-6 text-military-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
              </div>
            </div>

            {/* عنوان */}
            <div className="text-right">
              <h1
                className="text-2xl md:text-3xl font-black text-white tracking-tight
                             bg-gradient-to-l from-white via-white to-military-200 bg-clip-text text-transparent"
              >
                {shopName}
              </h1>
              <p className="text-[11px] text-zinc-500 font-medium tracking-wider uppercase mt-0.5">
                Premium Auto Parts
              </p>
            </div>
          </div>

          {/* Navigation و سبد خرید */}
          <div className="flex items-center gap-6">
            {/* منوی ناوبری - اختیاری */}
            <nav className="hidden md:flex items-center gap-1">
              <a
                href="#"
                className="px-4 py-2 text-sm font-semibold text-zinc-400 
                                     hover:text-white transition-colors duration-200"
              >
                محصولات
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm font-semibold text-zinc-400 
                                     hover:text-white transition-colors duration-200"
              >
                درباره ما
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm font-semibold text-zinc-400 
                                     hover:text-white transition-colors duration-200"
              >
                تماس
              </a>
            </nav>

            {/* سبد خرید */}
            <div className="relative group cursor-pointer">
              <div
                className="flex items-center gap-3 px-5 py-2.5 rounded-xl
                              glass
                              hover:bg-military-600/10
                              border border-white/5 hover:border-military-500/30
                              transition-all duration-300"
              >
                <div className="relative">
                  <svg
                    className="w-6 h-6 text-zinc-300 group-hover:text-military-300 
                                  transition-colors duration-300"
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

                  {cartCount > 0 && (
                    <div
                      className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1.5
                                    bg-gradient-to-r from-military-600 to-military-700
                                    rounded-full
                                    flex items-center justify-center
                                    border border-dark-850
                                    shadow-[0_2px_8px_rgba(107,133,85,0.5)]
                                    animate-pulse"
                    >
                      <span className="text-white text-[10px] font-bold font-en">
                        {cartCount > 9 ? "9+" : cartCount}
                      </span>
                    </div>
                  )}
                </div>

                <div className="hidden sm:block text-right">
                  <div className="text-white text-sm font-bold">سبد خرید</div>
                  <div className="text-zinc-500 text-[10px] font-medium font-en">
                    {cartCount} {cartCount === 1 ? "Item" : "Items"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
