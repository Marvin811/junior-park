import { IReview } from "@/types/review.types"

import { instance } from '@/api/api.interceptor'
/* Вынести отдельно */ 
const REVIEWS = 'reviews'
type TypeData = {
    rating: number
    text: string
}

export const ReviewsService = {
	async getAll() {
		return instance<IReview[]>({
			url: REVIEWS,
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
