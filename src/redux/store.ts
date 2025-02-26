'use client'
import rootReducer from './reducer'
import { enableMapSet } from 'immer'
import { ThunkDispatch } from 'redux-thunk'
import { Action, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

enableMapSet()

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storageSession
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch &
  ThunkDispatch<RootState, void, Action>
