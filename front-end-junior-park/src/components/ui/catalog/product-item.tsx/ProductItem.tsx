import { IProduct } from "@/types/product.types";
import { FC } from "react";
import Image from "next/image";

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  return <div>
    <div>
        <FavoriteButton productId={product.id} />
        <AddToCartButton productId={product} />
        <Image width={229} height={229} src={product.images[0]} alt={product.name} />
    </div>
        <h3>{product.name}</h3>
        <div>{product.category.name}</div>
        <ProductRating rating={product.rating} />
        <div>{product.price}</div>

  </div>;
};

export default ProductItem;
