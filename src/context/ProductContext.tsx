"use client";

import { Category, Product } from "@/types/Type";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { categories as initialCategories } from "@/components/Home/Category";

type ProductContextType = {
    allProduct: Product[];
    categories: Category[];
    addProduct: (product: Product) => void;
    updateProduct: (productId: string, updatedProduct: Product) => void;
    deleteProduct: (productId: string) => void;
    getProductById: (productId: string) => Product | undefined;
    getProductsByCategory: (category: string) => Product[];
    getFeaturedProducts: () => Product[];
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories] = useState<Category[]>(initialCategories);
    const [allProduct, setAllProduct] = useState<Product[]>([])

    useEffect(() => {
        const fetchAllData = async () => {
            const res = await fetch('/products.json');
            const data = await res.json()
            setAllProduct(data)
        }
        fetchAllData()

    }, [])

    const addProduct = (product: Product) => {
        setProducts((prev) => [...prev, product]);
    };

    const deleteProduct = (productId: string) => {
        setProducts((prev) => prev.filter((product) => product.id !== productId));
    };

    const updateProduct = (productId: string, updatedProduct: Product) => {
        setProducts((prev) =>
            prev.map((product) => (product.id === productId ? updatedProduct : product))
        );
    };

    const getProductById = (productId: string): Product | undefined => {
        return products.find((product) => product.id === productId);
    };

    const getProductsByCategory = (category: string): Product[] => {
        return products.filter((product) => product.category === category);
    };

    const getFeaturedProducts = (): Product[] => {
        return allProduct.filter((product) => product.featured === true);
    };

    return (
        <ProductContext.Provider
            value={{
                allProduct,
                categories,
                addProduct,
                updateProduct,
                deleteProduct,
                getProductById,
                getFeaturedProducts,
                getProductsByCategory,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
};