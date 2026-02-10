"use client"

import Image from "next/image"
import { ShoppingCart, Eye, Star } from "lucide-react"
import { ProductCardProps } from "@/types/Type"

export default function ProductCard({
    brand,
    name,
    image,
    price,
    rating,
    reviews,
    featured,
    onAddToCart
}: ProductCardProps) {

    return (
        <div className="group relative w-[280px] rounded-2xl border bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

            {/* -------- Image Section -------- */}
            <div className="relative h-64 w-full">

                {featured && (
                    <span className="absolute z-10 top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                        Featured
                    </span>
                )}

                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                />
            </div>


            {/* -------- Content -------- */}
            <div className="p-4 space-y-2">

                {/* brand */}
                <p className="text-sm text-gray-500">{brand}</p>

                {/* title */}
                <h3 className="font-semibold text-lg line-clamp-2">
                    {name}
                </h3>

                {/* rating */}
                <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{rating}</span>
                    <span className="text-gray-500">({reviews} reviews)</span>
                </div>

                {/* price */}
                <p className="text-2xl font-bold">
                    ${price.toFixed(2)}
                </p>

                {/* buttons */}
                <div className="flex gap-2 pt-2">

                    <button
                        onClick={onAddToCart}
                        className="flex-1 flex items-center justify-center gap-2 bg-black text-white rounded-xl py-2 hover:bg-zinc-800 transition"
                    >
                        <ShoppingCart size={18} />
                        Add to Cart
                    </button>

                    <button className="p-2 rounded-xl border hover:bg-gray-100 dark:hover:bg-zinc-800">
                        <Eye size={18} />
                    </button>
                </div>
            </div>
        </div>
    )
}
