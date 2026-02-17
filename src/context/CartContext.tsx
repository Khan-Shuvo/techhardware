'use client'
import { Product } from "@/types/Type";
import { createContext, ReactNode, SetStateAction, useContext, useState } from "react";
import { useAuthContext } from "./AuthContext";

type CartItems = Product & { quantity: number }

type CartContextProps = {
    cart: CartItems[];
    addToCart: (product: Product) => void
    updateQuantity: (productid: string, newQuantity: number) => void
    removeFromCart: (productId: string) => void
    totalPrice: () => number
}

const CartContext = createContext<CartContextProps | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {

    const [cart, setCart] = useState<CartItems[]>([])
    const { userIsLogIn } = useAuthContext()

    const addToCart = (product: Product) => {
        if (!userIsLogIn) {
            alert("please login firts to add items to cart!")
            return
        }
        setCart((prev) => {
            const isExits = prev.find(item => item.id === product.id)
            if (isExits) return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            return [...prev, { ...product, quantity: 1 }]
        })
        alert(`${product.name} added to Cart!`)
    }

    const updateQuantity = (productId: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeFromCart(productId)
        }
        setCart(prev => prev.map((item) => item.id == productId ? { ...item, quantity: newQuantity } : item))
    }

    const removeFromCart = (productId: string) => {
        setCart(prev => prev.filter(item => item.id !== productId))
    }

    const totalPrice = () => {
        return cart.reduce((count, item) => count + item.price * item.quantity, 0)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) throw new Error("useCart must be used within cartprovider")
    return context
}