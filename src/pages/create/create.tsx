import { useState } from "react";
import "./create.css";
import { CreateForm } from "./createForm/createForm";

export function Create() {
  const [isCreating, setIsCreating] = useState<boolean>(false);

  async function createRoom() {
    setIsCreating(true);
  }

  return (
    <main>
      <div className="game_form_container">
        {isCreating ? (
          <CreateForm />
        ) : (
          <>
            <div className="game_title_container">
              <p className="title">Create Game</p>
              <p className="desc">
                We'll set up a private room in your browser and give you a link
                to send to your friend.
              </p>
            </div>
            <button onClick={createRoom} className="create_room_button">
              Create Room
            </button>
          </>
        )}

        <p className="keep_open_warn">
          Keep this tab open while your friend joins.
        </p>
      </div>
    </main>
  );
}
