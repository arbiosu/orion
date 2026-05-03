import { Hammer, Wrench, Zap, Paintbrush, Shovel, HardHat } from 'lucide-react';

export const iconMap = {
  Hammer,
  Wrench,
  Zap,
  Paintbrush,
  Shovel,
  HardHat,
} as const;

export type IconName = keyof typeof iconMap;
