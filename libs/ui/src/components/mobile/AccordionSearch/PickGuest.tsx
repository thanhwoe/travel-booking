import { memo, useCallback, useEffect, useState } from 'react';
import { Accordion, XStack } from 'tamagui';
import { AccordionBar } from './AccordionBar';
import { AccordionContent } from './AccordionContent';
import { QuantityField, Text } from '../../universal';
import { AccordionBottom } from './AccordionBottom';

interface IGuest {
  adults: number;
  children: number;
}

interface IProps {
  setAccordion: (val: string[]) => void;
  onChange?: (guests: number) => void;
}

export const PickGuest = memo<IProps>(({ setAccordion, onChange }) => {
  const [guest, setGuest] = useState<IGuest>({
    adults: 0,
    children: 0,
  });

  useEffect(() => {
    onChange?.(guest.adults + guest.children);
  }, [guest.adults, guest.children]);

  const handleOpen = useCallback(() => {
    setAccordion(['guest']);
  }, []);

  const handleSkip = useCallback(() => {
    setAccordion([]);
  }, []);

  const handleNext = useCallback(() => {
    setAccordion([]);
  }, []);

  const handleChange = useCallback((key: string, value: number) => {
    setGuest((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }, []);

  const total = guest.adults + guest.children;

  return (
    <Accordion.Item value="guest">
      <AccordionBar
        label="Guests"
        value={total ? `${total} guests` : 'Add guests'}
        onOpen={handleOpen}
      />
      <AccordionContent>
        <Text size="huge" fontWeight="bold" mb="$3">
          How many guests?
        </Text>

        <XStack
          jc="space-between"
          py="$6.25"
          borderBottomWidth="$px"
          borderColor="$grey60"
        >
          <Text>Adults</Text>
          <QuantityField
            onChange={handleChange.bind(null, 'adults')}
            value={guest.adults}
          />
        </XStack>
        <XStack jc="space-between" py="$6.25">
          <Text>Children</Text>
          <QuantityField
            onChange={handleChange.bind(null, 'children')}
            value={guest.children}
          />
        </XStack>
        <AccordionBottom isLast onSkip={handleSkip} onNext={handleNext} />
      </AccordionContent>
    </Accordion.Item>
  );
});
