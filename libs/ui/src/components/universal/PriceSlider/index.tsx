'use client';

import { ChevronRightIcon, ChevronLeftIcon } from '../../../icons';
import { memo, useState } from 'react';
import { Slider, XStack, YStack } from 'tamagui';
import { Text } from '../Text';

interface PriceSliderProps {
  onChange: (value: number) => void;
}

export const PriceSlider = memo<PriceSliderProps>(({ onChange }) => {
  const [value, setValue] = useState(100);

  return (
    <YStack>
      <Slider
        size="$4"
        defaultValue={[100]}
        max={1000}
        step={50}
        onValueChange={(v) => {
          setValue(v[0]);
        }}
        onSlideEnd={() => {
          onChange(value);
        }}
      >
        <Slider.Track>
          <Slider.TrackActive backgroundColor="$primary60" />
        </Slider.Track>
        <Slider.Thumb
          circular
          id="{1}"
          index={0}
          backgroundColor="$primary10"
          size="$8"
          borderWidth="$0"
          alignItems="center"
          justifyContent="center"
        >
          <ChevronLeftIcon />
        </Slider.Thumb>
        <Slider.Thumb
          circular
          id="{2}"
          index={1}
          backgroundColor="$primary10"
          size="$8"
          borderWidth="$0"
          alignItems="center"
          justifyContent="center"
        >
          <ChevronRightIcon />
        </Slider.Thumb>
      </Slider>
      <XStack mt={35} justifyContent="space-between">
        <PriceBox value={50} label="Minimum" />
        <XStack
          borderWidth="$px"
          borderColor="$black"
          w="$6"
          h="$px"
          alignSelf="center"
        />
        <PriceBox value={value} label="Maximum" />
      </XStack>
    </YStack>
  );
});

interface PriceBoxProps {
  value: number;
  label: string;
}
const PriceBox = memo<PriceBoxProps>(({ value, label }) => {
  return (
    <YStack
      borderWidth="$px"
      borderColor="$grey30"
      borderRadius="$1.5"
      py="$2"
      px="$3"
      minWidth={106}
      alignItems="flex-start"
    >
      <Text size="tiny" color="$grey10">
        {label}
      </Text>
      <Text size="medium">US${value}</Text>
    </YStack>
  );
});
