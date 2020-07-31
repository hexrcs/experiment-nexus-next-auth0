# Fullstack Graphql with Auth0

Next.js, Nexus, Prisma, Auth0

## Spinning it up

1. Create a new Auth0 app, add `http://localhost:3000/api/callback` to the allowed callback URLs.
1. Put your Auth0 client ID, client secret and co. in a `/.env` file
1. Put your DB URL in the `/prisma/.env` file
1. Start the database locally with `npm run db:start`
1. Create tables with `npm run db:init`
1. Start the dev servers with `npm run dev` and `npm run nexus:reflection`
1. Go to `http://localhost:3000`
