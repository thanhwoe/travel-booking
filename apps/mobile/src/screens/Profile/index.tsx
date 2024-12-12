import { Button } from '@shared/ui/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'tamagui';
import { signOutAction } from '../../services/auth';

export const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Button onPress={signOutAction}>Logout</Button>
    </SafeAreaView>
  );
};
