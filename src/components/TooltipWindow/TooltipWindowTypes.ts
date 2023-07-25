import { DropdownTypes } from '../Dropdown/DropdownTypes';

export interface TooltipWindowProps
    extends Pick<
        DropdownTypes,
        'tooltipClassName' | 'withArrow' | 'borderStyle' | 'children' | 'theme'
    > {
    className?: string;
}
