/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_ORIGIN?: string;
}

declare module "*.md?raw" {
  const content: string;
  export default content;
}
