import "./startGame.css";

export function StartGame() {
  return (
    <div className="start_game_container">
      <div className="start_game_header">
        <p className="start_game_title">You're connected! 🎉</p>
        <p className="start_game_desc">
          Both browsers are talking directly to each other. Let's play.
        </p>
      </div>
      <button className="start_game_button">Start Game</button>
    </div>
  );
}
