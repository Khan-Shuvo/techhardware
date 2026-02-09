import Card from "@/components/Card";
import { ArrowRight, Section, Shield, Truck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-16 pb-16">
      {/* hero section  */}
      <section className="w-full bg-linear-to-r from-gray-200 to-white dark:bg-linear-to-r dark:from-black/60 dark:to-black">
        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-12">

          {/* Content wrapper */}
          <div className="max-w-3xl space-y-8">

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-black dark:text-white leading-tight">
              Build Your Dream PC with <br />
              <span className="text-gray-800 dark:text-gray-300">
                Premium Hardware
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Discover the latest graphics cards, processors, and components from
              top brands. Fast shipping, competitive prices, and expert support.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Primary */}
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
              >
                Shop Now
                <ArrowRight size={18} />
              </Link>

              {/* Secondary */}
              <Link
                href="/products"
                className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 font-medium hover:bg-gray-200 dark:hover:bg-neutral-800 transition"
              >
                View All Products
              </Link>
            </div>

          </div>
        </div>
      </section>
      <div className="max-w-8/12 grid md:grid-cols-3 gap-8 mx-auto px-5">
        <Card
          variant="feature"
          icon={Truck}
          title="Free Shipping"
          description="Free delivery on orders over $100" />
        <Card 
        variant="feature"
        icon={Shield}
        title="2-Years Warranty"
        description="Extended warranty on all products" />
        <Card 
        variant="feature"
        icon={Zap}
        title="Fast Performance"
        description="Latest technology for maximum speed" />
      </div>
    </main>
  );
}
