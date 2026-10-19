import "./header.css";
import { useTranslation } from "react-i18next";

export function CopyAnswerHeader() {
  const { t } = useTranslation();
  return (
    <div className="copy_answer_header">
      <h1>{t("join.copyAnswerReadyTitle")}</h1>
      <p className="copy_answer_desc">{t("join.copyAnswerReadyDesc")}</p>
    </div>
  );
}
