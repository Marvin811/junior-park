import { ICarItem } from "./cart.types"
import { IUser } from "./user.types"

export enum EnumOrderStatus {
    PENDING = 'PENDING',
    PAYED = 'PAYED',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED'
}

export interface IOrder {
    id: number
    createAt: string
    items: ICarItem
    status: EnumOrderStatus
    user: IUser
}