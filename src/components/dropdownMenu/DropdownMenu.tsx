import React, { ReactElement } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './DropdownMenu.scss';
const { rootClassName } = styles;

interface DropdownMenuProps {
  content?: JSX.Element | ReactElement;
  children?: JSX.Element | ReactElement;
  opened: boolean;
}

export default function DropdowMenu(props: DropdownMenuProps) {
  return (
    <div className={rootClassName}>
      <CSSTransition
        in={props.opened}
        timeout={300}
        unmountOnExit
        mountOnEnter
        classNames='appear'
      >
        <div className={`${rootClassName}-panel`}>{props.content}</div>
      </CSSTransition>
      {props.children}
    </div>
  );
}
