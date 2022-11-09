import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Products } from '../../../services/products.service'
import Button from '../../ui/buttonCart/Button'
import { FC } from 'react'
import Layout from '../../ui/layout/Layout'
import Spinner from '../../ui/spinner/Spinner'
import ProductInfo from '../../ui/productInfo/ProductInfo'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useActions } from '../../../hooks/useActions'

const Product: FC = () => {
	const params = useParams()

	const { data: product, isLoading } = useQuery(['product', params.id], () =>
		Products.getProductByID(params.id || '')
	)

	const { products } = useTypedSelector(state => state.cart)

	const { addProductToCart, removeProductFromCart } = useActions()

	const inCart = products.some(item => item.id === Number(params.id))

	return (
		<Layout>
			{isLoading && <Spinner />}
			{product && (
				<ProductInfo
					images={product?.images}
					price={product?.price}
					title={product?.title}
				/>
			)}
			{isLoading ? null : (
				<Button
					onClick={() => {
						!inCart
							? addProductToCart(product)
							: removeProductFromCart(Number(params.id))
					}}
				>
					{inCart ? `Delete from cart` : `Add to cart`}
				</Button>
			)}
		</Layout>
	)
}

export default Product
