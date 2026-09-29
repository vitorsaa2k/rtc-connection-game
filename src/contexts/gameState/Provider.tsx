import { useReducer, type ReactNode } from "react";
import { GameStateContext } from "./Context";
import { gameStateReducer, initialGameState } from "./Reducer";

export function GameStateProvider({ children }: { children: ReactNode }) {
  const stateReducer = useReducer(gameStateReducer, initialGameState)

  return <GameStateContext.Provider value={stateReducer}>{children}</GameStateContext.Provider>
}
