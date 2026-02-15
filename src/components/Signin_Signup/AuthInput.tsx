"use client"
import { SetStateAction } from "react"

type Props = {
  label: string
  value: string
  type?: string
  placeholder?: string
  method?: React.Dispatch<SetStateAction<string>>
}

export default function AuthInput({
  label,
  value,
  type = "text",
  placeholder,
  method,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => method?.(e.target.value) }
        className="
          border border-gray-300
          rounded-lg
          px-3 py-2
          focus:outline-none
          focus:ring-2
          focus:ring-black
        "
      />
    </div>
  )
}
