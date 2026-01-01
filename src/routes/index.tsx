import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRightIcon } from 'lucide-react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { sampleProducts } from '@/db/seed'
import { ProductCard } from '@/components/ProductCard'

export const Route = createFileRoute('/')({
  loader: () => {
    return { products: sampleProducts }
  },
  component: App,
})

function App() {
  const { products } = Route.useLoaderData()

  return (
    <div className="space-y-12  p-6">
      <section>
        <Card className=" p-8 shadow-md bg-white/80">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Your favorite e-commerce brand
          </p>
          <CardTitle className="text-4xl font-bold leading-tight max-w-2xl">
            <h1>StartShop - Yout one-stop shop for all you needs</h1>
          </CardTitle>
          <CardDescription>
            <Link
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white bg-slate-900 shadow-lg transition hover:-translate-0.5 hover:shadow-xl"
              to="/products"
            >
              <span>Browse products</span>
              <ArrowRightIcon size={16} />
            </Link>
          </CardDescription>
        </Card>
      </section>

      <section className="bg-white rounded-xl p-4 space-y-4 max-w-6xl mx-auto">
        <Card className="p-8 shadow-md bg-white/80">
          <div className="flex justify-between items-center">
            <div>
              <CardHeader className="px-0">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  Recomended
                </p>
                <CardTitle className="text-2xl font-semibold">
                  Starter picks from the catalog
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-sm">
                Curated items to try the cart and detail pages quickly
              </CardDescription>
            </div>
            <div>
              <Link
                to="/products"
                className=" hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white bg-slate-900 shadow-lg transition hover:-translate-0.5 hover:shadow-xl"
              >
                <span>Browse products</span>
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>
          <div className="grid gap-4 grid:cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={`${product}-${index}`} product={product} />
            ))}
          </div>
        </Card>
      </section>
    </div>
  )
}
