// src/pages/Home.tsx
import React, { useState } from "react";
import ProductCard from "../features/Product/ProductCard";
import { Product } from "../types/Product";

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "محصول اول",
    price: 120000,
    description: "توضیح کوتاه محصول اول",
  },
  {
    id: 2,
    name: "محصول دوم",
    price: 89000,
    description: "توضیح کوتاه محصول دوم",
  },
  {
    id: 3,
    name: "محصول سوم",
    price: 45000,
    description: "توضیح کوتاه محصول سوم",
  },
];
<button onClick={() => console.log("TEST button clicked")}>تست کلیک</button>;

const Home = () => {
  // این state فقط برای نمایش تعداد آیتم‌هایی هست که کاربر اینجا اضافه کرده
  const [cartCount, setCartCount] = useState<number>(0);

  // وقتی ProductCard روی "افزودن به سبد" کلیک کنه این تابع اجرا میشه
  const handleAdd = (p: Product) => {
    // فعلاً ساده: فقط تعداد رو یکی زیاد می‌کنیم
    setCartCount((prev) => prev + 1);

    // اینجا می‌تونیم بعداً منطق پیچیده‌تر بذاریم:
    // - اضافه کردن کامل آیتم به آرایه cart
    // - ذخیره در localStorage
    // - یا صدا زدن Context/Redux
  };

  return (
    <section>
      <h2>محصولات</h2>

      <p>تعداد آیتم‌های اضافه‌شده در این صفحه: {cartCount}</p>

      <div style={gridStyle}>
        {sampleProducts.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={handleAdd} />
        ))}
      </div>
    </section>
  );
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: 12,
  marginTop: 12,
};

export default Home;
