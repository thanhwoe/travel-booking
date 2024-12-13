import { memo, useCallback, useEffect, useState } from 'react';
import { Accordion, XStack } from 'tamagui';
import { AccordionBar } from './AccordionBar';
import { AccordionContent } from './AccordionContent';
import { Text } from '../../universal';
import { Calendar, DateData } from 'react-native-calendars';
import { displayDate, generateDateRange } from '@shared/utils';
import { AccordionBottom } from './AccordionBottom';

type IMarkedDate = {
  [x: string]: {
    selected?: boolean;
    disableTouchEvent?: boolean;
    startingDay?: boolean;
    endingDay?: boolean;
    color?: string;
  };
};

interface IProps {
  setAccordion: (val: string[]) => void;
  onChange?: (dates: {
    startDate: string | null;
    endDate: string | null;
  }) => void;
}

export const PickDate = memo<IProps>(({ setAccordion, onChange }) => {
  const [markedDates, setMarkedDates] = useState<IMarkedDate>({});
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  useEffect(() => {
    onChange?.({
      startDate,
      endDate,
    });
  }, [startDate, endDate]);

  const onDayPress = useCallback(
    (day: DateData) => {
      const { dateString } = day;

      if (!startDate || (startDate && endDate) || startDate === 'all') {
        setStartDate(dateString);
        setEndDate(null);
        setMarkedDates({
          [dateString]: { startingDay: true, color: '#00B0FF' },
        });
      } else {
        if (dateString < startDate) {
          setStartDate(dateString);
          setEndDate(startDate);
        } else {
          setEndDate(dateString);
        }

        const range = generateDateRange(startDate, dateString);
        const updatedMarkedDates = range.reduce<IMarkedDate>((acc, date) => {
          if (date === startDate) {
            acc[date] = { startingDay: true, color: '#00B0FF' };
          } else if (date === dateString) {
            acc[date] = { endingDay: true, color: '#00B0FF' };
          } else {
            acc[date] = { color: '#80D8FF' };
          }
          return acc;
        }, {});

        setMarkedDates(updatedMarkedDates);
      }
    },
    [endDate, startDate]
  );

  const handleNext = useCallback(() => {
    setAccordion(['guest']);
  }, []);

  const handleOpen = useCallback(() => {
    setAccordion(['date']);
  }, []);

  const handleSkip = useCallback(() => {
    setStartDate('all');
    setEndDate(null);
    setMarkedDates({});
    setAccordion([]);
  }, []);

  return (
    <Accordion.Item value="date">
      <AccordionBar
        label="Dates"
        value={displayDate(startDate, endDate)}
        onOpen={handleOpen}
      />
      <AccordionContent>
        <Text size="huge" fontWeight="bold" mb="$3">
          When staying
        </Text>
        <XStack h="$9" borderRadius="$4.5" overflow="hidden" mb="$7.5">
          <XStack f={1} backgroundColor="$primary10" ai="center" jc="center">
            <Text color="$white">Choose dates</Text>
          </XStack>
          <Accordion.Trigger
            f={1}
            backgroundColor="#F3F4F6FF"
            ai="center"
            jc="center"
            onPress={handleSkip}
          >
            <Text>Anytime</Text>
          </Accordion.Trigger>
        </XStack>
        <Calendar
          minDate={new Date().toISOString().split('T')[0]}
          markingType="period"
          onDayPress={onDayPress}
          markedDates={markedDates}
        />
        <AccordionBottom onNext={handleNext} onSkip={handleSkip} />
      </AccordionContent>
    </Accordion.Item>
  );
});
