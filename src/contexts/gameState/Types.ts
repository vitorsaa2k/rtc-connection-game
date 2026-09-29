export type GameStateContextType = [GameState, React.ActionDispatch<[action: GameStateActions]>]

export interface GameState {
  started: boolean
  finished: boolean
  totalAnswered: number
  player2TotalAnswered: number
  answers: {questionId: number, answer: string}[]
  player2Answers: { questionId: number, answer: string }[]
  playerNumber: "player1" | "player2"
}


export type GameStateActions =
  | { type: "START" }
  | { type: "FINISH" }
  | { type: "INCREASE_TOTAL_ANSWERED" }
  | { type: "INCREASE_PLAYER2_TOTAL_ANSWERED" }
  | { type: "ANSWER", payload: { questionId: number, answer: string } }
  | { type: "PLAYER2_ANSWER", payload: { questionId: number, answer: string } }
  | { type: "SET_PLAYER_NUMBER", payload: "player1" | "player2" }
