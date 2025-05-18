import React, { useState } from "react";
import ProductoForm from "../components/ProductoForm";
import ProductoList from "../components/ProductoList";

const Home = () => {
  const [reload, setReload] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <ProductoForm onProductCreated={() => setReload(!reload)} />
      <ProductoList key={reload} />
    </div>
  );
};

export default Home;
