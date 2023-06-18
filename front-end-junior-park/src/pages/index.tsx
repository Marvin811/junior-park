import Home from "@/components/screens/home/Home";
import { ProductService } from "@/services/product/product.service";
import {
  IProduct,
  TypePaginationProducts,
  TypeProducts,
} from "@/types/product.types";
import { GetStaticProps, NextPage } from "next";

const HomePage: NextPage<TypePaginationProducts> = ({ length, products }) => {
  return <Home products={products} length={length} />;
};
export const getStaticProps: GetStaticProps<
  TypePaginationProducts
> = async () => {
  const { data } = await ProductService.getAll({
    page: 1,
    perPage: 5,
  });
  return {
    props: data,
  };
};

export default HomePage;
