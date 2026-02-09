import Link from "next/link";
import { Facebook, Github, Instagram, Package, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="dark:bg-black dark:text-gray-300">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Logo + Description */}
                    <div>
                        <div className="flex gap-3 items-center">
                        <Package className="h-6 w-6 text-primary dark:text-white" />
                        <span className="text-xl font-bold dark:text-white">
                            TechHearware
                        </span>
                        </div>
                        <p className="mt-3 text-sm text-gray-400">
                            Your one-stop shop for the latest computer hardware
                            and components.
                        </p>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Shop</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#">Graphics Cards</Link></li>
                            <li><Link href="#">Processors</Link></li>
                            <li><Link href="#">Motherboards</Link></li>
                            <li><Link href="#">Memory</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#">Contact Us</Link></li>
                            <li><Link href="#">FAQ</Link></li>
                            <li><Link href="#">Shipping Info</Link></li>
                            <li><Link href="#">Returns</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Connect</h3>

                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-cyan-400">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="hover:text-cyan-400">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="hover:text-cyan-400">
                                <Instagram size={18} />
                            </Link>
                            <Link href="#" className="hover:text-cyan-400">
                                <Github size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} TechHardware. All rights reserved. Built with React & TypeScript.
                </div>
            </div>
        </footer>
    );
}
