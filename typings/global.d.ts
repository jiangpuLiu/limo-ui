declare module 'vue' {
  export interface GlobalComponents {
    LmButton: typeof import('limo-ui')['LmButton']
    LmButtonGroup: typeof import('limo-ui')['LmButtonGroup']
  }
}

export {}
