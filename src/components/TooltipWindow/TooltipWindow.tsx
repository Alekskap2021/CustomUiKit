import { forwardRef } from 'react';
import classnames from 'classnames/bind';
import { TooltipWindowProps } from './TooltipWindowTypes';
// import './TooltipWindow.scss';
import s from './TooltipWindow.module.scss';

const cn = classnames.bind(s);

export const TooltipWindow = forwardRef<HTMLDivElement, TooltipWindowProps>((props, ref) => {
    const {
        className,
        tooltipClassName: tipClass,
        withArrow = true,
        theme = 'light',
        borderStyle: border,
        children,
    } = props;

    const [borderColor] = border.split(' ');

    return (
        <div
            className={cn('tooltip-window', className, tipClass, {
                'tooltip-window_dark': theme === 'dark',
            })}
            style={{ border }}
            ref={ref}
        >
            {children}

            <svg
                className={cn('tooltip-window__arrow', {
                    'tooltip-window__arrow_visible': withArrow,
                    'tooltip-window__arrow_dark': theme === 'dark',
                })}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="10"
                viewBox="0 0 20 10"
            >
                <polygon points="0,10 10,0 20,10" fill="white" stroke={borderColor || ''} />
            </svg>
        </div>
    );
});
