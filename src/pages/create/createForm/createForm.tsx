import { CopyLink } from "./components/copyLink";
import { CreateFormTitle } from "./components/title";

export function CreateForm() {
  return (
    <div>
      <CreateFormTitle />
      <CopyLink generatedLink="ssssaskjdhajkdhaskjdsahlkdjashdjakshdkshdjfhjdksfhjsdfjhkdsfhdsfjhdsdsfsdfdsfsdfjhkdsfjksjalhdajksahjkd" />
      <div>
        <div></div>
        <p>Or scan this QR code</p>
      </div>
      <div>
        <p>Waiting for your friend to connect...</p>
        <p>
          When they send their answer back, open it or paste it on the connect
          screen
        </p>
        <button>I have my friend's answer</button>
      </div>
      <button>Copy invite data instead</button>
      <div>
        <p>Advanced connection details</p>
      </div>
    </div>
  );
}
