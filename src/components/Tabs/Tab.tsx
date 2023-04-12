import type { FC, PropsWithChildren } from 'react';
import { useContext } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { TabsContext } from '@/components/Tabs/context';

export interface TabProps {
  tabKey?: string;
}

export const Tab: FC<PropsWithChildren<TabProps>> = ({ children, tabKey }) => {
  const { uniqueId, onChange, activeTabKey } = useContext(TabsContext);
  return (
    <motion.div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        cursor: pointer;
        padding: 0 10px;
        position: relative;
      `}
      role="tab"
      onClick={() => {
        onChange?.(tabKey);
      }}
    >
      {children}
      {activeTabKey === tabKey && (
        <motion.div
          layoutId={`${uniqueId}-tab`}
          css={css`
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 100%;
            background-color: #fff;
          `}
        />
      )}
    </motion.div>
  );
};
