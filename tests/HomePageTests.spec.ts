import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'

test.describe('Search Something', () => {
    
  test('Should find search results', async ({ page }) => {
    let homePage: HomePage = new HomePage(page)
    await homePage.visit()
    await homePage.searchFor('Luis Coronel')
    
  })
})
