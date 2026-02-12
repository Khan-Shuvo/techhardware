import AuthCard from "@/components/Signin_Signup/AuthCard"
import AuthInput from "@/components/Signin_Signup/AuthInput"
import Link from "next/link"


export default function SignInPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <AuthCard>
        <h1 className="text-2xl font-bold text-center mb-6">
          Sign In
        </h1>

        <form className="flex flex-col gap-4">
          <AuthInput
            label="Email"
            type="email"
            placeholder="example@email.com"
          />

          <AuthInput
            label="Password"
            type="password"
            placeholder="••••••••"
          />

          <button
            className="
              bg-black text-white
              py-2 rounded-lg
              hover:opacity-90
              transition
            "
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
