import { IOrder } from "@/types/order.types"
import { instance } from "../api/api.interceptor"

const ORDERS = "orders"

export const OrderService = {
    async getAll() {
        return instance<IOrder[]>({
            url: `${ORDERS}/profile`,
            method: 'GET'
        })
    }
}