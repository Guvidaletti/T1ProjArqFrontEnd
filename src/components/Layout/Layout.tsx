import React from 'react';
import Home from '../../pages/Home';
import Header from '../header/Header';
import styles from './Layout.scss';
const { rootClassName } = styles;

export default function Layout() {
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}-row-header`}>
        <Header />
      </div>
      <div className={`${rootClassName}-row-content`}>
        <Home />
      </div>
    </div>
  );
}
