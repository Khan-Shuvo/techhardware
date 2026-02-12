type Props = {
  label: string
  type?: string
  placeholder?: string
}

export default function AuthInput({
  label,
  type = "text",
  placeholder,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
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
