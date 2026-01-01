import { createFileRoute } from '@tanstack/react-router'

import { createServerFn } from '@tanstack/react-start'
import { useQuery } from '@tanstack/react-query'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { sampleProducts } from '@/db/seed'
import { ProductCard } from '@/components/ProductCard'

const fetchProductsFn = createServerFn({ method: 'GET' }).handler(() => {
  return sampleProducts
})

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
  loader: () => {
    return fetchProductsFn()
  },
})

function RouteComponent() {
  const products = Route.useLoaderData()
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProductsFn(),
    initialData: products,
  })

  console.log('----data----', data)

  return (
    <div className="space-y-6">
      <section className="bg-white rounded-xl p-4 space-y-4 max-w-6xl mx-auto">
        <Card className="p-8 shadow-md bg-white/80">
          <div className="flex justify-between items-center">
            <div>
              <CardHeader className="px-0">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  StartShop Catalog
                </p>
                <CardTitle className="text-2xl font-semibold">
                  Products built for makers
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-sm">
                Browse a minimal, production-flavoured catalog with Tanstack
                Start server functions and typed routes
              </CardDescription>
            </div>
          </div>
        </Card>
      </section>

      <section className="bg-white rounded-xl p-4 space-y-4 max-w-6xl mx-auto">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((product, index) => (
            <ProductCard key={`${product}-${index}`} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
