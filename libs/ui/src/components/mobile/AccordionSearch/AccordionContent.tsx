import { memo, PropsWithChildren } from 'react';
import { Accordion } from 'tamagui';

export const AccordionContent = memo<PropsWithChildren>(({ children }) => {
  return (
    <Accordion.HeightAnimator animation="medium">
      <Accordion.Content
        animation="medium"
        exitStyle={{ opacity: 0 }}
        borderWidth="$px"
        borderRadius="$2"
        borderColor="$grey50"
        p="$5"
      >
        {children}
      </Accordion.Content>
    </Accordion.HeightAnimator>
  );
});
