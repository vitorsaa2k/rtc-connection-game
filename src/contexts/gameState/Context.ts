import { createContext } from "react"
import type { GameStateContextType } from "./Types"

export const GameStateContext = createContext<GameStateContextType | null>(null)
