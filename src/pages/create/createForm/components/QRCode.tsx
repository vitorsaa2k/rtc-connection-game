import "./QRCode.css";

import QRCodeInstance from "qrcode";
import { useEffect, useState } from "react";
import { Spinner } from "../../../../components/icons/spinner";
import { useTranslation } from "react-i18next";

export function QRCode({ offerLink }: { offerLink: string }) {
  const { t } = useTranslation();
  const [qr, setQr] = useState<string | null>();
  useEffect(() => {
    QRCodeInstance.toDataURL(offerLink, {
      errorCorrectionLevel: "M",
      margin: 1,
      width: 256,
    }).then((data) => setQr(data));
  }, [offerLink]);
  return (
    <div className="qr_code_container">
      <p className="qr_code_subtitle">{t("createForm.qrCodeSubtitle")}</p>
      <div className="qr_code">
        {qr ? (
          <img src={qr ?? undefined} alt={t("createForm.qrCodeAlt")} />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
