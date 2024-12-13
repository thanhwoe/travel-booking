import { memo } from 'react';
import { Accordion, XStack } from 'tamagui';
import { Button, Text } from '../../universal';

interface IProps {
  isLast?: boolean;
  onNext: () => void;
  onSkip: () => void;
}

export const AccordionBottom = memo<IProps>(({ isLast, onSkip, onNext }) => {
  return (
    <XStack
      jc="space-between"
      borderTopWidth="$px"
      pt="$4"
      borderColor="$grey60"
      mx={-20}
      px={20}
    >
      {!isLast && (
        <Accordion.Trigger borderWidth="$0" my="auto" onPress={onSkip}>
          <Text color="$grey10">Skip</Text>
        </Accordion.Trigger>
      )}
      <Button variant="secondary" w={130} onPress={onNext} ml="auto">
        {isLast ? 'Finish' : 'Next'}
      </Button>
    </XStack>
  );
});
