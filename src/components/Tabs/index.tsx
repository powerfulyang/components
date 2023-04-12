import { css } from '@emotion/react';
import type { FC, PropsWithChildren } from 'react';
import { useId, useMemo } from 'react';
import { TabsContext } from '@/components/Tabs/context';

export * from './Tab';

export interface TabsProps {
  activeTabKey?: string;
  onChange?: (key?: string) => void;
}

export const Tabs: FC<PropsWithChildren<TabsProps>> = ({ children, activeTabKey, onChange }) => {
  const id = useId();
  const memo = useMemo(() => {
    return {
      uniqueId: id,
      activeTabKey,
      onChange,
    };
  }, [activeTabKey, id, onChange]);
  return (
    <TabsContext.Provider value={memo}>
      <div
        css={css`
          display: flex;
        `}
        role="tablist"
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};
