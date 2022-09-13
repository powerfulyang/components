import type { FC, HTMLAttributes, Key, PropsWithChildren, RefObject } from 'react';
import { createContext } from 'react';
import type { MenuItem } from '@/components/Menu/MenuItem';
import type { MenuGroup } from '@/components/Menu/MenuGroup';
import type { VoidFunction } from '@powerfulyang/utils';

export type MenuProps = {
  activeKey?: Key;
  defaultActiveKey?: Key;
  onMenuChange?: (key: Key) => void;
  activeItemClassName?: string;
  itemClassName?: string;
} & HTMLAttributes<HTMLUListElement>;

export type MenuType = FC<PropsWithChildren<MenuProps>> & {
  Item: typeof MenuItem;
  Group: typeof MenuGroup;
};

export type Item = {
  menuKey: Key;
};

export type State = {
  focusItemIndex: number | null;
  activeKey?: Key;
  itemClassName: string;
  activeItemClassName: string;
  items: Item[];
};

export type ReducerAction =
  | {
      type: 'MoveFocus';
      to: 'None' | 'Previous' | 'Next' | 'First' | 'Last' | 'Specific';
      item?: Item;
    }
  | {
      type: 'RegisterItem' | 'UnRegisterItem';
      item: Item;
    }
  | {
      type: 'changeActiveKey';
      key: Key;
    };

export const MenuContext = createContext<{
  state: State;
  dispatch: VoidFunction<[ReducerAction]>;
  handleMenuChange?: RefObject<MenuProps['onMenuChange']>;
}>({
  state: {
    focusItemIndex: null,
    items: [],
    itemClassName: '',
    activeItemClassName: '',
  },
  dispatch: () => {},
});

export const reducer = (draft: State, action: ReducerAction) => {
  switch (action.type) {
    case 'MoveFocus': {
      if (action.to === 'Previous' && draft.focusItemIndex !== null) {
        draft.focusItemIndex = Math.max(0, draft.focusItemIndex - 1);
      } else if (action.to === 'Next' && draft.focusItemIndex !== null) {
        draft.focusItemIndex = Math.min(draft.items.length - 1, draft.focusItemIndex + 1);
      } else if (action.to === 'First') {
        draft.focusItemIndex = 0;
      } else if (action.to === 'Last') {
        draft.focusItemIndex = draft.items.length - 1;
      } else if (action.to === 'Specific') {
        draft.focusItemIndex = draft.items.findIndex(
          (item) => item.menuKey === action.item?.menuKey,
        );
      }
      break;
    }
    case 'RegisterItem': {
      draft.items.push(action.item);
      break;
    }
    case 'UnRegisterItem': {
      draft.items = draft.items.filter((item) => item.menuKey !== action.item.menuKey);
      break;
    }
    case 'changeActiveKey': {
      draft.activeKey = action.key;
      break;
    }
    default:
  }
};
