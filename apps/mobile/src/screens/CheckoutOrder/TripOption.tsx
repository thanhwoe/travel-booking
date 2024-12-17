import { Heading, QuantityField, Text } from '@shared/ui/components';
import { EditIcon } from '@shared/ui/icons';
import { memo, useCallback, useEffect, useState } from 'react';
import { Accordion, Separator, XStack, YStack } from 'tamagui';
import { Calendar, DateData } from 'react-native-calendars';
import { displayDate, generateDateRange } from '@shared/utils';

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
  onChangeDate?: (dates: {
    startDate: string | null;
    endDate: string | null;
  }) => void;
}

export const TripOption = memo<IProps>(({ onChangeDate }) => {
  const [markedDates, setMarkedDates] = useState<IMarkedDate>({});
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [guest, setGuest] = useState(0);

  useEffect(() => {
    onChangeDate?.({
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

  return (
    <YStack mt="$8">
      <Heading size="large">Your trip</Heading>
      <Accordion type="multiple">
        <Accordion.Item value="date">
          <XStack jc="space-between" ai="center" mt="$2">
            <YStack>
              <Text fontWeight="bold">Dates</Text>
              <Text>{displayDate(startDate, endDate)}</Text>
            </YStack>

            <Accordion.Trigger borderWidth={0}>
              <EditIcon />
            </Accordion.Trigger>
          </XStack>
          <Accordion.HeightAnimator animation="medium">
            <Accordion.Content
              animation="medium"
              exitStyle={{ opacity: 0 }}
              my="$3"
              borderWidth="$px"
              borderRadius="$2"
              borderColor="$grey50"
              p="$5"
            >
              <Calendar
                minDate={new Date().toISOString().split('T')[0]}
                markingType="period"
                onDayPress={onDayPress}
                markedDates={markedDates}
              />
            </Accordion.Content>
          </Accordion.HeightAnimator>
        </Accordion.Item>
        <Accordion.Item value="guest">
          <XStack jc="space-between" ai="center" mt="$3">
            <YStack>
              <Text fontWeight="bold">Guest</Text>
              <Text>{guest}</Text>
            </YStack>
            <Accordion.Trigger borderWidth={0}>
              <EditIcon />
            </Accordion.Trigger>
          </XStack>

          <Accordion.HeightAnimator animation="medium">
            <Accordion.Content
              animation="medium"
              exitStyle={{ opacity: 0 }}
              my="$3"
              borderWidth="$px"
              borderRadius="$2"
              borderColor="$grey50"
              p="$5"
            >
              <QuantityField onChange={setGuest} value={guest} />
            </Accordion.Content>
          </Accordion.HeightAnimator>
        </Accordion.Item>
      </Accordion>
      <Separator my="$6" />
    </YStack>
  );
});
