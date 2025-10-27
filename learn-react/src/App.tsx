import React, { useState, useEffect } from "react";
import ProductsTable from "./components/ProductTable";
import { Product } from "./types/Products";
import { Text } from "./components/test";

// export default function App() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => {
//         if (!res.ok) throw new Error("Network response was not ok");
//         return res.json();
//       })
//       .then((data: Product[]) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div style={{ padding: 16, fontFamily: "sans-serif" }}>
//       <h1>Products List</h1>
//       <ProductsTable products={products} />
//     </div>
//   );
// }
function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <Text textes="This is my first component!" />
    </div>
  );
}

export default App;
