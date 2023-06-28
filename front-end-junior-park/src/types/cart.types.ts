import { IProduct } from "./product.types"

export interface ICartItem {
    id: number
    product: IProduct
    quantity: number
    price: number
}