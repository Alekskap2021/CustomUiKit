import { ButtonHTMLAttributes } from 'react';

export interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    className?: string;
    border?: 'brick' | 'round';
    view?: 'primary' | 'success' | 'danger' | 'clear';
    size?: 'l' | 'm' | 's' | 'xs';
    clip?: boolean;
    fullSize?: boolean;
    loading?: boolean;
    disabled?: boolean;
}
