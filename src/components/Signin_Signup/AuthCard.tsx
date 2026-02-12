import { ReactNode } from "react"

export default function AuthCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        w-full max-w-md
        bg-white
        text-black
        rounded-2xl
        p-8
        shadow-lg
      "
    >
      {children}
    </div>
  )
}
