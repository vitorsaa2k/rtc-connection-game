import { createFileRoute } from '@tanstack/react-router'
import App from '../App'

export const Route = createFileRoute('/createGame')({
  component: RouteComponent,
})

// eslint-disable-next-line  react-refresh/only-export-components
function RouteComponent() {
  return <App />
}
