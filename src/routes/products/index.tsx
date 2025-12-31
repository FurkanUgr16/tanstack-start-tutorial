import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col">
      Hello "/products/"!
      <Link to="/products/$id" params={{ id: '1' }}>
        Product 1
      </Link>
      <Link to="/products/$id" params={{ id: '2' }}>
        Product 2
      </Link>
      <Link to="/products/$id" params={{ id: '3' }}>
        Product 3
      </Link>
    </div>
  )
}
