/// <reference types="react" />
import { ComponentMeta, Story } from '@storybook/react';
import { ButtonTypes } from '../../types/ButtonTypes';

declare const _default: ComponentMeta<import("react").ForwardRefExoticComponent<ButtonTypes & import("react").RefAttributes<HTMLButtonElement>>>;
export default _default;
export declare const ButtonPrimary: Story<Pick<ButtonTypes, 'view'>>;
export declare const ButtonSuccess: Story<Pick<ButtonTypes, 'view'>>;
export declare const ButtonDanger: Story<Pick<ButtonTypes, 'view'>>;
export declare const ButtonClear: Story<Pick<ButtonTypes, 'view'>>;
export declare const ButtonLoading: Story<Pick<ButtonTypes, 'loading'>>;
export declare const ButtonDisabled: Story<Pick<ButtonTypes, 'disabled'>>;
export declare const ButtonBrick: Story<Pick<ButtonTypes, 'border'>>;
export declare const ButtonRound: Story<Pick<ButtonTypes, 'border'>>;
export declare const ButtonClipped: Story<Pick<ButtonTypes, 'clip'>>;
export declare const ButtonFullSize: Story<Pick<ButtonTypes, 'fullSize'>>;
export declare const ButtonXS: Story<Pick<ButtonTypes, 'size'>>;
export declare const ButtonS: Story<Pick<ButtonTypes, 'size'>>;
export declare const ButtonM: Story<Pick<ButtonTypes, 'size'>>;
export declare const ButtonL: Story<Pick<ButtonTypes, 'size'>>;
