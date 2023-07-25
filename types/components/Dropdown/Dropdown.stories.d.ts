import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { DropdownTypes } from '../../types/DropdownTypes';

declare const _default: ComponentMeta<React.FC<DropdownTypes>>;
export default _default;
export declare const Dropdown: Story<DropdownTypes>;
export declare const DropdownLight: Story<Pick<DropdownTypes, 'theme'>>;
export declare const DropdownDark: Story<Pick<DropdownTypes, 'theme'>>;
export declare const DropdownLeft: Story<Pick<DropdownTypes, 'preferSide'>>;
export declare const DropdownRight: Story<Pick<DropdownTypes, 'preferSide'>>;
export declare const DropdownBottom: Story<Pick<DropdownTypes, 'preferSide'>>;
export declare const DropdownTop: Story<Pick<DropdownTypes, 'preferSide'>>;
export declare const DropdownWithList: Story<Pick<DropdownTypes, 'children' | 'preferSide'>>;
export declare const DropdownImage: Story<Pick<DropdownTypes, 'children' | 'preferSide'>>;
export declare const DropdownWithoutArrow: Story<Pick<DropdownTypes, 'withArrow'>>;
