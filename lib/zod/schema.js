import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Email field is missing!'),
  password: z.string().min(1, 'Password field is missing!'),
});

const particularSchema = z.object({
  price: z.number().gte(0, 'Price is missing!'),
  title: z.string().min(1, 'Title is missing!'),
  description: z.string().min(1, 'Description is missing!'),
});

export const quotationsSchema = z.object({
  firm_name: z.string().min(1, 'Firm Name required!'),
  total: z.number().gt(0, 'Total amount must be greater than 0!'),
  particulars: z.array(particularSchema),
  currency: z.string().min(1, 'Please select currency'),
  date: z.string().date({
    required_error: 'Please select a date',
    invalid_type_error: 'Select valid date.',
  }),
  termsConditions: z.array(
    z.string().refine((val) => val.trim() !== '', {
      message: 'Empty field!',
    })
  ),
});
