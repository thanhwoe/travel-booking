'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const AccordionFilter = dynamic(
  () => import('@shared/ui/components/web/AccordionFilter'),
  {
    ssr: false,
  }
);

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center mt-[60px] gap-[60px] md:w-[1200px] mx-auto">
      <Suspense>
        <div className="w-[152px] h-full">
          <AccordionFilter />
        </div>
      </Suspense>
      {children}
    </div>
  );
}
