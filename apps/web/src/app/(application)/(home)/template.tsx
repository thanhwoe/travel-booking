'use client';

import { AccordionFilter } from '@shared/ui/components/web';
import { Suspense } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center mt-[60px] gap-[60px]">
      <Suspense>
        <AccordionFilter />
      </Suspense>
      {children}
    </div>
  );
}
