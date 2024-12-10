'use client';

import { GetProps, Popover, Separator, XStack, YStack } from 'tamagui';
import { Input } from '../Input';
import { memo, useCallback, useMemo, useState } from 'react';
import { PHONE_CODE, PHONE_CODE_PREFIX } from '@shared/constants';
import { Text } from '../Text';
import { ChevronDownIcon } from '../../../icons';

interface CountryCodeSelectorProps
  extends Pick<GetProps<typeof Input>, 'onFocus' | 'onBlur'> {
  onSelect: (code: string) => void;
  onChange: (code: string) => void;
  defaultCode?: string;
}

export const CountryCodeSelector = memo<CountryCodeSelectorProps>(
  ({ onSelect, defaultCode, onChange, ...props }) => {
    const [value, setValue] = useState(defaultCode);
    const [isOpenList, setIsOpenList] = useState(false);

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

    const handleSelect = useCallback(
      (val: string) => {
        const code = val.includes(PHONE_CODE_PREFIX)
          ? val
          : PHONE_CODE_PREFIX + val;
        setValue(code);
        onSelect(code);
      },
      [onSelect]
    );

    const renderListOption = useMemo(
      () => (
        <Popover.ScrollView>
          {PHONE_CODE.map(({ code, countryName }, index) => (
            <YStack key={`${code + countryName}`}>
              <Popover.Trigger
                asChild
                flexDirection="row"
                onPress={() => setIsOpenList(false)}
              >
                <XStack
                  onPress={() => handleSelect(code)}
                  justifyContent="space-between"
                  paddingVertical="$2.5"
                >
                  <Text>{countryName}</Text>
                  <Text>+{code}</Text>
                </XStack>
              </Popover.Trigger>
              {PHONE_CODE.length - 1 !== index && <Separator />}
            </YStack>
          ))}
        </Popover.ScrollView>
      ),
      [handleSelect]
    );

    return (
      <XStack>
        <Popover open={isOpenList} onOpenChange={setIsOpenList}>
          <Popover.Anchor>
            <Input
              value={value}
              rightIcon={
                <Popover.Trigger onPress={() => setIsOpenList(true)}>
                  <ChevronDownIcon />
                </Popover.Trigger>
              }
              inputMode="tel"
              containerStyle={{
                w: 105,
                flexGrow: 1,
                backgroundColor: '$grey50',
                borderColor: '$grey50',
              }}
              onChangeText={handleCodeChange}
              {...props}
            />
          </Popover.Anchor>

          <Popover.Content
            $platform-web={{
              maxHeight: 300,
              borderWidth: '$px',
            }}
          >
            {renderListOption}
          </Popover.Content>
          <Popover.Adapt platform="touch">
            <Popover.Sheet modal dismissOnSnapToBottom snapPoints={[25]}>
              <Popover.Sheet.Overlay />
              <Popover.Sheet.Frame paddingHorizontal="$5.5" pt="$2.5">
                <Popover.Sheet.ScrollView>
                  <Popover.Adapt.Contents />
                </Popover.Sheet.ScrollView>
              </Popover.Sheet.Frame>
            </Popover.Sheet>
          </Popover.Adapt>
        </Popover>
      </XStack>
    );
  }
);
