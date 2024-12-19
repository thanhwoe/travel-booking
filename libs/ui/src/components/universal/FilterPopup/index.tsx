'use client';
import { memo, useState } from 'react';
import { Sheet, XStack, YStack } from 'tamagui';
import { Text } from '../Text';
import { CloseIcon } from '../../../icons';
import { PriceSlider } from '../PriceSlider';
import { PlaceFilter } from './PlaceFilter';
import { FacilityFilter } from './FacilityFilter';
import { Button } from '../Button';

interface IProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApply: (data: {
    place: number[];
    facility: number[];
    price: number[];
  }) => void;
}

export const FilterPopup = memo<IProps>(({ open, onOpenChange, onApply }) => {
  const [placeFilters, setPlaceFilters] = useState<number[]>([]);
  const [facilityFilters, setFacilityFilters] = useState<number[]>([]);
  const [priceFilters, setPriceFilters] = useState<number[]>([50, 100]);

  const handleApply = () => {
    onOpenChange(false);
    onApply({
      place: placeFilters,
      facility: facilityFilters,
      price: priceFilters,
    });
  };

  return (
    <Sheet
      modal
      open={open}
      animationConfig={{
        type: 'spring',
        overshootClamping: true,
      }}
      snapPointsMode="constant"
      disableDrag
      snapPoints={[550]}
      position={0}
      zIndex={100_000}
      animation="medium"
      onOpenChange={onOpenChange}
    >
      <Sheet.Overlay
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
        backgroundColor="rgba(43, 63, 90,0.4)"
      />
      <Sheet.Frame borderTopLeftRadius="$5" borderTopRightRadius="$5">
        {/* Header */}

        <XStack
          justifyContent="space-between"
          ac="center"
          marginBottom="$6"
          borderBottomWidth="$px"
          px="$5"
          borderColor="$grey50"
          py={15}
        >
          <XStack width="$10" />
          <Text adjustsFontSizeToFit fontWeight={'bold'}>
            Filters
          </Text>
          <CloseIcon onPress={onOpenChange.bind(null, false)} />
        </XStack>
        {/* Body */}
        <Sheet.ScrollView bounces={false} scrollEventThrottle={400} px="$5">
          <YStack gap="$5">
            <Text fontWeight="bold" size="extraLarge">
              Price range
            </Text>
            <PriceSlider
              onChange={(v) => {
                setPriceFilters((prev) => {
                  const newArr = [...prev];

                  newArr[newArr.length - 1] = v;
                  return newArr;
                });
              }}
            />
          </YStack>

          <PlaceFilter values={placeFilters} onChange={setPlaceFilters} />
          <FacilityFilter
            values={facilityFilters}
            onChange={setFacilityFilters}
          />
        </Sheet.ScrollView>
        {/* Footer */}
        <XStack
          alignItems="center"
          justifyContent="space-between"
          px="$5"
          py="$4.5"
          borderTopWidth="$px"
          borderColor="$grey50"
        >
          <Text color="$grey10">Clear all</Text>
          <Button maxWidth={144} onPress={handleApply}>
            View Results
          </Button>
        </XStack>
      </Sheet.Frame>
    </Sheet>
  );
});
