import { memo } from 'react';
import { Accordion, XStack } from 'tamagui';
import { Text } from '../../universal';

interface AccordionBarProps {
  label: string;
  value: string;
  onOpen: () => void;
}

export const AccordionBar = memo<AccordionBarProps>(
  ({ label, value, onOpen }) => {
    return (
      <Accordion.Trigger borderWidth={0} onPress={onOpen}>
        {({ open }: { open: boolean }) => (
          <XStack
            justifyContent="space-between"
            px="$5"
            py="$3.25"
            borderWidth="$px"
            borderColor="$grey50"
            borderRadius="$2"
            animation="medium"
            {...(open && { h: 0, py: 0, borderWidth: 0 })}
          >
            <Text color="$grey10">{label}</Text>
            <Text fontWeight="bold">{value}</Text>
          </XStack>
        )}
      </Accordion.Trigger>
    );
  }
);
