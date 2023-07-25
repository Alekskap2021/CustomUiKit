import { HTMLAttributes, ReactNode } from 'react';

export interface TooltipTypes extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    tooltip: ReactNode;
    tooltipClassName?: string;
    theme?: 'dark' | 'light';
    borderStyle?: string;
    preferSide?: 'top' | 'right' | 'bottom' | 'left' | 'auto';
    withArrow?: boolean;
}
