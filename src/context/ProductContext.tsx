"use client";

import { Category, Product } from "@/types/Type";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { categories as initialCategories } from "@/components/Home/Category";

type ProductContextType = {
    products: Product[];
    categories: Category[];
    loading: boolean; 
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const savedProducts = localStorage.getItem('hardware-shop-products');
                
                if (savedProducts && savedProducts !== "[]") {
                    setProducts(JSON.parse(savedProducts));
                } else {
                    const res = await fetch("/products.json");
                    const data = await res.json();
                    setProducts(data);
                }
            } catch (error) {
                console.error("Error initializing products:", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    useEffect(() => {
        if (!loading) {
            localStorage.setItem('hardware-shop-products', JSON.stringify(products));
        }
    }, [products, loading]);

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
        return products.filter((product) => product.featured === true);
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                categories,
                loading,
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