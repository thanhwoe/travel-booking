import { memo, useCallback, useMemo, useState } from 'react';
import { AccordionContent } from './AccordionContent';
import { Image, Text } from '../../universal';
import { SearchInput } from '../SearchInput';
import { Accordion, Stack, YStack } from 'tamagui';
import { AccordionBar } from './AccordionBar';
import { FlatList, ListRenderItem } from 'react-native';
import { AccordionBottom } from './AccordionBottom';

const PLACES = [
  {
    id: 'anywhere',
    label: 'Anywhere',
    imageUrl: 'https://ng.jumia.is/cms/0-5-brand-festival/2023/BF-Slider.jpg',
  },
  {
    id: 'europe',
    label: 'Europe',
    imageUrl: 'https://ng.jumia.is/cms/0-5-brand-festival/2023/BF-Slider.jpg',
  },
  {
    id: 'asia',
    label: 'Asia',
    imageUrl: 'https://ng.jumia.is/cms/0-5-brand-festival/2023/BF-Slider.jpg',
  },
];

interface IProps {
  setAccordion: (val: string[]) => void;
  onChange?: (val: string) => void;
}
export const PickPlace = memo<IProps>(({ setAccordion, onChange }) => {
  const [searchKey, setSearchKey] = useState<string>('');
  const [selected, setSelected] = useState<string>();

  const placesFiltered = useMemo(
    () => PLACES.filter((place) => place.label.includes(searchKey)),
    [searchKey]
  );

  const handleSelect = useCallback((value: string) => {
    setSelected(value);
    onChange?.(value);
  }, []);

  const renderItem: ListRenderItem<{
    id: string;
    label: string;
    imageUrl: string;
  }> = useCallback(
    ({ item }) => {
      const isSelected = item.label === selected;

      return (
        <YStack onPress={() => handleSelect(item.label)}>
          <Stack
            mr="$4"
            borderRadius="$2"
            overflow="hidden"
            borderColor="$primary10"
            borderWidth={isSelected ? 2 : 0}
          >
            <Image
              src={item.imageUrl}
              alt={item.label}
              width={120}
              height={120}
            />
          </Stack>
          <Text size="small" {...(isSelected && { fontWeight: 'bold' })}>
            {item.label}
          </Text>
        </YStack>
      );
    },
    [handleSelect, selected]
  );

  const handleNext = useCallback(() => {
    setAccordion(['date']);
  }, []);

  const handleOpen = useCallback(() => {
    setAccordion(['place']);
  }, []);

  const handleSkip = useCallback(() => {
    setAccordion([]);
    setSelected(PLACES[0].label);
    onChange?.(PLACES[0].label);
  }, []);

  return (
    <Accordion.Item value="place">
      <AccordionBar
        label="Location"
        value={selected ?? 'Add location'}
        onOpen={handleOpen}
      />
      <AccordionContent>
        <Text size="huge" fontWeight="bold" mb="$3">
          Where to ?
        </Text>
        <SearchInput onChangeText={setSearchKey} />

        <FlatList
          data={placesFiltered}
          horizontal
          style={{ marginVertical: 20 }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={({ id }) => id}
          renderItem={renderItem}
        />
        <AccordionBottom onNext={handleNext} onSkip={handleSkip} />
      </AccordionContent>
    </Accordion.Item>
  );
});
