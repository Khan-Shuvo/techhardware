"use client"
import { useProducts } from '@/context/ProductContext'
import ProductCard from '../ProductCard'
import { useCart } from '@/context/CartContext'

export default function FeaturedProducts() {
    const { getFeaturedProducts } = useProducts()
    const featuredProducts = getFeaturedProducts()
    const { addToCart } = useCart()
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {featuredProducts.slice(0, 4).map(product => (
                <ProductCard key={product.id} {...product} onAddToCart={() => addToCart(product)} />
            ))}
        </div>
    )
}
