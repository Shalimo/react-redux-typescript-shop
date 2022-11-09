import { useQuery } from '@tanstack/react-query'
import { Products } from '../../../services/products.service'
import ProductCard from '../../ui/productCard/ProductCard'
import styles from './Home.module.scss'
import { FC } from 'react'
import Layout from '../../ui/layout/Layout'
import Spinner from '../../ui/spinner/Spinner'

const Home: FC = () => {
	const { data: products, isLoading } = useQuery(
		['products'],
		() => Products.getProducts(),
		{
			select: ({ products }) => products.reverse()
		}
	)

	return (
		<Layout>
			<div className={styles.content}>
				<h3 className={styles.title}>Fakeshop</h3>
				{isLoading && <Spinner />}
				<div className={styles.gridContainer}>
					{products?.reverse().map(product => (
						<ProductCard product={product} key={product.id} />
					))}
				</div>
			</div>
		</Layout>
	)
}

export default Home
