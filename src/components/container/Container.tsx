import React, { HTMLAttributes } from 'react';
import { getMergedClassNames } from '../../utils/HTMLUtils';
import styles from './Container.scss';
const { rootClassName } = styles;

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Container(props: ContainerProps) {
  return (
    <div
      {...props}
      className={getMergedClassNames(rootClassName, props.className)}
    />
  );
}
