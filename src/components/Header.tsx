import { Link } from '@tanstack/react-router'
import { ShoppingBag } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b backdrop-blur bg-white">
      <div className="flex mx-auto max-w-6xl px-4 py-3 justify-between items-center">
        <div className="flex items-center gap-3">
          <Link className="flex items-center gap-2" to="/">
            <div className="flex h-10 w-10  bg-slate-900 text-white items-center justify-center rounded-xl">
              <ShoppingBag size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">StartShop</span>
            </div>
          </Link>
          <nav className="hidden items-center gap-3 text-sm font-medium sm:flex">
            <Link className="rounded-lg px-3 py-1 " to="/">
              Home
            </Link>

            <Link className="rounded-lg px-3 py-1 " to="/products">
              Products
            </Link>
            <Link
              className="rounded-lg px-3 py-1 transition"
              to="/create-product"
            >
              Create Product
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            to="/cart"
          >
            <span>Cart</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full px-2 text-[11px] font-bold">
              0
            </span>
            <span className="hidden text-[11px] font-medium sm:inline">
              $10
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
