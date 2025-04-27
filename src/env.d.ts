interface ImportMetaEnv {
  readonly EMAIL: string;
  readonly EMAIL_PASS: string;
  readonly SMTP_HOST: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
