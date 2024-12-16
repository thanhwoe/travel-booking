'use client';
import { IRoom, RoomType } from '@shared/interfaces';
import { AccordionFilter, CardItem, Pagination } from '@shared/ui/components';
import Link from 'next/link';
import { Suspense } from 'react';
import { Separator, XStack, YStack } from 'tamagui';

const mockData: IRoom[] = [
  {
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
    type: RoomType.APARTMENT,
  },
  {
    id: '2',
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
    type: RoomType.APARTMENT,
  },
  {
    id: '4',
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
    type: RoomType.APARTMENT,
  },
  {
    id: '15',
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
    type: RoomType.APARTMENT,
  },
  {
    id: '6',
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
    type: RoomType.APARTMENT,
  },
];

export default function Index() {
  return (
    <XStack jc="center" mt={60} gap={60}>
      <Suspense>
        <AccordionFilter />
      </Suspense>
      <YStack>
        {mockData.map((item, index) => (
          <YStack key={item.id}>
            <Link href={`/${item.id}`}>
              <CardItem data={item} />
            </Link>
            {mockData.length - 1 !== index && <Separator my="$6" />}
          </YStack>
        ))}
        <Suspense>
          <Pagination totalPages={10} mt="$12" mb="$24" />
        </Suspense>
      </YStack>
    </XStack>
  );
}
