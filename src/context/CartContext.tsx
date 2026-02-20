'use client'
import { Product } from "@/types/Type";
import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import toast from "react-hot-toast";

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
    const { userIsLogIn, currentUser } = useAuthContext()

    useEffect(() => {
        if(currentUser && userIsLogIn) {
            const savedCart = localStorage.getItem(`cart_${currentUser.email}`)
            if(savedCart){
                setCart(JSON.parse(savedCart))
            } else{
                setCart([])
            }
        } else{
            setCart([])
        }
    },[currentUser, userIsLogIn])

    useEffect(() => {
        if(currentUser && userIsLogIn){
            localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(cart))
        }
    },[cart])


    const addToCart = (product: Product) => {
        if (!userIsLogIn) {
            toast.error("please login firt to add items to cart!")
            return
        }
        const isExits = cart.find(item => item.id === product.id)
        setCart((prev) => {
            if (isExits){ 
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
            return [...prev, { ...product, quantity: 1 }]
        })
        if(isExits){
            toast.success(`Increased quantity of ${product.name}`)
        } else{
            toast.success(`Added ${product.name} to your cart`)
        }
        
    }

    const updateQuantity = (productId: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeFromCart(productId)
        }
        setCart(prev => prev.map((item) => item.id == productId ? { ...item, quantity: newQuantity } : item))
    }

    const removeFromCart = (productId: string) => {
        setCart(prev => prev.filter(item => item.id !== productId))
        toast.success(`Reomed Item from Cart `)
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