'use client';

import { GetProps, XStack } from 'tamagui';
import { Input } from '../Input';
import { memo, useCallback, useState } from 'react';
import { PHONE_CODE_PREFIX } from '@shared/constants';

interface CountryCodeSelectorProps
  extends Pick<GetProps<typeof Input>, 'onFocus' | 'onBlur'> {
  onSelect: (code: string) => void;
  onChange: (code: string) => void;
  defaultCode?: string;
}

export const CountryCodeSelector = memo<CountryCodeSelectorProps>(
  ({ onSelect, defaultCode, onChange, ...props }) => {
    const [value, setValue] = useState(defaultCode);

    const handleCodeChange = useCallback(
      (val: string) => {
        const trim = val.replace(/[^0-9]/g, '');

        const code = trim.includes(PHONE_CODE_PREFIX)
          ? trim
          : PHONE_CODE_PREFIX + trim;
        if (code.length < 5) {
          onChange(code);
          setValue(code);
        }
      },
      [onChange]
    );

    return (
      <XStack>
        <Input
          value={value}
          inputMode="tel"
          containerStyle={{
            flexGrow: 1,
            w: 85,
            backgroundColor: '$grey50',
            borderColor: '$grey50',
          }}
          onChangeText={handleCodeChange}
          {...props}
        />
      </XStack>
    );
  }
);
