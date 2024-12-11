'use client';
import { XStack, YStack } from 'tamagui';
import { Button, Text } from '../../universal';
import Link from 'next/link';
import { AppleIcon, FacebookIcon, GoogleIcon } from '../../../icons';

const FOOTER_ITEM = [
  {
    title: 'Support',
    items: [
      {
        name: 'Irure in molli',
        path: '#',
      },
      {
        name: 'Officia sit laborum',
        path: '#',
      },
      {
        name: 'Lorem ea quis labore',
        path: '#',
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        name: 'Irure in molli',
        path: '#',
      },
      {
        name: 'Officia sit laborum',
        path: '#',
      },
      {
        name: 'Lorem ea quis labore',
        path: '#',
      },
    ],
  },
  {
    title: 'About',
    items: [
      {
        name: 'Irure in molli',
        path: '#',
      },
      {
        name: 'Officia sit laborum',
        path: '#',
      },
      {
        name: 'Lorem ea quis labore',
        path: '#',
      },
    ],
  },
];

export const Footer = () => {
  return (
    <YStack px={132} backgroundColor="$grey60" mt="auto">
      <XStack gap={128} borderBottomWidth="$px" borderColor="$grey50" py="$10">
        {FOOTER_ITEM.map(({ title, items }) => (
          <YStack key={title} gap="$3">
            <Text fontWeight="bold" size="extraLarge">
              {title}
            </Text>
            {items.map(({ name, path }) => (
              <Link key={name} href={path}>
                <Text>{name}</Text>
              </Link>
            ))}
          </YStack>
        ))}
        <YStack>
          <Text fontWeight="bold" size="extraLarge">
            Subscribe to our newsletter
          </Text>
          <Text size="small" color="$grey10">
            For announcements and exclusive deals
          </Text>
          <XStack gap="$2" mt="$3">
            <XStack
              h={36}
              borderWidth="$px"
              borderRadius="$1"
              borderColor="$grey30"
              alignItems="center"
              flexGrow={1}
              px="$3"
              cursor="pointer"
            >
              <Text color="$grey30">Input your email</Text>
            </XStack>
            <Button w={100} h={36}>
              Subscribe
            </Button>
          </XStack>
        </YStack>
      </XStack>
      <XStack py="$5" justifyContent="space-between">
        <Text>© 2022 Company, Inc. • Privacy • Terms</Text>
        <XStack gap="$4">
          <FacebookIcon width="$5" height="$5" />
          <AppleIcon width="$5" height="$5" />
          <GoogleIcon width="$5" height="$5" />
        </XStack>
      </XStack>
    </YStack>
  );
};
