import {
  invoiceSchema,
  paymentSchema,
  signInSchema,
  signUpSchema,
} from '@shared/constants';
import { z } from 'zod';

export type ISignInForm = z.infer<typeof signInSchema>;

export type ISignUpForm = z.infer<typeof signUpSchema>;

export type IInvoiceForm = z.infer<typeof invoiceSchema>;

export type IPaymentForm = z.infer<typeof paymentSchema>;
