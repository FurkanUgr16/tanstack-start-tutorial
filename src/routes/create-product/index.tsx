import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/create-product/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/create-product/"!</div>
}
