import React from "react";
import { Product } from "../types/Products";

type Props = {
  products: Product[];
};

export default function ProductsTable({ products }: Props) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 16 }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ccc", padding: 8 }}>ID</th>
          <th style={{ border: "1px solid #ccc", padding: 8 }}>Title</th>
          <th style={{ border: "1px solid #ccc", padding: 8 }}>Price ($)</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td style={{ border: "1px solid #ccc", padding: 8 }}>{p.id}</td>
            <td style={{ border: "1px solid #ccc", padding: 8 }}>{p.title}</td>
            <td style={{ border: "1px solid #ccc", padding: 8 }}>{p.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
