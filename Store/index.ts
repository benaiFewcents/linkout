import { configureStore } from '@reduxjs/toolkit'
import { Reducer } from 'redux'
import { createWrapper } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import linkoutSlice from '../Components/Pages/Linkout/slice'

let rootReducer: Reducer = (state = {}, action) => {
  return state
}
const store = configureStore({
  reducer: {
    linkout: linkoutSlice,
  },
})

type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const makeStore = () => store;

export const storeWrapper = createWrapper(makeStore);
