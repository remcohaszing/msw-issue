import { http, HttpResponse } from 'msw/http'
import { network } from 'virtual:msw'
import { expect, test } from 'vitest'

await network.enable()

test('user', async () => {
  network.use(
    http.get('/user', () => HttpResponse.json({ id: 42, username: 'john' }))
  )

  const response = await fetch('/user')
  expect(response.status).toBe(200)
  expect(await response.json()).toEqual({ id: 42, username: 'john' })
})
