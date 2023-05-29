import { IProduct } from "./product.types"

export interface ICarItem {
    id: number
    product: IProduct
    quantity: number
    price: number
}