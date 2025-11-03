import { CartProps } from "../types/types";

const Cart: React.FC<CartProps> = ({
  cartItems,
  onRemoveFromCart,
  onClearCart,
  onUpdateQuantity,
}) => {
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div
        className="glass-strong rounded-3xl p-12 text-center
                      shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                      sticky top-36"
      >
        <div className="relative z-10">
          <div
            className="w-24 h-24 mx-auto mb-6
                          glass rounded-full flex items-center justify-center
                          shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
          >
            <span className="text-5xl opacity-30">🛒</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-3">
            سبد خرید خالی است
          </h3>

          <p className="text-zinc-400 text-sm leading-relaxed">
            محصولی به سبد خرید اضافه نشده است
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="glass-strong rounded-3xl p-6 
                    shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                    sticky top-36 max-h-[calc(100vh-160px)] overflow-y-auto
                    scrollbar-thin scrollbar-thumb-military-600 scrollbar-track-transparent"
    >
      {/* Header */}
      <div
        className="flex items-center justify-between pb-5 mb-5
                      border-b border-white/10"
      >
        <h2 className="text-xl font-bold text-white">سبد خرید</h2>
        <div
          className="px-4 py-2 rounded-full
                        bg-military-600/20 backdrop-blur-md
                        border border-military-500/30
                        text-military-300 text-sm font-bold"
        >
          <span className="font-en">{cartItems.length}</span> آیتم
        </div>
      </div>

      {/* محصولات */}
      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="group glass-hover rounded-2xl p-4
                          hover:border-military-500/30
                          transition-all duration-300 relative"
          >
            {/* دکمه حذف - بالا سمت چپ */}
            <button
              onClick={() => onRemoveFromCart(item.id)}
              className="absolute top-3 left-3 z-10
                         w-8 h-8 rounded-lg
                         flex items-center justify-center
                         bg-red-500/10 hover:bg-red-500/20
                         border border-red-500/30 hover:border-red-500/50
                         text-red-400
                         opacity-0 group-hover:opacity-100
                         transition-all duration-200
                         hover:scale-110"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex gap-4">
              {/* آیکون محصول */}
              <div
                className="w-16 h-16 shrink-0 rounded-xl
                              glass flex items-center justify-center
                              text-2xl"
              >
                {item.name.includes("روغن")
                  ? "⚙️"
                  : item.name.includes("فیلتر")
                  ? "🔩"
                  : item.name.includes("باتری")
                  ? "🔋"
                  : item.name.includes("تایر")
                  ? "⭕"
                  : "🔧"}
              </div>

              {/* اطلاعات */}
              <div className="flex-1 min-w-0 pr-8">
                <h4
                  className="text-white text-sm font-semibold mb-3 
                               line-clamp-2 leading-snug"
                >
                  {item.name}
                </h4>

                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-zinc-400 text-xs font-medium">
                    قیمت واحد
                  </span>
                  <span className="text-military-300 text-sm font-bold font-en">
                    {item.price.toLocaleString("en-US")}
                  </span>
                </div>

                {/* تعداد و قیمت کل */}
                <div className="flex items-center justify-between gap-3">
                  {/* دکمه‌های تعداد */}
                  <div
                    className="flex items-center gap-2
                                  glass rounded-xl px-2 py-1.5"
                  >
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                      className="w-7 h-7 rounded-lg
                                 flex items-center justify-center
                                 text-white font-bold text-base
                                 hover:bg-white/10
                                 disabled:opacity-20 disabled:cursor-not-allowed
                                 transition-all duration-200"
                    >
                      −
                    </button>

                    <span className="w-8 text-center text-white font-bold font-en text-sm">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                      disabled={item.quantity >= item.stock}
                      className="w-7 h-7 rounded-lg
                                 flex items-center justify-center
                                 text-white font-bold text-base
                                 hover:bg-white/10
                                 disabled:opacity-20 disabled:cursor-not-allowed
                                 transition-all duration-200"
                    >
                      +
                    </button>
                  </div>

                  {/* قیمت کل */}
                  <div className="text-left">
                    <div className="text-white font-bold text-base font-en">
                      {(item.price * item.quantity).toLocaleString("en-US")}
                    </div>
                    <div className="text-zinc-500 text-[10px]">تومان</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* جمع کل */}
      <div
        className="glass-strong rounded-2xl p-6
                      border border-military-500/30
                      shadow-[0_8px_32px_rgba(107,133,85,0.15)]
                      relative overflow-hidden"
      >
        <div className="relative z-10">
          {/* جمع */}
          <div
            className="flex items-center justify-between mb-6 pb-5
                          border-b border-white/10"
          >
            <span className="text-zinc-300 text-sm font-semibold">جمع کل</span>
            <div className="text-left">
              <div
                className="text-military-300 text-3xl font-bold font-en mb-1"
                style={{ textShadow: "0 0 20px rgba(107,133,85,0.5)" }}
              >
                {totalPrice.toLocaleString("en-US")}
              </div>
              <div className="text-zinc-500 text-xs font-medium">تومان</div>
            </div>
          </div>

          {/* دکمه‌ها */}
          <div className="space-y-3">
            <button
              className="w-full py-4 rounded-xl
                               bg-gradient-to-r from-military-600 to-military-700
                               hover:from-military-500 hover:to-military-600
                               text-white font-bold text-base
                               border border-white/20
                               shadow-[0_8px_24px_rgba(107,133,85,0.4)]
                               hover:shadow-[0_12px_32px_rgba(107,133,85,0.6)]
                               hover:-translate-y-0.5
                               active:translate-y-0
                               transition-all duration-300
                               relative overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              -translate-x-full group-hover:translate-x-full
                              transition-transform duration-700"
              ></div>

              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                تکمیل خرید
              </span>
            </button>

            <button
              onClick={onClearCart}
              className="w-full py-3 rounded-xl
                         bg-red-500/10 hover:bg-red-500/20
                         text-red-400 font-semibold text-sm
                         border border-red-500/30
                         hover:border-red-500/50
                         transition-all duration-300"
            >
              خالی کردن سبد
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
