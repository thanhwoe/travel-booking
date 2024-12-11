import { ERROR_MESSAGE } from './messages';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { z } from 'zod';

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
