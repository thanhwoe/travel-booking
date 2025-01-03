'use client';

import { Accordion, Square, XStack } from 'tamagui';
import { Checkbox, Text } from '../../universal';
import { ChevronDownIcon } from '../../../icons';
import { useQueryStates, parseAsString } from 'nuqs';

const FILTERS = [
  {
    label: 'Property type',
    key: 'type',
    items: [
      {
        label: 'Hotel',
        value: 'hotel',
      },
      {
        label: 'Guesthouse',
        value: 'guesthouse',
      },
      {
        label: 'House',
        value: 'house',
      },
      {
        label: 'Apartment',
        value: 'apartment',
      },
    ],
  },
  {
    label: 'Price',
    key: 'price',
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

const AccordionFilter = () => {
  const [queryParams, setQueryParams] = useQueryStates(
    {
      type: parseAsString.withDefault(''),
      price: parseAsString.withDefault(''),
    },
    {
      urlKeys: {
        type: 'type',
        price: 'price',
      },
      history: 'push',
      shallow: false,
    }
  );

  const handleChange = (checked: boolean, key: string, value: string) => {
    if (checked) {
      setQueryParams({ [key]: value });
    } else {
      setQueryParams({ [key]: null });
    }
  };

  return (
    <Accordion
      overflow="hidden"
      type="multiple"
      gap="$6"
      $gtLg={{ width: 256 }}
      value={['price', 'type']}
    >
      {FILTERS.map((item, index) => {
        return (
          <Accordion.Item value={item.key} key={item.label}>
            <Accordion.Trigger borderWidth={0} aria-controls={'tab-' + index}>
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
            <Accordion.HeightAnimator animation="medium" id={'tab-' + index}>
              <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
                {item.items.map((i) => (
                  <XStack key={i.label} py="$2" gap="$1">
                    <Checkbox
                      aria-label={i.label}
                      checked={
                        queryParams.type === i.value ||
                        queryParams.price === i.value
                      }
                      onCheckedChange={(checked: boolean) => {
                        handleChange(checked, item.key, i.value);
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
};

export default AccordionFilter;
