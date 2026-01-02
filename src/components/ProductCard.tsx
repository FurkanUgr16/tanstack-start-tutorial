import { ShoppingBagIcon } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Button } from './ui/button'

import type { ProductSelect } from '@/db/schema'
import { cn } from '@/lib/utils'

const inventoryTone = {
  'in-stock': 'bg-emerald-50 text-emerald-600 border-emerald-100',
  backorder: 'bg-amber-50 text-amber-600 border-amber-100',
  preorder: 'bg-indigo-50 text-indigo-600 border-indigo-100',
}

export const ProductCard = ({ product }: { product: ProductSelect }) => {
  return (
    <Link
      className="cursor-pointer h-full transition duration-300 hover:-translate-y-1 hover:shadow-md"
      to="/products/$id"
      params={{ id: product.id }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            {product.badge && (
              <span className="rounded-full bg-slate-900 px-2 py-0.5 text-xs font-semibold text-white">
                {product.badge}
              </span>
            )}
          </div>
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <p className="flex items-center justify-between gap-2 text-sm">
            <span className="font-semibold">{product.rating}</span>
            <span className="text-slate-400">({product.reviews} reviews)</span>
          </p>

          <span
            className={cn(
              'rounded-full border px-3 py-1 text-xs font-semibold',
              inventoryTone[product.inventory],
            )}
          >
            {product.inventory === 'in-stock'
              ? 'In Stock'
              : product.inventory === 'backorder'
                ? 'Backorder'
                : 'Preorder'}
          </span>
        </CardContent>
        <CardFooter className="pt-0 flex items-center justify-between">
          <span>${product.price}</span>
          <Button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              console.log('added to cart')
            }}
          >
            <ShoppingBagIcon size={16} />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
