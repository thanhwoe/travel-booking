'use client';
import { memo } from 'react';
import { CheckIcon } from '../../../icons';
import { Checkbox as TCheckbox, CheckboxProps } from 'tamagui';

export const Checkbox = memo<CheckboxProps>((props) => {
  return (
    <TCheckbox
      size="$10"
      backgroundColor="transparent"
      borderColor="$grey20"
      overflow="hidden"
      borderRadius="$0.5"
      focusStyle={{
        borderColor: '$black',
      }}
      {...props}
    >
      <TCheckbox.Indicator backgroundColor="$primary10">
        <CheckIcon color="white" />
      </TCheckbox.Indicator>
    </TCheckbox>
  );
});
