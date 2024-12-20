'use client';

import { XStack } from 'tamagui';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Navigator } from './navigator';
import { BellIcon, ChatIcon, Logo, LogoutIcon } from '../../../icons';
import { Button, Image } from '../../universal';
import { useAuthStore } from '@shared/stores';

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

interface IProps {
  onSignOut?: () => void;
  isAuth?: boolean;
}

const Header = ({ onSignOut, isAuth }: IProps) => {
  const pathname = usePathname();
  const clearUser = useAuthStore.use.clearUser();

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

      {isAuth ? (
        <XStack alignItems="center" gap="$4">
          <ChatIcon />
          <BellIcon />
          <XStack width={36} height={36} borderRadius="$full" overflow="hidden">
            <Image
              src="/assets/images/avatar.jpeg"
              alt="avatar"
              priority
              width={100}
              height={100}
            />
          </XStack>
          <LogoutIcon
            cursor="pointer"
            onPress={() => {
              onSignOut?.();
              clearUser();
            }}
          />
        </XStack>
      ) : (
        <XStack gap="$4" alignItems="center">
          <Link href="/login">
            <Button variant="secondary" px="$4">
              Sign in
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button px="$4">Register</Button>
          </Link>
        </XStack>
      )}
    </XStack>
  );
};

export default Header;
