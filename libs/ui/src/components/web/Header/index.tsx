'use client';

import { XStack } from 'tamagui';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Navigator } from './navigator';
import { BellIcon, ChatIcon, Logo } from '../../../icons';
import { Image } from '../../universal';

const NAVIGATORS = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Destinations',
    path: '/destinations',
  },
  {
    name: 'Bookings',
    path: '/bookings',
  },
];

export const Header = () => {
  const pathname = usePathname();
  return (
    <XStack px="$6" py="$0.5" jc="space-between" alignItems="center">
      <XStack gap="$6" alignItems="center">
        <Logo width="$10" height="$10" />
        {NAVIGATORS.map(({ name, path }) => (
          <Navigator key={name} {...(pathname === path && { active: true })}>
            <Link href={path}>
              <Navigator.Text>{name}</Navigator.Text>
            </Link>
          </Navigator>
        ))}
      </XStack>
      <XStack alignItems="center" gap="$4">
        <ChatIcon />
        <BellIcon />
        <XStack width={36} height={36} borderRadius="$full" overflow="hidden">
          <Image
            src="/assets/images/avatar.jpeg"
            alt="avatar"
            width={100}
            height={100}
          />
        </XStack>
      </XStack>
    </XStack>
  );
};
