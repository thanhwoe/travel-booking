'use client';

import { memo } from 'react';
import Svg, { SvgProps } from 'react-native-svg';
import { styled, StackProps, Stack } from 'tamagui';

export interface SvgFactoryProps extends StackProps {
  viewBox?: SvgProps['viewBox'];
  color?: SvgProps['color'];
  fill?: SvgProps['fill'];
}

const StyledSVG = styled(Svg, {}, { accept: { color: 'color' } as const });

const SvgFactory = ({
  width,
  height,
  children,
  color,
  viewBox,
  fill,
  ...rest
}: SvgFactoryProps) => (
  <Stack width={width} height={height} {...rest}>
    <StyledSVG
      width="100%"
      height="100%"
      viewBox={viewBox}
      color={color}
      fill={fill}
    >
      {children}
    </StyledSVG>
  </Stack>
);

export default memo(SvgFactory);
