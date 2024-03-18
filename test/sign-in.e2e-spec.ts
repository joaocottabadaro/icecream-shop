import { expect, test } from '@playwright/test'

test('has sign-in', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'domcontentloaded' })

  // Expect a title "to contain" a substring.
  await page.getByLabel('Seu e-mail').fill('joaobadaro@gmail.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Link enviado para o seu email!')

  expect(toast).toBeVisible()
})

test('has sign-in with wrong email', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'domcontentloaded' })

  // Expect a title "to contain" a substring.
  await page.getByLabel('Seu e-mail').fill('joaobadaro98@gmail.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Credenciais inválidas.')

  expect(toast).toBeVisible()
})
test('navigate to sign-up', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'domcontentloaded' })

  // Expect a title "to contain" a substring.
  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  await expect(page.url()).toContain('/sign-up')
})
