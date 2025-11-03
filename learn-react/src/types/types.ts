// تایپ محصول
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image?: string; // اختیاری
  description?: string; // اختیاری
}

// تایپ آیتم سبد خرید (محصول + تعداد)
export interface CartItem extends Product {
  quantity: number;
}

// تایپ Props کامپوننت‌ها
export interface HeaderProps {
  shopName: string;
  cartCount: number;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export interface CartProps {
  cartItems: CartItem[];
  onRemoveFromCart: (productId: number) => void;
  onClearCart: () => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
}
