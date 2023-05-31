import { IUser } from "./user.types"

export interface IReview {
    id: number
    user: IUser
    createAt: string
    text: string
    rating: string
}