import { View } from 'tamagui';
import {
  PhoneInputController,
  SignInForm,
  SignUpForm,
} from '@shared/ui/components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ISignUpForm } from '@shared/interfaces';

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
    <View px="$5">
      {/* <SignUpForm /> */}
      <SignInForm />
    </View>
  );
};
