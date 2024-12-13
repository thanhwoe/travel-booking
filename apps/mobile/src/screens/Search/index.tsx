import { Button, Text } from '@shared/ui/components';
import { AccordionSearch } from '@shared/ui/components/mobile/AccordionSearch';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView, useTheme, View, XStack } from 'tamagui';
import { useHeaderHeight } from '@react-navigation/elements';
import { SearchIcon } from '@shared/ui/icons';
import { FC, useCallback, useState } from 'react';
import { ISearchFilter } from '@shared/interfaces';
import { HomeStackScreenProps } from '../../interfaces';
import { SCREENS } from '@shared/constants';

type SearchScreenProps = HomeStackScreenProps<typeof SCREENS.SEARCH>;

export const SearchScreen: FC<SearchScreenProps> = ({
  navigation: { navigate },
}) => {
  const insets = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  const theme = useTheme();

  const [filters, setFilters] = useState<ISearchFilter>();

  const handleChange = useCallback((key: string, value: any) => {
    setFilters((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }, []);

  const handleSearch = useCallback(() => {
    navigate(SCREENS.ROOT_TAB, {
      screen: SCREENS.HOME,
      params: {
        filters,
      },
    });
  }, [filters]);

  return (
    <View pt={insets.top + headerHeight} backgroundColor="$white" f={1}>
      <ScrollView showsVerticalScrollIndicator={false} px="$5">
        <AccordionSearch onChange={handleChange} />
      </ScrollView>
      <XStack
        px="$5"
        pt={18}
        pb={30}
        jc="space-between"
        ai="center"
        borderTopWidth="$px"
        borderColor="$grey60"
      >
        <Text color="$grey10">Clear all</Text>
        <Button
          leftIcon={
            <SearchIcon fill={theme.primary10.val} color="$white" ac="center" />
          }
          w={120}
          onPress={handleSearch}
        >
          Search
        </Button>
      </XStack>
    </View>
  );
};
