import { IProduct } from "@/types/product.types";
import { FC } from "react";
import ProductItem from "./product-item.tsx/ProductItem";
import Loader from "../Loader";

const Catalog: FC<{ products: IProduct[]; isLoading?:boolean }> = ({ products, isLoading }) => {
    if (isLoading) return <Loader />
  return (
    <section>
      {products.length ? (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <div>Продукты отсутствуют</div>
      )}
    </section>
  );
};

export default Catalog;
