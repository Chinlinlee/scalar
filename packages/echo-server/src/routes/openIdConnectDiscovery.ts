import Express from 'express'

const router = Express.Router()

router.get('/.well-known/openid-configuration', (req, res) => {
  // TODO: Check if that’s the best way to know whether the request was made over HTTPS
  const isHttps = req.headers['x-forwarded-proto'] === 'https'
  const url = `${isHttps ? 'https' : 'http'}://${req.headers.host}`

  res.json({
    issuer: `${url}/`,
    authorization_endpoint: `${url}/oauth2/authorize`,
    token_endpoint: `${url}/oauth2/token`,
    scopes_supported: ['*'],
  })
})

export default router
