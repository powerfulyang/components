import { createContext } from 'react';

type DropdownContextValue = {
  open: boolean;
  toggle: (d?: boolean) => void;
};

export const DropdownContext = createContext<DropdownContextValue>({
  open: false,
  toggle: () => {},
});
