'use client'
import AuthCard from "@/components/Signin_Signup/AuthCard"
import AuthInput from "@/components/Signin_Signup/AuthInput"
import { useAuthContext } from "@/context/AuthContext"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function SignInPage() {

  const [userEmail, setuserEmail] = useState('')
  const [password, setPassword] = useState('')
  const { users, setUserIsLogIn, setCurrentUser } = useAuthContext()
  const router = useRouter()

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
     const user = users.find(user => user.email === userEmail && user.password === password )
      if(user){
        setUserIsLogIn(true)
        setCurrentUser(user)
        router.push('/')
        console.log("user susscefully login")
      }else{
        console.log("email or password dose not match")
      }
    } catch (error) {
      console.log("faild to log in " , error)
    }

  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <AuthCard>
        <h1 className="text-2xl font-bold text-center mb-6">
          Sign In
        </h1>

        <form className="flex flex-col gap-4"
          onSubmit={handleSubmit}>
          <AuthInput
            label="Email"
            type="email"
            value={userEmail}
            method={setuserEmail}
            placeholder="example@email.com"
          />

          <AuthInput
            label="Password"
            type="password"
            value={password}
            method={setPassword}
            placeholder="••••••••"
          />

          <button
            className="
              bg-black text-white
              py-2 rounded-lg
              hover:opacity-90
              transition
            "
            type="submit"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center mt-5">
          Don't have an account?{" "}
          <Link href="/signup" className="underline font-medium">
            Sign Up
          </Link>
        </p>
      </AuthCard>
    </main>
  )
}
