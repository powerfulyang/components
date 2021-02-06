import React, {
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import classNames from 'classnames';
import { useImmer } from '@powerfulyang/hooks';
import './index.scss';
import { getElementCenterPoint, ReturnTypedFunction } from '@powerfulyang/utils';
import { PortalWrap } from '@/wrapper/PortalWrap';

type Props = {
  title?: ReactNode | ReturnTypedFunction<ReactNode>;
};

export const Tooltip: FC<Props> = ({ children, title }) => {
  const [visible, setVisible] = useImmer(false);
  const [tipPosition, setTipPosition] = useImmer({ left: 0, top: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);
  const hoverWrap = useCallback(() => {
    setVisible(true);
    const { x, top } = getElementCenterPoint(wrapRef.current!);
    setTipPosition((draft) => {
      draft.left = x;
      draft.top = top;
    });
    // 中心点位置
  }, [setTipPosition, setVisible]);

  const leaveWrap = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const child = useMemo(() => {
    return React.Children.only(children) as ReactElement;
  }, [children]);

  return (
    <>
      {cloneElement(child, {
        ref: wrapRef,
        onMouseOver: hoverWrap,
        onMouseOut: leaveWrap,
        className: classNames('pointer', child.props.className),
      })}
      {visible && (
        <PortalWrap>
          <div
            className={classNames('wrap', {
              in: visible,
              fade: !visible,
            })}
            style={tipPosition}
          >
            <div className="tooltip">
              <div className="arrow">
                <span className="content" />
              </div>
              {title && <div className="title">{title}</div>}
            </div>
          </div>
        </PortalWrap>
      )}
    </>
  );
};
