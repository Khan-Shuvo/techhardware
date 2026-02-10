import Card from "@/components/Card";
import Category from "@/components/Home/Category";
import { ArrowRight, Section, Shield, Truck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pb-16">
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
      <div className="grid md:grid-cols-3 gap-8 px-8 py-8 dark:bg-black">
        <Card
          variant="feature"
          icon={Truck}
          title="Free Shipping"
          description="Free delivery on orders over $100"
        />

        <Card
          variant="feature"
          icon={Shield}
          title="2-Years Warranty"
          description="Extended warranty on all products"
        />

        <Card
          variant="feature"
          icon={Zap}
          title="Fast Performance"
          description="Latest technology for maximum speed"
        />
      </div>



      {/* category  */}

      <section className="dark:bg-black pt-3 pb-10 px-6 space-y-3">
        <h2 className="dark:text-white text-center py-4 text-2xl sm:text-3xl lg:text-5xl font-semibold">Shop by Category</h2>
        <p className="text-gray-400 text-center">
          Find exctly what you need for your build
        </p>
        <Category />
      </section>

      <section className=" text-center py-20 px-4 flex flex-col items-center justify-center gap-3  bg-linear-to-r from-gray-200 to-white dark:bg-linear-to-r dark:from-gray-800 dark:to-black">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
          Ready to Build ?
        </h2>
        <p className=" max-w-2xl text-gray-500 text-lg md:text-lg mb-8 dark:text-gray-300">
          Browse our complete catalog of hardware components and start building your dream PC today.
        </p>
        <button className="flex items-center justify-center gap-2 bg-black py-2 px-2 text-white rounded-md dark:bg-white dark:text-black">
          Explore All Products
          <ArrowRight size={18}/>
        </button>
      </section>
    </main>
  );
}
