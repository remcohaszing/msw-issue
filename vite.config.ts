import { playwright } from '@vitest/browser-playwright'
import { msw } from 'msw/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [msw()],
  test: {
    browser: {
      provider: playwright(),
      headless: true,
      instances: [{ browser: 'chromium' }]
    }
  }
})
