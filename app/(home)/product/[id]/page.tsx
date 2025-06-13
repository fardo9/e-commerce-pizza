type Params = Promise<{ id: string }>

export default async function ProductPage({ params }: { params: Params }) {
  const { id } = await params

  return (
    <>
      <h2>Product {id}</h2>
    </>
  )
}
