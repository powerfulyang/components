import type { FC, PropsWithChildren, ReactNode } from 'react';
import React, { useId, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useOutsideClick } from '@powerfulyang/hooks';
import './index.scss';
import { DropdownContext } from '@/components/Dropdown/Context';
import { isDefined } from '@powerfulyang/utils';

export type DropdownProps = {
  overlay: ReactNode;
  className?: string;
};

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({
  children,
  className,
  overlay,
}) => {
  const id = useId();
  const ref = useRef(null);
  const [popup, setPopup] = useState(false);
  useOutsideClick(ref, () => setPopup(false));

  const memo = useMemo(() => {
    return {
      open: popup,
      toggle: (d: boolean) => {
        if (isDefined(d)) {
          setPopup(d);
        } else {
          setPopup((p) => !p);
        }
      },
    };
  }, [popup]);

  return (
    <DropdownContext.Provider value={memo}>
      <div ref={ref} className={classNames('relative')}>
        <span id={id} onClick={() => setPopup(!popup)} role="presentation">
          {children}
        </span>
        <div
          className={classNames(
            'common-shadow absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white',
            className,
            'py-dropdown-animate',
            {
              'py-dropdown-enter': popup,
              'py-dropdown-leave': !popup,
            },
          )}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={id}
        >
          {overlay}
        </div>
      </div>
    </DropdownContext.Provider>
  );
};
