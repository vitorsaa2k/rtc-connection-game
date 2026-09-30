import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { RTCContextProvider } from '../contexts/RTCContext/Provider'
import { GameStateProvider } from '../contexts/gameState/Provider'
// eslint-disable-next-line  react-refresh/only-export-components
const RootLayout = () => (
  <>
    <GameStateProvider>
      <RTCContextProvider>
        <div className="p-2 flex gap-2">
          <Link to="/createGame" className="[&.active]:font-bold">
            Create Game
          </Link>
          <Link to="/about" className="[&.active]:font-bold">
            Join Game
          </Link>
        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
      </RTCContextProvider>
    </GameStateProvider>
  </>
)

export const Route = createRootRoute({ component: RootLayout })
