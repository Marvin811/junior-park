import { IReview } from "@/types/review.types"

import { axiosClassic, instance } from '@/api/api.interceptor'
/* Вынести отдельно */ 
const REVIEWS = 'reviews'
type TypeData = {
    rating: number
    text: string
}

export const ReviewsService = {
	async getAll() {
		return axiosClassic<IReview[]>({
			url: REVIEWS,
			method: 'GET'
		})
	},

	async getAverageByProduct(productId: string | number) {
		return axiosClassic<number>({
			url: `${REVIEWS}/average-by-product/${productId}`,
			method: 'GET'
		})
	},

	async leave(productId: string | number, data: TypeData) {
		return instance<IReview>({
			url: `${REVIEWS}/leave/${productId}`,
			method: 'POST',
			data
		})
	}
}
