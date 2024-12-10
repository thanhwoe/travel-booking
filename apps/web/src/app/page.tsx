'use client';

import { SignUpForm, Header, Footer } from '@shared/ui/components';
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

export default function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Header />
      <div
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <SignUpForm />
      </div>
      <Footer />
    </div>
  );
}
