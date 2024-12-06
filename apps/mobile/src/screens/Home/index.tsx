import { View } from 'tamagui';
import { Button, Input, Text, FilterPopup } from '@shared/ui/components';
import { SafeAreaView } from 'react-native';
import { SearchIcon } from '@shared/ui/icons';
import { useState } from 'react';

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
    </SafeAreaView>
  );
};
