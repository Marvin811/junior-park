import { IProduct } from '@/app/types/product.types'

import { PRODUCT, TypeProductData, TypeProductDataFilters } from './product.types'
import { instance } from '@/app/api/api.interceptor'

export const ProductService = {
	async getAll(queryData = {} as TypeProductDataFilters) {
		return instance<IProduct[]>({
			url: `${PRODUCT}`,
			method: 'GET',
			params: queryData
		})
	},

    async getSimilar(id: string | number) {
		return instance<IProduct[]>({
			url: `${PRODUCT}/similar/${id}`,
			method: 'GET',
		})
	},
    async getSlug(slug: string) {
		return instance<IProduct>({
			url: `${PRODUCT}/by-slug/${slug}`,
			method: 'GET',
		})
	},

    async getByCategory(categorySlug: string) {
		return instance<IProduct[]>({
			url: `${PRODUCT}/by-category/${categorySlug}`,
			method: 'GET',
		})
	},
    
    async getById(id: string | number) {
		return instance<IProduct[]>({
			url: `${PRODUCT}/${id}`,
			method: 'GET',
		})
	},
    async create() {
        return instance<IProduct>({
           url: PRODUCT,
           method: 'POST' 
        })
    },

    async update(id: string | number, data: TypeProductData) {
        return instance<IProduct>({
            url: `${PRODUCT}/${id}`,
           method: 'PUT',
           data
        })
    },

    async delete(id: string | number) {
        return instance<IProduct>({
            url: `${PRODUCT}/${id}`,
           method: 'DELETE',
        })
    }
}
