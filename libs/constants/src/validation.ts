import { ERROR_MESSAGE } from './messages';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { z } from 'zod';

export const REGEX = {
  date: /^\d{2}\/\d{2}\/\d{4}$/,
};

export const signUpSchema = z.object({
  phoneNumber: z
    .string({
      message: ERROR_MESSAGE.FIELD_REQUIRED('Phone number'),
    })
    .refine((val) => isValidPhoneNumber(val), {
      message: ERROR_MESSAGE.FIELD_INVALID('Phone number'),
    }),
  password: z
    .string({
      message: ERROR_MESSAGE.FIELD_REQUIRED('Password'),
    })
    .trim()
    .min(8, ERROR_MESSAGE.FIELD_INVALID('Password')),
});

export const signInSchema = z.object({
  phoneNumber: z
    .string({
      message: ERROR_MESSAGE.FIELD_REQUIRED('Phone number'),
    })
    .refine((val) => isValidPhoneNumber(val), {
      message: ERROR_MESSAGE.FIELD_INVALID('Phone number'),
    }),
  password: z
    .string({
      message: ERROR_MESSAGE.FIELD_REQUIRED('Password'),
    })
    .trim()
    .min(8, ERROR_MESSAGE.FIELD_INVALID('Password')),
});

export const invoiceSchema = z
  .object({
    startDate: z
      .string({
        message: ERROR_MESSAGE.FIELD_REQUIRED('Check in date'),
      })
      .regex(REGEX.date, {
        message: 'Date must be in MM/DD/YYYY format',
      })
      .transform((str) => {
        const [month, day, year] = str.split('/').map(Number);
        return new Date(year, month - 1, day);
      })
      .refine((date) => !isNaN(date?.getTime?.()), {
        message: ERROR_MESSAGE.FIELD_INVALID('Check in date'),
      })
      .refine((date) => date >= new Date(new Date().setHours(0, 0, 0, 0)), {
        message: ERROR_MESSAGE.FIELD_INVALID('Check in date'),
      }),
    endDate: z
      .string({
        message: ERROR_MESSAGE.FIELD_REQUIRED('Check out date'),
      })
      .regex(REGEX.date, {
        message: 'Date must be in MM/DD/YYYY format',
      })
      .transform((str) => {
        const [month, day, year] = str.split('/').map(Number);
        return new Date(year, month - 1, day);
      })
      .refine((date) => !isNaN(date?.getTime?.()), {
        message: ERROR_MESSAGE.FIELD_INVALID('Check out date'),
      })
      .refine((date) => date >= new Date(new Date().setHours(0, 0, 0, 0)), {
        message: ERROR_MESSAGE.FIELD_INVALID('Check out date'),
      }),
    guest: z
      .string({
        message: ERROR_MESSAGE.FIELD_REQUIRED('Guest'),
      })
      .refine((value) => !isNaN(Number(value)), {
        message: ERROR_MESSAGE.FIELD_INVALID('Guest'),
      })
      .transform((value) => Number(value))
      .refine((num) => num >= 1, {
        message: ERROR_MESSAGE.FIELD_INVALID('Guest'),
      }),
  })
  .refine((data) => {
    return (
      data.startDate.toISOString().slice(0, 10) !==
        data.endDate.toISOString().slice(0, 10),
      {
        message: ERROR_MESSAGE.FIELD_INVALID('Check out date'),
        path: ['endDate'],
      }
    );
  });

export const paymentSchema = z.object({
  cardNumber: z.string({
    message: ERROR_MESSAGE.FIELD_REQUIRED('Card number'),
  }),
  cardHolder: z.string({
    message: ERROR_MESSAGE.FIELD_REQUIRED('Card holder'),
  }),
  expDate: z.string({
    message: ERROR_MESSAGE.FIELD_REQUIRED('Expiration date'),
  }),
  cvv: z.string({
    message: ERROR_MESSAGE.FIELD_REQUIRED('CVV'),
  }),
});
