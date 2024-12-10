'use client';
import {
  Control,
  RegisterOptions,
  useController,
  FieldValues,
  Path,
} from 'react-hook-form';
import { memo } from 'react';
import { Input } from '../Input';
import { GetProps, XStack, YStack } from 'tamagui';
import { Text } from '../Text';

interface InputControllerProps<T extends FieldValues>
  extends GetProps<typeof Input> {
  label: string;
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
  label,
  ...props
}: InputControllerProps<T>) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    <YStack aria-invalid={!!error?.message} {...containerStyle}>
      <Text mb="$2" size="large">
        {label}
      </Text>
      <XStack gap="$4">
        <Input
          value={value}
          onChangeText={onChange}
          onEndEditing={() => onChange(value?.trim())}
          h={52}
          autoCapitalize="none"
          autoCorrect={false}
          onBlur={onBlur}
          {...props}
        />
      </XStack>
      {error?.message && (
        <Text color="$red10" mt="$2" fontSize="$3.5" fontWeight="400">
          {error?.message}
        </Text>
      )}
    </YStack>
  );
};

export const InputController = memo(Component) as typeof Component;
