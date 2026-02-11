import DisplayProduct from "@/components/Shop/DisplayProduct"
type Props = {
  searchParams: Promise<{
    category?: string
    page?: string
  }>
}

export default async function ShopPage({ searchParams }: Props) {
  const params = await searchParams
  const category = params.category || 'all'


  return (
    <div className="py-4 px-3">
      <DisplayProduct category={category} />
    </div>
  )
}
