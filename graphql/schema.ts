import { schema, use } from 'nexus';
import { prisma } from 'nexus-plugin-prisma';
import auth0 from '../lib/auth0';
import { Auth0SessionUser } from '../lib/types';

use(prisma({ features: { crud: true } }));

// =====Auth=====

schema.addToContext(async (req) => {
  // @ts-ignore
  const session = await auth0.getSession(req);
  const user = session?.user as Auth0SessionUser;
  const sub = user?.sub;
  return { userId: sub };
});

// =====Query Type=====

schema.queryType({
  definition(t) {
    t.field('me', {
      type: 'User',
      resolve(_parent, _args, ctx) {
        return ctx.db.user.findOne({ where: { userId: ctx.userId } });
      },
    });
  },
});

// =====Object Types=====

schema.objectType({
  name: 'User',
  definition(t) {
    t.model.userId();
    t.model.name();
  },
});
