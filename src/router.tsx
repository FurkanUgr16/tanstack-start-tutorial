import { Link, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},

    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPreload: 'intent',
    defaultNotFoundComponent: () => {
      return (
        <div>
          <p>Not Found Page</p>
          <Link to="/">Go back Home</Link>
        </div>
      )
    },
    defaultErrorComponent: ({ error }: { error: Error }) => (
      <div>{error.message}</div>
    ),
  })

  return router
}
