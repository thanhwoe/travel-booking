'use client';

import { memo, useCallback, useRef, useState } from 'react';
import { Input } from '../Input';
import parsePhoneNumber, { isPossiblePhoneNumber } from 'libphonenumber-js';
import { GetProps, XStack, YStack } from 'tamagui';
import { CountryCodeSelector } from './CodeSelector';
import { TextInput } from 'react-native';
import {
  Control,
  RegisterOptions,
  useController,
  FieldValues,
  Path,
} from 'react-hook-form';
import { Text } from '../Text';

interface InputControllerProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions<T>;
  containerStyle?: GetProps<typeof YStack>;
}

const Component = <T extends FieldValues>({
  name,
  control,
  rules,
  containerStyle,
  ...props
}: InputControllerProps<T>) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name, control, rules });

  const [phoneNumber, setPhoneNumber] = useState('');

  const [phoneCode, setPhoneCode] = useState('+1');

  const phoneRef = useRef<TextInput>(null);

  const handleChangeCountryCode = useCallback(
    (code: string) => {
      if (code.length === 4) {
        phoneRef.current?.focus();
      }
      setPhoneCode(code);
      onChange(code + phoneNumber);
    },
    [onChange, phoneNumber]
  );

  const handleSelectCountryCode = useCallback(
    (code: string) => {
      phoneRef.current?.focus();
      setPhoneCode(code);
      onChange(code + phoneNumber);
    },
    [onChange, phoneNumber]
  );

  const handleFormatPhoneNumber = useCallback(
    (val: string) => {
      const trim = val.replace(/[^0-9]/g, '');

      const phone = phoneCode + trim;
      if (isPossiblePhoneNumber(phone)) {
        const phoneFormatted = parsePhoneNumber(phone)?.formatNational() || '';
        setPhoneNumber(phoneFormatted);
      } else {
        setPhoneNumber(trim);
      }
      onChange(phone);
    },
    [onChange, phoneCode]
  );

  return (
    <YStack aria-invalid={!!error?.message} {...containerStyle}>
      <Text mb="$2" size="large">
        Enter your mobile number:
      </Text>
      <XStack gap="$4">
        <CountryCodeSelector
          defaultCode={phoneCode}
          onSelect={handleSelectCountryCode}
          onChange={handleChangeCountryCode}
        />

        <Input
          ref={phoneRef}
          defaultValue={value}
          value={phoneNumber}
          onChangeText={handleFormatPhoneNumber}
          inputMode="tel"
          placeholder="+1 Mobile number"
          errorMessage={error?.message}
          onBlur={onBlur}
          {...props}
        />
      </XStack>
    </YStack>
  );
};

export const PhoneInputController = memo(Component) as typeof Component;
