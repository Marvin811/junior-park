import { ICategory } from "./category.types"
import { IReview } from "./review.types"

export interface IProduct {
    id: number
    name: string
    slug: string
    description: string
    price: number
    reviews: IReview[]
    images: string[]
    createAt: string
    category: ICategory
}

export interface IProductDetails {
    product: IProduct
}

export type TypeProducts = {
    products: IProduct[]
}
export type TypePaginationProducts = {
    length: number
    products: IProduct[]
}