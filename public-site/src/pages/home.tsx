import { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const [products, setProducts] = useState<
    { id: number; name: string; price: number; image: string }[]
  >([]);

  useEffect(() => {
    axios.get("http://192.168.0.104:8000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("❌ Axios Error Details:", error);
        if (error.response) {
          console.error("🔴 Response Error:", error.response.data);
        } else if (error.request) {
          console.error("🔴 Request Error:", error.request);
        } else {
          console.error("🔴 General Error:", error.message);
        }
      });
  }, []);
  

  return (
    <>
      <h2>Featured Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ border: "1px solid #ccc", padding: "1rem" }}
          >
            <img src={product.image} alt={product.name} width="150" />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
