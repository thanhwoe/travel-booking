import { View } from 'tamagui';
import {
  Button,
  Input,
  Text,
  FilterPopup,
  CardItem,
} from '@shared/ui/components';
import { SafeAreaView } from 'react-native';
import { SearchIcon } from '@shared/ui/icons';
import { useState } from 'react';

const mockData = {
  id: '1',
  name: 'Superior Family Room',
  caption: 'Hotel room in Ueno',
  description: 'Superior Family Room',
  imageUrl: [],
  variants: ['6 guest', '4 beds', '1 baths'],
  amenities: ['Free WiFi', 'Air conditioning', 'Kitchen'],
  star: 4.85,
  price: 200,
  reviews: 20,
  favorite: false,
  type: 'hotel',
};

export const HomeScreen = () => {
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView>
      <View gap="$4">
        <Text>Home</Text>
        <Input
          placeholder="searhc..."
          leftIcon={<SearchIcon />}
          rightIcon={<SearchIcon />}
          secureTextEntry
          errorMessage="error"
        />
        <Button onPress={() => setOpen(true)}>My button</Button>
      </View>
      <FilterPopup open={open} onOpenChange={setOpen} />
      <View px="$5">
        <CardItem data={mockData} />
      </View>
    </SafeAreaView>
  );
};
