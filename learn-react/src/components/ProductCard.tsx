import { ProductCardProps } from "../types/types";

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const isOutOfStock = product.stock === 0;

  const getProductIcon = (productName: string) => {
    if (productName.includes("روغن")) return "⚙️";
    if (productName.includes("فیلتر")) return "🔩";
    if (
      productName.includes("لنت") ||
      productName.includes("ترمز") ||
      productName.includes("دیسک")
    )
      return "⭕";
    if (productName.includes("شمع")) return "⚡";
    if (productName.includes("باتری")) return "🔋";
    if (productName.includes("یخ") || productName.includes("رادیاتور"))
      return "❄️";
    if (productName.includes("واکس")) return "✨";
    if (productName.includes("شیشه")) return "💧";
    if (productName.includes("تایر")) return "⭕";
    return "🔧";
  };

  return (
    <div
      className="group relative h-full flex flex-col glass rounded-3xl p-6
                    border border-white/10 
                    shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]
                    hover:glass-hover hover:border-military-500/40 
                    hover:shadow-[0_20px_60px_rgba(93,115,71,0.3)]
                    hover:-translate-y-2 hover:scale-[1.01]
                    transition-all duration-500
                    overflow-hidden"
    >
      {/* براقیت و نور */}
      <div
        className="absolute -top-20 -right-20 w-40 h-40
                      bg-gradient-to-br from-white/20 via-military-500/10 to-transparent
                      rounded-full blur-3xl pointer-events-none
                      group-hover:scale-150 transition-transform duration-700"
      ></div>

      {/* وکتور محصول */}
      <div
        className="absolute -bottom-4 -right-4 text-[140px] opacity-[0.06] 
                      -rotate-12 pointer-events-none
                      group-hover:opacity-[0.1] group-hover:scale-110 group-hover:rotate-[-8deg]
                      transition-all duration-700"
        style={{ filter: "drop-shadow(0 0 20px rgba(93,115,71,0.3))" }}
      >
        {getProductIcon(product.name)}
      </div>

      {/* Badge موجودی */}
      <div
        className={`self-start px-4 py-2 rounded-full text-xs font-bold
                       backdrop-blur-md border
                       shadow-lg z-10
                       ${
                         isOutOfStock
                           ? "bg-zinc-800/50 border-zinc-700/50 text-zinc-400"
                           : "bg-military-600/30 border-military-500/30 text-military-200"
                       }`}
      >
        <span className="font-en">
          {isOutOfStock ? "❌ ناموجود" : `✓ ${product.stock} عدد موجود `}
        </span>
      </div>

      {/* نام محصول */}
      <h3
        className="relative z-10 mt-6 mb-4 min-h-[56px]
                     text-base font-bold leading-relaxed
                     text-white"
        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
      >
        {product.name}
      </h3>

      <div className="flex-1"></div>

      {/* قیمت */}
      <div className="relative z-10 mb-4">
        <div
          className="glass-strong rounded-2xl p-5
                        border border-white/10
                        flex justify-between items-end"
        >
          <div className="text-zinc-400 text-xs font-medium">قیمت</div>
          <div className="text-left">
            <div
              className="font-en text-military-200 text-2xl font-bold"
              style={{ textShadow: "0 0 20px rgba(93,115,71,0.5)" }}
            >
              {product.price.toLocaleString("en-US")}
            </div>
            <div className="text-zinc-500 text-[10px] font-medium mt-0.5">
              تومان
            </div>
          </div>
        </div>
      </div>

      {/* دکمه خرید */}
      <button
        onClick={() => onAddToCart(product)}
        disabled={isOutOfStock}
        className={`relative z-10 w-full py-4 rounded-xl 
                    text-sm font-bold
                    border-2 backdrop-blur-md
                    transition-all duration-300
                    overflow-hidden group/btn
                    ${
                      isOutOfStock
                        ? "bg-zinc-800/40 border-zinc-700/40 text-zinc-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-military-600 to-military-700 hover:from-military-500 hover:to-military-600 border-white/20 text-white shadow-[0_8px_24px_rgba(93,115,71,0.4),inset_0_2px_4px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_32px_rgba(93,115,71,0.6)] hover:-translate-y-0.5 active:translate-y-0"
                    }`}
      >
        {/* براقیت دکمه */}
        {!isOutOfStock && (
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                          -translate-x-full group-hover/btn:translate-x-full
                          transition-transform duration-700"
          ></div>
        )}

        <span className="relative z-10 flex items-center justify-center gap-2">
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {isOutOfStock ? "ناموجود" : "افزودن به سبد"}
        </span>
      </button>
    </div>
  );
};

export default ProductCard;
