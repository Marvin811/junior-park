export const PRODUCT = "product"

export type TypeProductData = {
	name: string
	price: number
	description?: string
	image: string[]
	categoryId: number
}

export type TypeProductDataFilters = {
	sort?: EnumProductSort | string
	searchTerm?: string
    page?: string | number
    perPage?: string | number
	ratings: string
	minPrice?: string
	maxPrice?: string
	categoryId?: string
}

export enum EnumProductSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

