import { IProduct, TypePaginationProducts } from '@/types/product.types'
import { PRODUCT, TypeProductData, TypeProductDataFilters } from './product.types'
import { axiosClassic, instance } from '@/api/api.interceptor'


export const ProductService = {
	async getAll(queryData = {} as TypeProductDataFilters) {
		return axiosClassic<TypePaginationProducts[]>({
			url: `${PRODUCT}`,
			method: 'GET',
			params: queryData
		})
	},

    async getSimilar(id: string | number) {
		return axiosClassic<IProduct[]>({
			url: `${PRODUCT}/similar/${id}`,
			method: 'GET',
		})
	},
    async getSlug(slug: string) {
		return axiosClassic<IProduct>({
			url: `${PRODUCT}/by-slug/${slug}`,
			method: 'GET',
		})
	},

    async getByCategoryId(categorySlug: string) {
		return axiosClassic<IProduct[]>({
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
