'use client'

import Heading from "@/components/ui/Heading";
import Catalog from "@/components/ui/catalog/Catalog";
import { TypePaginationProducts, TypeProducts } from "@/types/product.types";
import { FC } from "react";
import RootLayout from "./layout";

const Home: FC<TypePaginationProducts> = ({products, length}) => {
    return(<RootLayout><Heading>Gavno!!!</Heading>
    <Catalog data={products, length}/>
)</RootLayout>  
          
}

export default Home
