import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from "../../i18n";
import "./languageSelector.css";

const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  en: "EN",
  "pt-BR": "PT",
};

export function LanguageSelector() {
  const { t, i18n } = useTranslation();
  return (
    <div
      className="language_selector"
      role="group"
      aria-label={t("common.changeLanguage")}
    >
      {SUPPORTED_LANGUAGES.map((language) => (
        <button
          key={language}
          type="button"
          className={`language_selector_button ${
            i18n.resolvedLanguage === language && "active_language_button"
          }`}
          onClick={() => i18n.changeLanguage(language)}
          aria-pressed={i18n.resolvedLanguage === language}
        >
          {LANGUAGE_LABELS[language]}
        </button>
      ))}
    </div>
  );
}
