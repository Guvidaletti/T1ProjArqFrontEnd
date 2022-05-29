import React, { useContext, useState } from 'react';
import Logo from '../../assets/icons/Logo';
import ShoppingCart from '../../assets/icons/ShoppingCart';
import { shopContext } from '../../contexts/shopContext/ShopContext';
import DropdowMenu from '../dropdownMenu/DropdownMenu';
import IconButton from '../iconButton/IconButton';
import styles from './Header.scss';
const { rootClassName } = styles;

export default function Header() {
  const [opened, setOpened] = useState<boolean>(false);
  const { carrinho } = useContext(shopContext);
  console.log(carrinho);
  return (
    <header className={rootClassName}>
      <Logo height='40' />
      <DropdowMenu
        opened={opened}
        content={<div>teste de conteúdo aqui moço</div>}
      >
        <IconButton
          icon={<ShoppingCart />}
          onClick={() => {
            setOpened(!opened);
          }}
          number={Object.values(carrinho).length}
        />
      </DropdowMenu>
    </header>
  );
}
