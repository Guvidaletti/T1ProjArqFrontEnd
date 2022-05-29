import { prependOnceListener } from 'process';
import React, { useContext, useState } from 'react';
import Logo from '../../assets/icons/Logo';
import ShoppingCart from '../../assets/icons/ShoppingCart';
import { shopContext } from '../../contexts/shopContext/ShopContext';
import DropdowMenu from '../dropdownMenu/DropdownMenu';
import IconButton from '../iconButton/IconButton';
import ProdutoCarrinho from '../produtoCarrinho/ProdutoCarrinho';
import styles from './Header.scss';
const { rootClassName } = styles;

export default function Header() {
  const [opened, setOpened] = useState<boolean>(false);
  const { carrinho } = useContext(shopContext);
  return (
    <header className={rootClassName}>
      <Logo height='40' />
      <DropdowMenu
        opened={opened}
        content={
          <div className={`${rootClassName}-panel`}>
            <div>
              {Object.values(carrinho).map((prod) => {
                return <ProdutoCarrinho key={prod.produto.codigo} {...prod} />;
              })}
            </div>
            <div className={`${rootClassName}-action`}>
              <button>Checkout</button>
            </div>
          </div>
        }
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
