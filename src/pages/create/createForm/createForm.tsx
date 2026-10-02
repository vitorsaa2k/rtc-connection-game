import { CopyLink } from "./components/copyLink";
import { FriendConnection } from "./components/friendConnection";
import { QRCode } from "./components/qrCode";
import { CreateFormTitle } from "./components/title";

export function CreateForm() {
  return (
    <div>
      <CreateFormTitle />
      <CopyLink generatedLink="ssssaskjdhajkdhaskjdsahlkdjashdjakshdkshdjfhjdksfhjsdfjhkdsfhdsfjhdsdsfsdfdsfsdfjhkdsfjksjalhdajksahjkd" />
      <QRCode />
      <FriendConnection />
      <button>Copy invite data instead</button>
      <div>
        <p>Advanced connection details</p>
      </div>
    </div>
  );
}
