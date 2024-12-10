import { ERROR_MESSAGE } from './messages';
import { isValidPhoneNumber } from 'libphonenumber-js';
export const FORM_RULES = {
  password: {
    required: ERROR_MESSAGE.FIELD_REQUIRED('Password'),
    validate: (val: string) => {
      const fieldLength = val.trim().length;

      if (fieldLength < 1) {
        return ERROR_MESSAGE.FIELD_REQUIRED('Password');
      }
    },
  },

  phoneNumber: {
    required: ERROR_MESSAGE.FIELD_REQUIRED('Phone number'),
    validate: (val: string) => {
      if (!isValidPhoneNumber(val)) {
        return ERROR_MESSAGE.FIELD_INVALID('Phone number');
      }
    },
  },
};
