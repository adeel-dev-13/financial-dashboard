'use client'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FormValues } from '../../../types'

type UserState = {
  userProfile: FormValues
}

const initialState = {
  userProfile: {
    city: '',
    country: '',
    dateOfBirth: '',
    email: '',
    image: undefined,
    name: '',
    password: '',
    presentAddress: '',
    postalCode: '',
    permanentAddress: '',
    role: '',
    userName: '',
    yourName: ''
  }
} as UserState

export const user = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<FormValues>) => {
      state.userProfile = action.payload
    }
  }
})

export const { setUserProfile } = user.actions

export default user.reducer
