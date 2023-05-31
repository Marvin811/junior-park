import {
	combineReducers,
	configureStore,
	getDefaultMiddleware
} from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { cartSlice } from '../cart/cart.slice'

const persistConfig = {
	ket: 'junior-park',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	carousel: carouselSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serialzableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
