import { LucideIcon } from "lucide-react"

type CardProps = {
    icon: LucideIcon;
    title: string;
    description?: string;
    count?: number;
    variant?: "feature" | "category";
};

export default function Card({ icon: Icon, title, description, count, variant }: CardProps) {
    return (
        <div className={`bg-white dark:bg-black dark:text-white border rounded-2xl shadow-sm hover:shadow-md transition-all p-5 ${variant === "feature" ? "flex items-center gap-4" : "flex flex-col items-center text-center gap-3"}`}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                <Icon size={22} />
            </div>
            <div className={variant === "feature" ? 'text-left': ''}>
                <h3 className="font-semibold text-lg">{title}</h3>
                {description&&(
                    <p className="text-sm text-zinc-500"> {description}</p>
                )}
                {count !== undefined &&(
                    <p className="text-sm text-zinc-500">{count} products</p>
                )}
            </div>
        </div>
    )
}