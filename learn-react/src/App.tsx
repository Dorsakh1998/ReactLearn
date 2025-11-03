import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { Product, CartItem } from "./types/types";
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

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

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        alert("⚠️ موجودی کافی نیست!");
      }
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    if (window.confirm("آیا مطمئن هستید که می‌خواهید سبد خرید را خالی کنید؟")) {
      setCartItems([]);
    }
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    const product = products.find((p) => p.id === productId);
    if (!product) return;

    if (newQuantity > product.stock) {
      alert("⚠️ موجودی کافی نیست!");
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="min-h-screen">
      <Header shopName="اتو پارت پرو" cartCount={cartItems.length} />

      <div className="max-w-[1800px] mx-auto px-6 pt-8">
        {/* دسته‌بندی */}
        <div
          className="glass-strong rounded-2xl p-2 mb-8
                        shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
        >
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-military-600 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl
                           font-bold text-sm whitespace-nowrap
                           transition-all duration-300 shrink-0
                           ${
                             selectedCategory === category.id
                               ? "bg-gradient-to-r from-military-600 to-military-700 text-white shadow-[0_4px_16px_rgba(107,133,85,0.5)] scale-105"
                               : "glass text-zinc-400 hover:text-white hover:bg-dark-700"
                           }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                {selectedCategory === category.id &&
                  filteredProducts.length > 0 && (
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-bold font-en">
                      {filteredProducts.length}
                    </span>
                  )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 pb-12">
          <div>
            <ProductList
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />
          </div>

          <div>
            <Cart
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onClearCart={handleClearCart}
              onUpdateQuantity={handleUpdateQuantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
