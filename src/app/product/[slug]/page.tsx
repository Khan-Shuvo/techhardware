"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Star, ShoppingCart, ArrowLeft } from "lucide-react"
import { useProducts } from "@/context/ProductContext"
import { use } from "react"

export default function ProductDetails({
  params,
}: { params : Promise<{slug:string}>
}) {
  const { slug } = use(params)
  const router = useRouter()

  const { allProduct } = useProducts()

  const product = allProduct.find(p => p.id === slug)
  console.log(product)

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Product Not Found
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 mb-6 text-sm hover:underline"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width-780px)100vw,33vw"
            className="object-cover"
          />
        </div>

        {/* ========== INFO ========== */}
        <div className="space-y-5">

          {/* brand */}
          <p className="text-gray-500 text-sm">{product.brand}</p>

          {/* title */}
          <h1 className="text-2xl md:text-4xl font-bold">
            {product.name}
          </h1>

          {/* rating */}
          <div className="flex items-center gap-2">
            <Star className="fill-yellow-400 text-yellow-400" size={18} />
            <span className="font-medium">{product.rating}</span>
          </div>

          {/* price */}
          <p className="text-3xl font-bold text-green-600">
            ${product.price.toFixed(2)}
          </p>

          {/* stock */}
          <p className="text-sm">
            {product.stock > 0 ? (
              <span className="text-green-600">In Stock ({product.stock})</span>
            ) : (
              <span className="text-red-500">Out of stock</span>
            )}
          </p>

          {/* description */}
          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* add to cart */}
          <button
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-zinc-800 transition"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* ========== SPECS SECTION ========== */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Specifications</h2>

        <div className="border rounded-xl overflow-hidden">
          {Object.entries(product.specs || {}).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between px-4 py-3 border-b last:border-none text-sm"
            >
              <span className="font-medium">{key}</span>
              <span className="text-gray-600">{value as string}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
