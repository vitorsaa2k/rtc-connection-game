import { createFileRoute } from '@tanstack/react-router'
import App from '../App'

export const Route = createFileRoute('/createGame')({
  component: RouteComponent,
})

function RouteComponent() {
  return <App />
}
