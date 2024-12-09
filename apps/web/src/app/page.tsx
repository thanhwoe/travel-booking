'use client';

import { SearchIcon } from '@shared/ui/icons';
import {
  Button,
  Input,
  FilterPopup,
  AccordionFilter,
  ImageSlider,
  CardItem,
} from '@shared/ui/components';
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
      <Input
        placeholder="searhc..."
        h={52}
        leftIcon={<SearchIcon />}
        errorMessage="sss"
      />
      <Button onPress={() => setOpen(true)}>my button</Button>
      <FilterPopup open={open} onOpenChange={setOpen} />
      <div style={{ height: 100 }} />
      <AccordionFilter />

      <CardItem data={mockData} />
    </div>
  );
}
