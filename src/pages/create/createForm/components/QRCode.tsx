import "./QRCode.css";

import QRCodeInstance from "qrcode";
import { useEffect, useState } from "react";

export function QRCode({ offerLink }: { offerLink: string }) {
  const [qr, setQr] = useState("");
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
        <img src={qr} alt="QR Code" />
      </div>
    </div>
  );
}
