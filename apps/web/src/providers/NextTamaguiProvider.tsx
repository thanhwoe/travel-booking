'use client';

import '@tamagui/core/reset.css';
import '@tamagui/polyfill-dev';

import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { useServerInsertedHTML } from 'next/navigation';
import { NextThemeProvider } from '@tamagui/next-theme';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from '@shared/ui/themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
    },
  },
});

export const NextTamaguiProvider = ({ children }: { children: ReactNode }) => {
  useServerInsertedHTML(() => {
    // @ts-ignore
    const rnwStyle = StyleSheet.getSheet();
    return (
      <>
        <style
          dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
          id={rnwStyle.id}
        />

        <style
          dangerouslySetInnerHTML={{
            // the first time this runs you'll get the full CSS including all themes
            // after that, it will only return CSS generated since the last call
            __html: tamaguiConfig.getNewCSS(),
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: tamaguiConfig.getCSS({
              // if you are using "outputCSS" option, you should use this "exclude"
              // if not, then you can leave the option out
              exclude:
                process.env.NODE_ENV === 'production' ? 'design-system' : null,
            }),
          }}
        />
        <style jsx global>{`
          html {
            font-family: 'Montserrat', sans-serif;
          }
        `}</style>
      </>
    );
  });

  return (
    <QueryClientProvider client={queryClient}>
      <NextThemeProvider skipNextHead>
        <TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>
      </NextThemeProvider>
    </QueryClientProvider>
  );
};
