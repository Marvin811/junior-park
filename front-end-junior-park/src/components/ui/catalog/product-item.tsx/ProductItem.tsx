import { IProduct } from "@/types/product.types";
import { FC } from "react";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import AddToCartButton from "./AddToCartButton";
import ProductRating from "./ProductRating";

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  return <div>
    <div>
        <FavoriteButton productId={product.id} />
        <AddToCartButton product={product} />
        <Image width={229} height={229} src={product.images[0]} alt={product.name} />
    </div>
        <h3>{product.name}</h3>
        <div>{product.category.name}</div>
        <ProductRating product={product} />
        <div>{product.price}</div>

  </div>;
};

export default ProductItem;
