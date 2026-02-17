'use client'
import { useCart } from '@/context/CartContext'
import { ShoppingBag, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function page() {
  const { cart, updateQuantity, totalPrice, removeFromCart } = useCart()
  const router = useRouter()

  if (cart.length === 0) {
    return (
      <div className='min-h-screen bg-white flex items-center justify-center px-4'>
        <div className='text-center'>
          <ShoppingBag className='w-20 h-20 mx-auto mb-4' />
          <h2 className='text-2xl font-bold'>
            Your Cart is Empty
          </h2>
          <p className='mb-8'>
            Start shopping to add items to your cart
          </p>
          <button className='bg-neutral-900 text-white px-8 py-3 rounded-lg font-medium cursor-pointer'
            onClick={() => router.push('/shop')}>
            continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-bold text-neutral-900'>
          Shopping Cart
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='md:col-span-2 space-y-4'>
            {cart.map((item, index) => (
              <div
                key={item.id}
                className='rounded-lg p-6 flex gap-6'>
                <div className='relative w-32 shrink-0 rounded-lg overflow-hidden'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill />
                </div>

                <div className='flex-1'>
                  <div className='flex justify-between'>
                    <div>
                      <h3 className='text-lg font-semibold text-neutral-900'>
                        {item.name}
                      </h3>
                      <p className='text-lg font-bold text-neutral-900'>
                        ${item.price}
                      </p>
                    </div>
                    <button
                    onClick={() => removeFromCart(item.id)} className='hover:text-red-500 transition-colors'>
                      <Trash2 className='w-5 h-5' />
                    </button>
                  </div>
                  <div className='flex items-center space-x-3 mt-4'>
                    <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                    className='w-8 h-8 rounded bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center'>
                      -
                    </button>
                    <span className='text-neutral-900 font-medium w-8 text-center'>
                      {item.quantity}
                    </span>
                    <button
                    onClick={() =>updateQuantity(item.id, item.quantity + 1) } 
                    className='w-8 h-8 rounded bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center'>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='md:col-span-1'>
            <div className='bg-neutral-50 rounded-lg p-6 sticky top-24'>
              <h2 className='text-xl font-bold text-neutral-900 mb-6'>Order Summary</h2>
              <div className='space-y-3 mb-6'>
                <div className='flex justify-between teneu600 '>
                  <span> Subtotal </span>
                  <span> ${totalPrice().toFixed(2)} </span>
                </div>
                <div className='flex justify-between text-neutral-600'>
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div className='flex justify-between text-neutral-600'>
                  <span>Tax</span>
                  <span>${(totalPrice()*0.1).toFixed(2)}</span>  
                </div>
                <div className='border-t border-neutral-200 flex justify-between text-lg font-bold '>
                  <span>Total</span>
                  <span>${(totalPrice()*1.1).toFixed(2)}</span>
                </div>
              </div>
              <button className='w-full bg-neutral-900 text-white py-4 rounded-lg font-medium hover:bg-neutral-800 transition-colors mb-4'>
                Proceed to Checkout
              </button>
              <button className='w-full bg-neutral-900 text-white py-4 rounded-lg font-medium hover:bg-neutral-800 transition-colors mb-4'
              onClick={() => router.push('/shop')}>
                Continue Shoping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
