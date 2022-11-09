import {useMemo} from 'react'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import { cartSlice } from '../store/slice'

const cartActions = {
    ...cartSlice.actions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(cartActions, dispatch), [dispatch])
}