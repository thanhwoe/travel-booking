/**
 * Copyright © 2022-present Agility IO, LLC. All rights reserved.
 *
 * The contents of this file are subject to the terms of the End User License Agreement (EULA) and Enterprise Services Agreement (ESA) agreed upon between You and Agility IO, LLC, collectively ("License").
 * You may not use this file except in compliance with the License. You can obtain a copy of the License by contacting Agility IO, LLC.
 * See the License for the specific language governing permissions and limitations under the License including but not limited to modification and distribution rights of the Software.
 */
import { createAnimations } from '@tamagui/animations-css';

const smoothBezier = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)';

export const animations = createAnimations({
  '75ms': 'ease-in 75ms',
  '100ms': 'ease-in 100ms',
  bouncy: 'ease-in 200ms',
  superBouncy: 'ease-in 500ms',
  lazy: 'ease-in 1000ms',
  fast: 'ease-in 200ms',
  medium: 'ease-in 300ms',
  slow: 'ease-in 500ms',
  quick: `${smoothBezier} 400ms`,
  quicker: `${smoothBezier} 300ms`,
  quickest: `${smoothBezier} 200ms`,
  tooltip: 'ease-in 400ms',
});
