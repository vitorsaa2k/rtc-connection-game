import "./title.css";

export function CreateFormTitle() {
  return (
    <div className="create_form_title_container">
      <p className="create_form_title">Your game is ready!</p>
      <p className="create_form_desc">
        Send this link to your friend. They'll send an answer back to finish the
        connection.
      </p>
    </div>
  );
}
