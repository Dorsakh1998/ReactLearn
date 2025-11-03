import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { Product, CartItem } from "./types/types";
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [scrollY, setScrollY] = useState(0);
  const [elapsedSec, setElapsedSec] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  // 📜 اسکرول
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🎞️ حلقه انیمیشن اصلی
  useEffect(() => {
    const loop = (t: number) => {
      if (startRef.current == null) startRef.current = t;
      const dt = (t - startRef.current) / 1000;
      setElapsedSec(dt);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: "روغن موتور کاسترول مگناتک 5W-40",
      price: 2500000,
      stock: 15,
    },
    {
      id: 2,
      name: "روغن موتور شل هلیکس اولترا 5W-30",
      price: 2800000,
      stock: 12,
    },
    { id: 3, name: "فیلتر روغن موتور بوش", price: 350000, stock: 25 },
    { id: 4, name: "فیلتر هوا K&N قابل شستشو", price: 1200000, stock: 8 },
    { id: 5, name: "لنت ترمز جلو ATE آلمان", price: 1800000, stock: 10 },
    { id: 6, name: "دیسک ترمز عقب برمبو ایتالیا", price: 3500000, stock: 6 },
    { id: 7, name: "شمع موتور NGK ژاپن (4 عددی)", price: 850000, stock: 20 },
    { id: 8, name: "باتری اتمی 60 آمپر", price: 4200000, stock: 0 },
    { id: 9, name: "ضد یخ رادیاتور LIQUI MOLY", price: 650000, stock: 18 },
    { id: 10, name: "واکس بدنه مادرز کالیفرنیا", price: 950000, stock: 14 },
    { id: 11, name: "مایع شیشه شوی سوناکس آلمان", price: 280000, stock: 30 },
    { id: 12, name: "تایر میشلن پایلوت اسپرت 4", price: 8500000, stock: 4 },
  ];

  const categories = [
    { id: "all", name: "همه محصولات", icon: "🔧" },
    { id: "oil", name: "روغن موتور", icon: "⚙️" },
    { id: "filter", name: "فیلتر", icon: "🔩" },
    { id: "brake", name: "سیستم ترمز", icon: "⭕" },
    { id: "electric", name: "برقی", icon: "⚡" },
    { id: "care", name: "نگهداری", icon: "✨" },
    { id: "tire", name: "تایر", icon: "🚗" },
  ];

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "oil") return product.name.includes("روغن");
    if (selectedCategory === "filter") return product.name.includes("فیلتر");
    if (selectedCategory === "brake")
      return (
        product.name.includes("لنت") ||
        product.name.includes("ترمز") ||
        product.name.includes("دیسک")
      );
    if (selectedCategory === "electric")
      return product.name.includes("شمع") || product.name.includes("باتری");
    if (selectedCategory === "care")
      return (
        product.name.includes("واکس") ||
        product.name.includes("شیشه") ||
        product.name.includes("یخ")
      );
    if (selectedCategory === "tire") return product.name.includes("تایر");
    return true;
  });

  // 🧮 سبد خرید
  const handleAddToCart = (p: Product) => {
    const exist = cartItems.find((i) => i.id === p.id);
    if (exist) {
      if (exist.quantity < p.stock)
        setCartItems(
          cartItems.map((i) =>
            i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        );
      else alert("⚠️ موجودی کافی نیست!");
    } else setCartItems([...cartItems, { ...p, quantity: 1 }]);
  };
  const handleRemoveFromCart = (id: number) =>
    setCartItems(cartItems.filter((i) => i.id !== id));
  const handleClearCart = () =>
    window.confirm("آیا مطمئن هستید؟") && setCartItems([]);
  const handleUpdateQuantity = (id: number, q: number) => {
    if (q < 1) return;
    const p = products.find((x) => x.id === id);
    if (!p || q > p.stock) return alert("⚠️ موجودی کافی نیست!");
    setCartItems(
      cartItems.map((i) => (i.id === id ? { ...i, quantity: q } : i))
    );
  };
  const scrollToProducts = () =>
    document
      .getElementById("products-section")
      ?.scrollIntoView({ behavior: "smooth" });

  // ⚙️ پارامترهای فیزیکی
  const BASE_SPIN_DEG_PER_SEC = 180;
  const BASE_ROAD_PX_PER_SEC = 120;
  const wheelRotationDeg = scrollY * 1.05 + elapsedSec * BASE_SPIN_DEG_PER_SEC;
  const wheelSwayX = Math.sin(scrollY * 0.01) * 14;
  const wheelBobY = Math.sin(elapsedSec * 2.4) * 3;
  const roadMovePx = elapsedSec * BASE_ROAD_PX_PER_SEC + scrollY * 2;

  return (
    <div className="min-h-screen">
      <Header
        shopName="اتو پارت پرو"
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
      />

      {/* 🟢 HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      >
        {/* پس‌زمینه نور و خطوط */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(900px 500px at 75% 20%, rgba(163,230,53,0.14), transparent 65%), radial-gradient(800px 500px at 20% 75%, rgba(253,224,71,0.10), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 opacity-[0.05] bg-grid" />
        </div>

        <div className="relative z-10 w-full max-w-6xl px-6 py-20">
          {/* 🛞 چرخ + جاده */}
          <div className="flex flex-col items-center justify-center mt-8 mb-8 relative">
            {/* جاده پشت چرخ */}
            <div
              className="absolute bottom-0 w-[860px] max-w-full h-12 rounded-full overflow-hidden animate-roadFadeIn"
              style={{
                background:
                  "repeating-linear-gradient(90deg, rgba(255,255,255,0.8) 0 40px, transparent 40px 80px)",
                backgroundPositionX: `-${roadMovePx}px`,
                opacity: 0.18,
                filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
              }}
            ></div>

            {/* سایه زیر چرخ */}
            <div className="w-[280px] h-10 bg-black/25 blur-2xl rounded-full mb-2 relative z-10" />

            {/* چرخ */}
            <div
              className="relative z-20"
              style={{
                transform: `translateX(${wheelSwayX}px) translateY(${wheelBobY}px)`,
                willChange: "transform",
              }}
            >
              <div className="relative w-52 h-52 md:w-56 md:h-56">
                <div className="absolute inset-0 rounded-full bg-neutral-900 border-[10px] border-neutral-800" />
                <div
                  className="absolute inset-[2px] rounded-full opacity-25"
                  style={{
                    backgroundImage:
                      "repeating-conic-gradient(from 0deg, rgba(255,255,255,0.15) 0 6deg, transparent 6deg 12deg)",
                  }}
                />
                <div
                  className="absolute inset-[14px] rounded-full bg-neutral-100/10 border-4 border-neutral-300/30 grid place-items-center"
                  style={{
                    transform: `rotate(${wheelRotationDeg}deg)`,
                    filter: "drop-shadow(0 0 6px rgba(255,255,255,0.08))",
                  }}
                >
                  <div className="w-28 h-1 bg-neutral-200 absolute" />
                  <div className="w-28 h-1 bg-neutral-200 absolute rotate-60" />
                  <div className="w-28 h-1 bg-neutral-200 absolute -rotate-60" />
                  <div className="w-6 h-6 rounded-full bg-neutral-100 shadow-inner" />
                </div>
                <div className="absolute inset-0 rounded-full blur-2xl bg-lime-300/16" />
              </div>

              {/* رد سرعت */}
              <div className="absolute top-1/2 left-1/2 -translate-x-[70%] -translate-y-1/2 w-44 h-2 bg-lime-300/35 blur-md rounded-full" />

              {/* گرد و خاک */}
              <div className="absolute bottom-0 left-1/2 -translate-x-[80%] flex gap-2 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-amber-200/50 dust"
                    style={{ animationDelay: `${i * 0.18}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* عنوان و دکمه */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-4 tracking-tight">
              قطعات یدکی با <span className="text-emerald-400">کیفیت برتر</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-100/90 mb-10 max-w-2xl mx-auto">
              خرید مطمئن روغن، فیلتر و قطعات مصرفی با تضمین اصالت و ارسال سریع.
            </p>
            <button
              onClick={scrollToProducts}
              className="px-8 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-[0_8px_30px_rgba(16,185,129,0.35)] transition"
            >
              مشاهده محصولات
            </button>
          </div>
        </div>
      </section>

      {/* 🛠️ محصولات */}
      <section id="products-section" className="relative py-20">
        <div className="max-w-[1800px] mx-auto px-6">
          <div className="glass-strong rounded-2xl p-2 mb-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm transition ${
                    selectedCategory === c.id
                      ? "bg-emerald-600 text-white shadow-[0_8px_28px_rgba(16,185,129,0.35)]"
                      : "glass text-zinc-300 hover:text-white"
                  }`}
                >
                  <span className="text-lg">{c.icon}</span>
                  <span>{c.name}</span>
                  {selectedCategory === c.id && filteredProducts.length > 0 && (
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-medium font-en">
                      {filteredProducts.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 pb-12 items-start">
            <div>
              <ProductList
                products={filteredProducts}
                onAddToCart={handleAddToCart}
              />
            </div>
            <div
              className="sticky top-36"
              style={{ maxHeight: "calc(100vh - 160px)", overflowY: "auto" }}
            >
              <Cart
                cartItems={cartItems}
                onRemoveFromCart={handleRemoveFromCart}
                onClearCart={handleClearCart}
                onUpdateQuantity={handleUpdateQuantity}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
