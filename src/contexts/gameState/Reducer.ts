import type { GameState, GameStateActions } from "./Types";

export function gameStateReducer(state: GameState, action: GameStateActions): GameState {
  switch (action.type) {
    case "START":
      return { ...state, started: true }
    case "FINISH":
      return { ...state, finished: true }
    case "INCREASE_TOTAL_ANSWERED":
      return { ...state, totalAnswered: state.totalAnswered + 1 }
    case "INCREASE_PLAYER2_TOTAL_ANSWERED":
      return { ...state, player2TotalAnswered: state.player2TotalAnswered + 1 }
    case "ANSWER":
      return { ...state, answers: [...state.answers, action.payload] }
    case "PLAYER2_ANSWER":
      return { ...state, player2Answers: [...state.player2Answers, action.payload] }
    case "SET_PLAYER_NUMBER":
      return { ...state, playerNumber: action.payload }
    default:
      return state
  }
}

export const initialGameState: GameState = {
  started: false,
  finished: false,
  totalAnswered: 0,
  player2TotalAnswered: 0,
  answers: [],
  player2Answers: [],
  playerNumber: "player1"
}
