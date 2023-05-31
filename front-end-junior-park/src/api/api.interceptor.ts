import axios from 'axios'
import { error } from 'console'
import { config } from 'process'

import {
	getAccessToken,
	removeTokenStorage
} from '../services/auth/auth.helper'
import { AuthService } from '../services/auth/auth.service'

import { errorCatch, getContentType } from './api.helper'

export const instance = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: getContentType()
})

instance.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config.headers && accessToken) {
	}

	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				/*создание нового токена */
				await AuthService.getNewToken()
				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeTokenStorage()
			}
		}
		throw error
	}
)
