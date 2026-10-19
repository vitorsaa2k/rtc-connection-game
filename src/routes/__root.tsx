import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { RTCContextProvider } from '../contexts/RTCContext/Provider'
import { GameStateProvider } from '../contexts/gameState/Provider'
import { LanguageSelector } from '../components/languageSelector/languageSelector'
// eslint-disable-next-line  react-refresh/only-export-components
const RootLayout = () => (
  <>
    <GameStateProvider>
      <RTCContextProvider>
        <LanguageSelector />
        <Outlet />
        <TanStackRouterDevtools />
      </RTCContextProvider>
    </GameStateProvider>
  </>
)

export const Route = createRootRoute({ component: RootLayout })
