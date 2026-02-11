"use client"

type Props = {
    categories: string[]
    brands: string[]

    selectedCategory: string
    setSelectedCategory: (v: string) => void

    selectedBrands: string[]
    setSelectedBrands: (v: string[]) => void

    minPrice: number
    maxPrice: number
    setMinPrice: (v: number) => void
    setMaxPrice: (v: number) => void

    rating: number
    setRating: (v: number) => void

    sort: string
    setSort: (v: string) => void
}

export default function FilterSidebar({
    categories,
    brands,
    selectedCategory,
    setSelectedCategory,
    selectedBrands,
    setSelectedBrands,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    rating,
    setRating,
    sort,
    setSort
}: Props) {

    const toggleBrand = (brand: string) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter(b => b !== brand))
        } else {
            setSelectedBrands([...selectedBrands, brand])
        }
    }

    return (
        <aside className="w-64 shrink hidden lg:block border-r pr-4 space-y-6">

            <h2 className="text-lg font-semibold">Filters</h2>

            {/* Category */}
            <div>
                <p className="font-medium mb-2">Category</p>
                <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="w-full border rounded p-2"
                >
                    <option value="all">All</option>
                    {categories.map(cat => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            {/* Brand */}
            <div>
                <p className="font-medium mb-2">Brand</p>
                <div className="space-y-1 max-h-40 overflow-y-auto">
                    {brands.map(brand => (
                        <label key={brand} className="flex gap-2 text-sm">
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes(brand)}
                                onChange={() => toggleBrand(brand)}
                            />
                            {brand}
                        </label>
                    ))}
                </div>
            </div>

            {/* Price */}
            <div>
                <p className="font-medium mb-2">Price</p>
                <div className="flex gap-2">
                    <input
                        type="number"
                        value={minPrice}
                        onChange={e => setMinPrice(Number(e.target.value))}
                        className="border p-1 rounded w-full"
                        placeholder="Min"
                    />
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={e => setMaxPrice(Number(e.target.value))}
                        className="border p-1 rounded w-full"
                        placeholder="Max"
                    />
                </div>
            </div>

            {/* Rating */}
            <div>
                <p className="font-medium mb-2">Rating</p>
                <select
                    value={rating}
                    onChange={e => setRating(Number(e.target.value))}
                    className="w-full border rounded p-2"
                >
                    <option value={0}>All</option>
                    <option value={4}>4★ & up</option>
                    <option value={4.5}>4.5★ & up</option>
                    <option value={4.8}>4.8★ & up</option>
                </select>
            </div>

            {/* Sort */}
            <div>
                <p className="font-medium mb-2">Sort</p>
                <select
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                    className="w-full border rounded p-2"
                >
                    <option value="">Default</option>
                    <option value="low">Price Low → High</option>
                    <option value="high">Price High → Low</option>
                </select>
            </div>
        </aside>
    )
}
