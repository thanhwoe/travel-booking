'use client';

import { MinusIcon, PlusIcon } from '../../../icons';
import { memo, useCallback, useState } from 'react';
import { Button, styled, XStack } from 'tamagui';
import { Text } from '../Text';

const RoundButton = styled(Button, {
  w: '$8',
  h: '$8',
  br: '$full',
  ai: 'center',
  jc: 'center',
  borderWidth: '$px',
  borderColor: '$black',
  backgroundColor: '$white',
  disabledStyle: {
    opacity: 0.2,
  },
});

interface IProps {
  value?: number;
  onChange?: (value: number) => void;
}

export const QuantityField = memo<IProps>(({ value = 0, onChange }) => {
  const [val, setVal] = useState(value);

  const handleChange = useCallback((v: number) => {
    setVal((prev) => {
      const sum = prev + v;
      const result = sum < 0 ? 0 : sum;
      onChange?.(result);
      return result;
    });
  }, []);

  return (
    <XStack gap="$6" ai="center">
      <RoundButton onPress={() => handleChange(-1)} disabled={!val}>
        <MinusIcon />
      </RoundButton>
      <Text> {val} </Text>
      <RoundButton onPress={() => handleChange(1)}>
        <PlusIcon />
      </RoundButton>
    </XStack>
  );
});
