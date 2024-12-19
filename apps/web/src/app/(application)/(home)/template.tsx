'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const AccordionFilter = dynamic(
  () => import('@shared/ui/components/web/AccordionFilter')
);

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
