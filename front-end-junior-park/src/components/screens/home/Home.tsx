import Heading from "@/components/ui/Heading";
import Meta from "@/components/ui/Meta";
import Catalog from "@/components/ui/catalog/Catalog";
import { TypeProducts } from "@/types/product.types";
import { FC } from "react";

const Home: FC<TypeProducts> = ({products}) => {
    return(
        <Meta title="Home">
            <Heading>Gavno!!!</Heading>

            <Catalog products={products}/>
        </Meta>
    )
}

export default Home
