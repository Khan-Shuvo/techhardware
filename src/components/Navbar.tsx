"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  Moon,
  ShoppingCart,
  Store,
  Sun,
  User,
  LogIn,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useAuthContext } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { isDarkModeOn, setIsDarkModeOn } = useTheme();
  const { userIsLogIn, setUserIsLogIn } = useAuthContext();

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Shop", href: "/shop", icon: Store },
    { name: "Cart", href: "/cart", icon: ShoppingCart },
  ];

  const router = useRouter()

  return (
    <nav className="relative">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-2">

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex gap-2 items-center">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition
                ${isActive
                    ? "bg-black text-white font-semibold dark:bg-white dark:text-black"
                    : "text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white"
                  }`}
              >
                <Icon size={18} />
                {link.name}
              </Link>
            );
          })}

          {userIsLogIn ? (
            <>
              <Link href="/profile" className="px-3 py-2 dark:text-white">
                <User size={18} />
              </Link>

              <button className="text-red-500 flex gap-0.5 items-center "
                onClick={() => setUserIsLogIn(false)}>
                logout
                <LogOut size={18} />
              </button>
            </>
          ) : (
            <button className="px-3 py-2 bg-black text-white rounded-lg"
            onClick={()=> router.push('/signin')}>
              <LogIn size={18} />
            </button>
          )}
        </div>

        {/* ✅ Mobile Toggle Button */}
        <button
          className="md:hidden p-2 rounded-lg dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Theme */}
        <button
          className="p-2 dark:text-white"
          onClick={() => setIsDarkModeOn(!isDarkModeOn)}>
          {isDarkModeOn ? <Sun /> : <Moon />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className=" absolute top-full right-0 z-50 md:hidden mt-3 flex flex-col gap-2 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg">

          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg dark:text-white"
              >
                <Icon size={18} />
                {link.name}
              </Link>
            );
          })}

          {userIsLogIn ? (
            <>
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="flex gap-2 px-3 py-2 dark:text-white"
              >
                <User size={18} />
                Profile
              </Link>

              <button className="flex gap-2 px-3 py-2 text-red-500"
                onClick={() => setUserIsLogIn(false)} >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <button className="flex gap-2 px-3 py-2 bg-black text-white rounded-lg">
              <LogIn size={18} />
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
