'use client'
import { Product } from "@/types/Type";
import { createContext, ReactNode, SetStateAction, useContext, useState } from "react";
import { useAuthContext } from "./AuthContext";

type CartItems = Product & { quantity: number }

type CartContextProps = {
    cart: CartItems[];
    addToCart: (product: Product) => void
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
    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) throw new Error("useCart must be used within cartprovider")
    return context
}