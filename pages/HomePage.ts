import { Locator, Page } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly searchBox: Locator
  readonly searchButton: Locator

  constructor(page: Page) {
    this.page = page
    this.searchBox = page.locator('.gLFyf')
    this.searchButton = page.getByRole('button', { name: "btnK" })
  }

  async visit() {
    await this.page.goto('https://www.google.com/')
  }

  async searchFor(phrase: string) {
    await this.searchBox.type(phrase)
    await this.page.keyboard.press('Enter')

    await this.page.pause()
  }
}
