'use client'
import AuthCard from "@/components/Signin_Signup/AuthCard"
import AuthInput from "@/components/Signin_Signup/AuthInput"
import { useAuthContext } from "@/context/AuthContext"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SignUpPage() {

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userAddress, setUserAddress] = useState('')

  const { setUsers } = useAuthContext()
  const router = useRouter()

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (userName.length > 0 && userPassword.length >= 6) {
      
      const newUser = {
        name: userName,
        email: userEmail,
        password: userPassword,
        address: userAddress
      }

      setUsers(prev => {
        return [...prev, newUser]
      })
      console.log('new user added')
      router.push('/signin')
    } else {
      console.log("user not added")
    }
  }
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <AuthCard>
        <h1 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4">
          <AuthInput
            label="Full Name"
            placeholder="John Doe"
            value={userName}
            method={setUserName}
          />

          <AuthInput
            label="Email"
            type="email"
            value={userEmail}
            method={setUserEmail}
            placeholder="example@email.com"
          />

          <AuthInput
            label="userPassword"
            type="Password"
            value={userPassword}
            method={setUserPassword}
            placeholder="••••••••"
          />

          <AuthInput
            label="Address"
            placeholder="Address"
            value={userAddress}
            method={setUserAddress} />

          <button
            type="submit"
            className="
              bg-black text-white
              py-2 rounded-lg
              hover:opacity-90
              transition
            "
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-5">
          Already have an account?{" "}
          <Link href="/signin" className="underline font-medium">
            Sign In
          </Link>
        </p>
      </AuthCard>
    </main>
  )
}
