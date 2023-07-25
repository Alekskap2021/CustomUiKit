import React, { FC, useState, useEffect, useRef } from 'react';

import cn from 'classnames';
import { createPortal } from 'react-dom';
import { Button } from '../Button/Button';
import { DropdownTypes } from './DropdownTypes';

import { calcPreferSide } from '../../helpers/CalcPreferSide';

import { TooltipWindow } from '../TooltipWindow/TooltipWindow';

export const Dropdown: FC<DropdownTypes> = (props) => {
    const {
        children,
        btnClassName,
        tooltipClassName: tipClass,
        label,
        theme = 'light',
        borderStyle,
        preferSide = 'auto',
        withArrow = true,
        ...otherProps
    } = props;

    const [isOpened, setIsOpened] = useState<boolean>(false);

    const btnRef = useRef<HTMLButtonElement>();
    const tooltipRef = useRef<HTMLDivElement>();

    // Effect for calc prefer side at every click if we have preferSideProp in "auto".
    // We have X/Y scroll at the document and other corner cases, so its necessary
    function onDocumentHandler(e: Event) {
        const isDropdownArea = e.target === tooltipRef.current || e.target === btnRef.current;

        if (!isDropdownArea) {
            setIsOpened(false);
        }
    }

    // Effect for calc prefer side at every click if we have preferSideProp in "auto".
    // We have X/Y scroll at the document and other corner cases, so its necessary
    useEffect(() => {
        if (isOpened) {
            calcPreferSide({
                btnRef,
                tooltipRef,
            });
        }

        document.addEventListener('click', onDocumentHandler);
        return () => document.removeEventListener('click', onDocumentHandler);
    }, [preferSide, isOpened]);

    return (
        <>
            <Button
                className={cn(btnClassName)}
                label={label}
                ref={btnRef}
                onClick={() => setIsOpened((prev) => !prev)}
                {...otherProps}
            />
            {createPortal(
                <TooltipWindow
                    className={cn({ 'tooltip-window_active': isOpened })}
                    ref={tooltipRef}
                    withArrow={withArrow}
                    borderStyle={borderStyle}
                    theme={theme}
                >
                    {children}
                </TooltipWindow>,
                document.body
            )}
        </>
    );
};
