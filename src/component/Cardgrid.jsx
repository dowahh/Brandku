import { useEffect, useState } from "react";
import { getData } from "../api/getData";
import Card from "./Card";

function CardGrid() {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setDataProduct(data);
    };
    fetchData();
  }, []);

  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
        Produk Kami
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dataProduct.map((data) => (
          <Card
            key={data.id}
            image={data.image}
            title={data.title}
            price={data.price}
            category={data.category}
          />
        ))}
      </div>
    </section>
  );
}

export default CardGrid;