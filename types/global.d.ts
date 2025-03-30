interface Window {
  Calendly?: {
    showPopupWidget: (url: string) => void
    initBadgeWidget: (options: any) => void
    [key: string]: any
  }
}

