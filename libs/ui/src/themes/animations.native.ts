/**
 * Copyright © 2022-present Agility IO, LLC. All rights reserved.
 *
 * The contents of this file are subject to the terms of the End User License Agreement (EULA) and Enterprise Services Agreement (ESA) agreed upon between You and Agility IO, LLC, collectively ("License").
 * You may not use this file except in compliance with the License. You can obtain a copy of the License by contacting Agility IO, LLC.
 * See the License for the specific language governing permissions and limitations under the License including but not limited to modification and distribution rights of the Software.
 */
import { createAnimations } from '@tamagui/animations-react-native';

export const animations = createAnimations({
  '75ms': {
    type: 'timing',
    duration: 75,
  },
  '100ms': {
    type: 'timing',
    duration: 100,
  },
  superBouncy: {
    damping: 5,
    mass: 0.7,
    stiffness: 200,
  },
  bouncy: {
    damping: 9,
    mass: 0.9,
    stiffness: 150,
  },
  fast: {
    type: 'timing',
    duration: 200,
  },
  medium: {
    damping: 15,
    stiffness: 120,
    mass: 1,
  },
  slow: {
    damping: 15,
    stiffness: 40,
  },
  quick: {
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  tooltip: {
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  quicker: {
    damping: 20,
    mass: 0.7,
    stiffness: 250,
  },
  quickest: {
    damping: 5,
    mass: 0.2,
    stiffness: 300,
  },
});
