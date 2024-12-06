'use client';

import { memo, useState } from 'react';
import { Accordion, Square, XStack } from 'tamagui';
import { Checkbox, Text } from '../../universal';
import { ChevronDownIcon } from '../../../icons';

const FILTERS = [
  {
    label: 'Property type',
    items: [
      {
        label: 'Hotel',
        value: 'Hotel',
      },
      {
        label: 'Guesthouse',
        value: 'Guesthouse',
      },
      {
        label: 'House',
        value: 'House',
      },
      {
        label: 'Apartment',
        value: 'Apartment',
      },
    ],
  },
  {
    label: 'Price',
    items: [
      {
        label: 'Below $50',
        value: '<50',
      },
      {
        label: 'From $50 to $99',
        value: '50-99',
      },
      {
        label: 'From $100 to $200',
        value: '100-200',
      },
      {
        label: 'Above $200',
        value: '>200',
      },
    ],
  },
];

interface IFilterGroup {
  key: string;
  value: string[];
}

export const AccordionFilter = memo(() => {
  const [filters, setFilters] = useState<IFilterGroup[]>([]);

  return (
    <Accordion overflow="hidden" type="multiple" gap="$6">
      {FILTERS.map((item) => {
        const itemFilters = filters.find((f) => f.key === item.label);

        return (
          <Accordion.Item value={item.label} key={item.label}>
            <Accordion.Trigger borderWidth={0}>
              {({ open }: { open: boolean }) => (
                <XStack
                  {...(open && { backgroundColor: '$grey60' })}
                  justifyContent="space-between"
                  px="$1.5"
                  py="$3"
                >
                  <Text fontWeight="bold" size="extraMedium">
                    {item.label}
                  </Text>
                  <Square animation="quick" rotate={open ? '0deg' : '-90deg'}>
                    <ChevronDownIcon />
                  </Square>
                </XStack>
              )}
            </Accordion.Trigger>
            <Accordion.HeightAnimator animation="medium">
              <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
                {item.items.map((i) => (
                  <XStack key={i.label} py="$2" gap="$1">
                    <Checkbox
                      checked={itemFilters?.value.includes(i.value)}
                      onCheckedChange={(checked) => {
                        if (itemFilters) {
                          const selected = new Set(itemFilters.value);

                          if (checked) {
                            selected.add(i.value);
                          } else {
                            selected.delete(i.value);
                          }

                          const f = {
                            key: item.label,
                            value: [...selected],
                          };

                          setFilters((prev) =>
                            prev.map((p) => {
                              if (p.key === f.key) {
                                return f;
                              }
                              return p;
                            })
                          );
                        } else {
                          if (checked) {
                            const f = {
                              key: item.label,
                              value: [i.value],
                            };
                            setFilters((prev) => [...prev, f]);
                          }
                        }
                      }}
                    />
                    <Text>{i.label}</Text>
                  </XStack>
                ))}
              </Accordion.Content>
            </Accordion.HeightAnimator>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
});
