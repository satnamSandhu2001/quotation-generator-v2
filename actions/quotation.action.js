'use server';

import { quotationsSchema } from '@/lib/zod/schema';
import prisma from '@/lib/prisma';

export const newQuotation = async (values) => {
  try {
    let validateData = quotationsSchema.safeParse(values);
    if (!validateData.success) return { errors: validateData.error.issues };

    await prisma.quotation.create({
      data: {
        firm_name: validateData.data.firm_name,
        total: validateData.data.total,
        particulars: {
          create: validateData.data.particulars,
        },
      },
    });
    return { success: true };
  } catch (error) {
    console.log(error.message);
    return { error: 'something went wrong' };
  }
};

export const updateQuotation = async (values) => {
  try {
    if (!values.id) return { error: 'Invalid quotation ID!' };
    let validateData = quotationsSchema.safeParse(values);
    if (!validateData.success) return { errors: validateData.error.issues };

    await prisma.$transaction([
      prisma.quotation.update({
        where: {
          id: values.id,
        },
        data: {
          firm_name: values.firm_name,
          total: values.total,
        },
      }),
      prisma.particular.deleteMany({
        where: { quotation_id: values.id },
      }),
      prisma.particular.createMany({
        data: validateData.data.particulars.map((part) => ({
          ...part,
          quotation_id: values.id,
        })),
      }),
    ]);
    return { success: true };
  } catch (error) {
    console.log(error.message);
    return { error: 'something went wrong' };
  }
};

export const getAllQuotations = async () => {
  try {
    const quotations = await prisma.quotation.findMany({
      include: {
        particulars: true,
      },
    });
    return quotations;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getQuotationById = async (id) => {
  try {
    const quotation = await prisma.quotation.findUnique({
      where: { id },
      include: {
        particulars: true,
      },
    });
    return quotation;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const deleteQuotation = async (id) => {
  try {
    if (!id) return { error: 'Invalid ID' };
    await prisma.quotation.delete({
      where: { id },
    });

    return { success: true };
  } catch (error) {
    console.log(error.message);
    return { error: 'something went wrong!' };
  }
};
