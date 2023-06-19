import AddToCartButton from "./AddToCartButton";
import FavoriteButton from "./FavoriteButton";
import ProductRating from "./ProductRating";
import { IProduct } from "@/types/product.types";
import Image from "next/image";
import { FC } from "react";

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div>
      <div>
        <FavoriteButton productId={product.id} />
        <AddToCartButton product={product} />
        <Image
          width={229}
          height={229}
          src={product.images[0]}
          alt={product.name}
        />
      </div>
      <h3>{product.name}</h3>
     
      <ProductRating product={product} />
      <div>{product.price}</div>
    </div>
  );
};

export default ProductItem;
