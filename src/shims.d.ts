declare interface Window {
  // extend the window
}

// with vite-plugin-md, markdowns can be treat as Vue components
declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

interface ImportMetaEnv {
  readonly VITE_BASE_DOMAIN: string
  VITE_BASE_DOMAIN: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
