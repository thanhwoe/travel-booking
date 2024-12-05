import { View } from 'tamagui';
import { Button, Input, Text } from '@shared/ui/components';
import { SafeAreaView } from 'react-native';

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View gap="$4">
        <Text>Home</Text>
        <Input placeholder="searhc..." secureTextEntry />
        <Button>My button</Button>
      </View>
    </SafeAreaView>
  );
};
