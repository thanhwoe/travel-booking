import { memo, useCallback, useState } from 'react';
import { Accordion } from 'tamagui';

import { PickPlace } from './PickPlace';
import { PickDate } from './PickDate';
import { PickGuest } from './PickGuest';

interface IProps {
  onChange?: (key: string, value: any) => void;
}

export const AccordionSearch = memo<IProps>(({ onChange }) => {
  const [accordion, setAccordion] = useState<string[]>();

  return (
    <Accordion type="multiple" value={accordion}>
      <PickPlace
        setAccordion={setAccordion}
        onChange={onChange?.bind(null, 'location')}
      />
      <PickDate
        setAccordion={setAccordion}
        onChange={onChange?.bind(null, 'dates')}
      />
      <PickGuest
        setAccordion={setAccordion}
        onChange={onChange?.bind(null, 'guests')}
      />
    </Accordion>
  );
});
