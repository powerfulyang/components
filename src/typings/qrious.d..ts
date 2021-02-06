declare module 'qrious' {
  export default class QrCode {
    value: string;

    constructor(options: any);

    toDataURL(): string;
  }
}
