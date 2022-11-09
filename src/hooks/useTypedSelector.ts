import {TypedUseSelectorHook, useSelector} from 'react-redux'
import {CartState} from '../store/store'

export const useTypedSelector :TypedUseSelectorHook<CartState> = useSelector