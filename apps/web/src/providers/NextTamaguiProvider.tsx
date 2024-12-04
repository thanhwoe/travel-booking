'use client';

import '@tamagui/core/reset.css';
import '@tamagui/polyfill-dev';

import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { useServerInsertedHTML } from 'next/navigation';
import { NextThemeProvider } from '@tamagui/next-theme';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from '@shared/ui/themes';

export const NextTamaguiProvider = ({ children }: { children: ReactNode }) => {
  useServerInsertedHTML(() => {
    // @ts-ignore
    const rnwStyle = StyleSheet.getSheet();
    return (
      <>
        <link
          rel="preload"
          as="font"
          type="font/ttf"
          href="/assets/fonts/OpenSans-Bold.ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/ttf"
          href="/assets/fonts/OpenSans-Light.ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/ttf"
          href="/assets/fonts/OpenSans-Regular.ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/ttf"
          href="/assets/fonts/Montserrat-Bold.ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/ttf"
          href="/assets/fonts/Montserrat-Light.ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/ttf"
          href="/assets/fonts/Montserrat-Regular.ttf"
          crossOrigin="anonymous"
        />

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
      </>
    );
  });

  return (
    <NextThemeProvider skipNextHead>
      <TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>
    </NextThemeProvider>
  );
};
