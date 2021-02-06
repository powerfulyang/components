import React from 'react';

export type As = keyof JSX.IntrinsicElements | React.ComponentType<any>;

export type PropsWithAs<T extends As, P> = P &
  Omit<PropsOf<T>, 'as' | 'color' | keyof P> & {
    as?: T | As;
  };

export type PropsOf<T extends As> = React.PropsWithRef<React.ComponentProps<T>>;

export type Merge<T, P> = P extends object ? P & Omit<T, keyof P> : T;

export interface ComponentWithAs<T extends As, P> {
  <TT extends As = T>(
    props: Merge<PropsWithAs<T, P>, PropsWithAs<TT, P>>,
  ): React.ReactElement | null;
  (props: Merge<PropsOf<T>, P>): React.ReactElement | null;
  displayName?: string;
  propTypes?: React.WeakValidationMap<Merge<PropsOf<T>, P>>;
  contextTypes?: React.ValidationMap<any>;
  defaultProps?: Partial<Merge<PropsOf<T>, P>>;
  id?: string;
}

export function forwardRef<P, T extends As>(
  comp: (
    props: PropsWithAs<T, Omit<P, 'children' | 'as'>>,
    ref: React.RefObject<any>,
  ) => React.ReactElement | null,
) {
  return (React.forwardRef(comp as any) as unknown) as ComponentWithAs<
    T,
    Omit<P, 'children' | 'as'>
  >;
}
