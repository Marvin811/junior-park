'use client'

import Heading from "@/components/ui/Heading";
import Catalog from "@/components/ui/catalog/Catalog";
import { TypePaginationProducts, TypeProducts } from "@/types/product.types";
import { FC } from "react";

const Home: FC<TypePaginationProducts> = ({products, length}) => {
    return(<div>  <Heading>Gavno!!!</Heading>
    <Catalog data={products, length}/>
)</div>
          
}

export default Home
