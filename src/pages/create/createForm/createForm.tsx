import "./createForm.css";
import { CopyLink } from "./components/copyLink";
import { FriendConnection } from "./components/friendConnection";
import { QRCode } from "./components/qrCode";
import { CreateFormTitle } from "./components/title";
import { CopyIcon } from "../../../components/icons/copy";
import { ConnectionDetails } from "./components/connectionDetails";

export function CreateForm() {
  return (
    <div className="create_form_container">
      <CreateFormTitle />
      <CopyLink generatedLink="ssssaskjdhajkdhaskjdsahlkdjashdjakshdkshdjfhjdksfhjsdfjhkdsfhdsfjhdsdsfsdfdsfsdfjhkdsfjksjalhdajksahjkd" />
      <QRCode />
      <FriendConnection />
      <button className="copy_invite_data_button">
        <CopyIcon />
        Copy invite data instead
      </button>
      <ConnectionDetails />
    </div>
  );
}
