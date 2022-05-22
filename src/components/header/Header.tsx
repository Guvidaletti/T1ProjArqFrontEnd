import React from 'react';
import Logo from '../../assets/icons/Logo';
import ShoppingCart from '../../assets/icons/ShoppingCart';
import IconButton from '../iconButton/IconButton';
import styles from './Header.scss';
const { rootClassName } = styles;

export default function Header() {
  return (
    <header className={rootClassName}>
      <Logo height='40' />
      <IconButton icon={<ShoppingCart />} />
    </header>
  );
}
