const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://backend-twlrpkz6xa-ey.a.run.app',
      changeOrigin: true,
    })
  );
};
