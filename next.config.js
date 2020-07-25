const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    env: {
      // auth stuff
      REDIRECT_URI: isDev
        ? 'http://localhost:3000/api/callback'
        : 'https://prisma-project-sam.now.sh/api/callback',
      POST_LOGOUT_REDIRECT_URI: isDev
        ? 'http://localhost:3000/'
        : 'https://prisma-project-sam.now.sh/',
      AUTH0_SCOPE: 'openid email profile',
      // server stuff
      SERVER_URL: isDev
        ? 'http://localhost:3000'
        : 'https://prisma-project-sam.now.sh',
      GRAPHQL_ENDPOINT: isDev
        ? 'http://localhost:3000/api/graphql'
        : 'https://prisma-project-sam.now.sh/api/graphql',
    },
  };
};
