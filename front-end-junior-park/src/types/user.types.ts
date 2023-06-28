import { IOrder } from "./order.types"
import { IProduct } from "./product.types"

export interface IUser {
	id: number
	email: string
	name: string
	avatarPath: string
	phone: string
	isAdmin: boolean
}

export interface IFullUser extends IUser {
	favorites: IProduct[]
	orders: IOrder[]
}
