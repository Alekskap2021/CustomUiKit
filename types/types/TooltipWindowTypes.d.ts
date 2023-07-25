import { DropdownTypes } from './DropdownTypes';

export interface TooltipWindowProps extends Pick<DropdownTypes, 'tooltipClassName' | 'withArrow' | 'borderStyle' | 'children' | 'theme'> {
    className?: string;
}
