import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { RTCContextProvider } from '../contexts/RTCContext/Provider'
import { GameStateProvider } from '../contexts/gameState/Provider'
// eslint-disable-next-line  react-refresh/only-export-components
const RootLayout = () => (
  <>
    <GameStateProvider>
      <RTCContextProvider>
        <Outlet />
        <TanStackRouterDevtools />
      </RTCContextProvider>
    </GameStateProvider>
  </>
)

export const Route = createRootRoute({ component: RootLayout })
