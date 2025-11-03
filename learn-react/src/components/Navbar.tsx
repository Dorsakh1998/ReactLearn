// src/components/Navbar.tsx
import React from "react";

interface NavbarProps {
  cartCount?: number; // تعداد آیتم‌های سبد (اختیاری، صفر در نظر گرفته می‌شه)
}

const Navbar = ({ cartCount = 0 }: NavbarProps) => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={{ margin: 0 }}>🛍️ My Store</h1>

        <nav style={navStyle}>
          <a style={linkStyle} href="#">
            خانه
          </a>
          <a style={linkStyle} href="#">
            محصولات
          </a>
          <a style={linkStyle} href="#">
            درباره
          </a>

          {/* کارت سبد خرید ساده با شمارش */}
          <div style={cartStyle}>
            <span style={{ marginRight: 8 }}>سبد خرید</span>
            <div style={badgeStyle}>{cartCount}</div>
          </div>
        </nav>
      </div>
    </header>
  );
};

/* استایل ساده inline — توضیح: فعلاً از inline استفاده کردیم چون راحت و واضحه.
   بعداً می‌تونیم این‌ها رو منتقل کنیم به CSS یا Tailwind. */
const headerStyle: React.CSSProperties = {
  background: "#ffffff",
  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
};

const containerStyle: React.CSSProperties = {
  maxWidth: 1024,
  margin: "0 auto",
  padding: "12px 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const navStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#333",
  fontSize: 14,
};

const cartStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  background: "#f3f4f6",
  padding: "6px 8px",
  borderRadius: 20,
};

const badgeStyle: React.CSSProperties = {
  minWidth: 24,
  height: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#2563eb",
  color: "#fff",
  borderRadius: 12,
  fontSize: 12,
  padding: "0 6px",
};

export default Navbar;
