import React, { HTMLAttributes, ReactElement, ReactNode, useMemo } from 'react';
import { getMergedClassNames } from '../../utils/HTMLUtils';
import styles from './IconButton.scss';
const { rootClassName } = styles;

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element | ReactElement | ReactNode;
}

export default function IconButton(props: IconButtonProps) {
  const fprops = useMemo(() => {
    const p = { ...props } as any;
    delete p.icon;
    return p;
  }, [props]);
  return (
    <button
      {...fprops}
      className={getMergedClassNames(rootClassName, props.className)}
    >
      {props.icon}
    </button>
  );
}
