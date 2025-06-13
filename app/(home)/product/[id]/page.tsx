type AwaitedParams<T> = Awaited<T> extends { params: infer P } ? P : never

export default async function ProductPage(props: {
  params: AwaitedParams<{ params: { id: string } }>
}) {
  const { params } = props
  return <h2>Product {params.id}</h2>
}
