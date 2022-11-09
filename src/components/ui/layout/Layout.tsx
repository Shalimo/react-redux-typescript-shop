import { useQuery } from '@tanstack/react-query'
import { Products } from '../../../services/products.service'
import ProductCard from '../../ui/productCard/ProductCard'
import styles from './Layout.module.scss'
import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const Layout: FC<PropsWithChildren<{ title?: string }>> = ({
	children,
	title
}) => {
	const { products } = useTypedSelector(state => state.cart)

	return (
		<div className={styles.container}>
			<header>
				<nav>
					<Link className={styles.link} to='/'>
						Home
					</Link>
					<Link
						className={products.length === 0 ? styles.link : styles.activeLink}
						to='/cart'
					>
						Cart {products.length === 0 ? '' : `( ${products.length} )`}
					</Link>
				</nav>
			</header>
			{children}
		</div>
	)
}

export default Layout
