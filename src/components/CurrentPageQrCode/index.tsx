import React, { FC, useEffect, useRef } from 'react';
import QrCode from 'qrious';
import './index.scss';

type Props = {
  image?: string;
};

export const CurrentPageQrCode: FC<Props> = ({ image }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const qr = new QrCode({
      value: window.location.href,
      size: 100,
      level: 'H',
    });
    const base64 = qr.toDataURL();
    if (ref.current) {
      const qrcode = new Image();
      qrcode.src = base64;
      const ctx = ref.current.getContext('2d');
      ctx!.fillStyle = '#fff';
      const bgRectWidth = 220;
      ctx!.fillRect(0, 0, bgRectWidth, bgRectWidth);
      qrcode.onload = () => {
        const qrCodeWith = 200;
        const offset1 = (bgRectWidth - qrCodeWith) / 2;
        ctx!.drawImage(qrcode, offset1, offset1, qrCodeWith, qrCodeWith);
        // 画完二维码再画头像
        if (image) {
          const avatar = new Image();
          avatar.src = image;
          avatar.onload = () => {
            const avatarWith = 80;
            const offset2 = (bgRectWidth - avatarWith) / 2;
            ctx!.drawImage(avatar, offset2, offset2, avatarWith, avatarWith);
          };
        }
      };
    }
  }, [image]);

  return (
    <div className="shareQrCode">
      <canvas ref={ref} width={220} height={220} />
    </div>
  );
};
