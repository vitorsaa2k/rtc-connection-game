import "./copyAnswer.css";
import { CopyLink } from "./copyLink";
import { CopyAnswerHeader } from "./header";

export function CopyAnswer({ encodedAnswer }: { encodedAnswer: string }) {
  return (
    <div className="copy_answer_container">
      <CopyAnswerHeader />
      <CopyLink
        generatedLink={`${window.location.protocol}//${window.location.host}/connect#answer=${encodedAnswer}`}
      />
    </div>
  );
}
