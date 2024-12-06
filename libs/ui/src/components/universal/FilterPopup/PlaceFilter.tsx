'use client';

import { memo } from 'react';
import { XStack, YStack } from 'tamagui';
import { Text } from '../Text';
import { Checkbox } from '../Checkbox';

const FILTERS = [
  {
    id: 1,
    title: 'Entire place',
    description: 'Entire apartments, condos, houses',
  },
  {
    id: 2,
    title: 'Private room',
    description:
      'Typically come with a private bathroom unless otherwise stated',
  },
  {
    id: 3,
    title: 'Dormitories',
    description: 'Large rooms with multiple beds that are shared with others',
  },
];

interface IProps {
  values: number[];
  onChange: (values: number[]) => void;
}

export const PlaceFilter = memo<IProps>(({ values, onChange }) => {
  return (
    <YStack mt="$8">
      <Text fontWeight="bold" size="extraLarge">
        Type of place
      </Text>
      <YStack>
        {FILTERS.map((filter) => (
          <XStack
            key={filter.id}
            alignItems="center"
            justifyContent="space-between"
          >
            <YStack py="$2">
              <Text>{filter.title}</Text>
              <Text size="tiny" color="$grey10">
                {filter.description}
              </Text>
            </YStack>
            <Checkbox
              checked={values.includes(filter.id)}
              onCheckedChange={(checked) => {
                const selected = new Set(values);
                if (checked) {
                  selected.add(filter.id);
                } else {
                  selected.delete(filter.id);
                }
                onChange([...selected]);
              }}
            />
          </XStack>
        ))}
      </YStack>
    </YStack>
  );
});
