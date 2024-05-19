import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { loginSchema } from '@/lib/zod/schema';
import prisma from '@/lib/prisma';

const authConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = loginSchema.safeParse(credentials);
        if (validateFields.success) {
          const { email, password } = validateFields.data;
          const user = await prisma.user.findUnique({
            where: { email },
          });
          if (!user || !user?.password) return null;
          const passwordMatch = bcrypt.compareSync(password, user.password);
          if (passwordMatch) return user;
        }
        return null;
      },
    }),
  ],
};

export default authConfig;
