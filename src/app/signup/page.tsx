import AuthCard from "@/components/Signin_Signup/AuthCard"
import AuthInput from "@/components/Signin_Signup/AuthInput"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <AuthCard>
        <h1 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form className="flex flex-col gap-4">
          <AuthInput label="Full Name" placeholder="John Doe" />

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

          <AuthInput
          label="Address"
          placeholder="Address" />

          <button
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
