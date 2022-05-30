import React, { HTMLAttributes, ReactElement, ReactNode, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { getMergedClassNames } from '../../utils/HTMLUtils';
import styles from './IconButton.scss';
const { rootClassName } = styles;

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element | ReactElement | ReactNode;
  number?: number | null;
  ignoreSize?: boolean;
}

export default function IconButton(props: IconButtonProps) {
  const fprops = useMemo(() => {
    const p = { ...props } as any;
    delete p.icon;
    delete p.number;
    delete p.ignoreSize;
    return p;
  }, [props]);
  return (
    <button
      {...fprops}
      className={getMergedClassNames(
        rootClassName,
        props.className,
        props.ignoreSize ? 'ignore-size' : ''
      )}
    >
      <CSSTransition
        in={!!props.number}
        classNames='sizing'
        timeout={300}
        unmountOnExit
      >
        <div className={`${rootClassName}-number`}>{props.number}</div>
      </CSSTransition>
      {props.icon}
    </button>
  );
}
