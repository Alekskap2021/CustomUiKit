import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { TooltipTypes } from '../../types/TooltipTypes';

declare const _default: ComponentMeta<React.FC<TooltipTypes>>;

export default _default;
export declare const Default: Story<TooltipTypes>;
export declare const TooltipLink: Story<Pick<TooltipTypes, 'children' | 'tooltip'>>;
