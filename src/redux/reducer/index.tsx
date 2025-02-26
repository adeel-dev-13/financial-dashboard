'use client'
import applicationSlice from './applicationSlice'

import { createAction } from '@reduxjs/toolkit'
import { AnyAction, combineReducers, Reducer } from 'redux'

export const logoutUser = createAction('auth/logout')

const applicationReducer = combineReducers({
  userReducer: applicationSlice
})

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  return applicationReducer(state, action)
}

export default rootReducer
export type RootState = ReturnType<typeof applicationReducer>
