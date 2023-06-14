import Home from "@/components/screens/home/Home";
import { ProductService } from "@/services/product/product.service";
import { IProduct, TypeProducts } from "@/types/product.types";
import { GetStaticProps, NextPage } from "next";

const HomePage: NextPage<TypeProducts> = ({products}) => {
  return <Home products={products} />;
};
export const getStatocProps: GetStaticProps<TypeProducts> = async () => {
    const {data: products} = await ProductService.getAll({
        page: 1,
        perPage: 5
    })
    return {
        props:{
            products
        }
    }
}


export default HomePage;
