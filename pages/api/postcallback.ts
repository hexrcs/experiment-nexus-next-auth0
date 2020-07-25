import { NextApiHandler } from 'next';
import auth0 from '../../lib/auth0';
import { Auth0SessionUser } from '../../lib/types';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const postCallback: NextApiHandler = async (req, res) => {
  try {
    const session = await auth0.getSession(req);
    const sessionUser = session?.user as Auth0SessionUser | undefined;
    const name = sessionUser?.name;
    const sub = sessionUser?.sub;
    if (!session || !sessionUser || !name || !sub) {
      throw { status: 403, message: 'invalid session' };
    }

    let user = await prisma.user.findOne({ where: { userId: sub } });
    if (!user) {
      user = await prisma.user.create({
        data: {
          userId: sub,
          name: name,
        },
      });
    }
    res.writeHead(302, { Location: `/` }).end();
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
};

export default postCallback;
