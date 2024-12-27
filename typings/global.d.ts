declare module 'vue' {
  export interface GlobalComponents {
    LmButton: typeof import('limo-ui')['LmButton']
  }
}

export {}
