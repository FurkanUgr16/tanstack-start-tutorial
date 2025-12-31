import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRightIcon } from 'lucide-react'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/')({
  loader: async () => {
    // This runs on server during SSR AND on client during navigation
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data)
    return { products: data.slice(0, 4) }
  },
  component: App,
})

function App() {
  const { products } = Route.useLoaderData()
  console.log(products)
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
    </div>
  )
}
