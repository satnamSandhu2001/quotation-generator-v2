'use server';

import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { loginSchema } from '@/lib/zod/schema';
import { signIn, signOut } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

export const register = async () => {
  try {
    // let email = '';
    // let password = '';

    let hashedPassword = bcrypt.hashSync(password, 10);
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    console.log('-----user created-----');
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (values) => {
  const validateFields = loginSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: 'Invalid fields!' };
  }
  const { email, password } = validateFields.data;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!' };
        default:
          return { error: 'Something went wrong!' };
      }
    }
    console.log(error.message);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut({ redirectTo: '/' });
  } catch (error) {
    console.log(error.message);
    if (error.message.includes('NEXT_REDIRECT')) {
      redirect('/');
    }
  }
};
