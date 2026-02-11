"use client"

import { useMemo, useState } from "react"
import { useProducts } from "@/context/ProductContext"
import ProductCard from "../ProductCard"
import FilterSidebar from "./FilterSidebar"

type Props = {
  category: string
}

export default function DisplayProduct({ category }: Props) {
  const { allProduct } = useProducts()

  const [selectedCategory, setSelectedCategory] = useState(category)
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(2000)
  const [rating, setRating] = useState(0)
  const [sort, setSort] = useState("")

  const categories = [...new Set(allProduct.map(p => p.category.toLocaleLowerCase()))]
  const brands = [...new Set(allProduct.map(p => p.brand))]


  const filteredProducts = useMemo(() => {
    let products = [...allProduct]

    // category
    if (selectedCategory !== "all") {
      products = products.filter(p => p.category.toLocaleLowerCase().replace(/\s+/g, "-") === selectedCategory)
    }

    // brand
    if (selectedBrands.length > 0) {
      products = products.filter(p => selectedBrands.includes(p.brand))
    }

    // price
    products = products.filter(
      p => p.price >= minPrice && p.price <= maxPrice
    )

    // rating
    if (rating > 0) {
      products = products.filter(p => p.rating >= rating)
    }

    // sort
    if (sort === "low") {
      products.sort((a, b) => a.price - b.price)
    }
    if (sort === "high") {
      products.sort((a, b) => b.price - a.price)
    }

    return products
  }, [allProduct, selectedCategory, selectedBrands, minPrice, maxPrice, rating, sort])

 
  return (
    <div className="flex gap-6">

      {/* Sidebar */}
      <aside className="shrink">
        <FilterSidebar
          categories={categories}
          brands={brands}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          rating={rating}
          setRating={setRating}
          sort={sort}
          setSort={setSort}

        />
      </aside>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-300 mt-10">
            No products found.
          </p>
        )}
      </div>

    </div>
  )
}
