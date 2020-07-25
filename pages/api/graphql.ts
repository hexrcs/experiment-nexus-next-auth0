import { NextApiHandler } from 'next';

if (process.env.NODE_ENV === 'development') require('nexus').default.reset();

const app = require('nexus').default;

require('../../graphql/schema');

app.assemble();

const handleGraphql: NextApiHandler = async (req, res) => {
  await app.server.handlers.graphql(req, res);
};

export default handleGraphql;
