import "./QRCode.css";

import QRCodeInstance from "qrcode";
import { useEffect, useState } from "react";
import { Spinner } from "../../../../components/icons/spinner";

export function QRCode({ offerLink }: { offerLink: string }) {
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
      <p className="qr_code_subtitle">Or scan this QR code</p>
      <div className="qr_code">
        {qr ? <img src={qr ?? undefined} alt="QR Code" /> : <Spinner />}
      </div>
    </div>
  );
}
