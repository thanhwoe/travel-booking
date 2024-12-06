'use client';

import { memo } from 'react';
import { XStack, YStack } from 'tamagui';
import { Text } from '../Text';
import { Checkbox } from '../Checkbox';

const FILTERS = [
  {
    id: 1,
    label: 'Kitchen',
  },
  {
    id: 2,
    label: 'Pool',
  },
  {
    id: 3,
    label: 'Gym',
  },
  {
    id: 4,
    label: 'Outdoor space',
  },
  {
    id: 5,
    label: 'Internet access',
  },
];

interface IProps {
  values: number[];
  onChange: (values: number[]) => void;
}

export const FacilityFilter = memo<IProps>(({ values, onChange }) => {
  return (
    <YStack mt="$8">
      <Text fontWeight="bold" size="extraLarge">
        Facilities
      </Text>
      <YStack>
        {FILTERS.map((filter) => (
          <XStack
            key={filter.id}
            alignItems="center"
            justifyContent="space-between"
          >
            <YStack py="$2">
              <Text>{filter.label}</Text>
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
