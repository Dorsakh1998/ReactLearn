import { ProductListProps } from "../types/types";
import ProductCard from "./ProductCard";

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div className="w-full text-right">
      <div className="mb-10">
        <h2 className="text-white text-2xl font-semibold mb-2.5 tracking-wide">
          کاتالوگ محصولات
        </h2>
        <p className="text-zinc-400 text-[13px] font-normal">
          <span className="font-en">{products.length}</span> محصول در دسترس
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 w-full">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
