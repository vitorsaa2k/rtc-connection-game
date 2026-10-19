import "./title.css";
import { useTranslation } from "react-i18next";

export function CreateFormTitle() {
  const { t } = useTranslation();
  return (
    <div className="create_form_title_container">
      <p className="create_form_title">{t("createForm.createFormTitle")}</p>
      <p className="create_form_desc">{t("createForm.createFormDesc")}</p>
    </div>
  );
}
