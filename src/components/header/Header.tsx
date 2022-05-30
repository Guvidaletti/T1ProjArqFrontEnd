import React, { useContext, useMemo, useState } from 'react';
import Logo from '../../assets/icons/Logo';
import ShoppingCart from '../../assets/icons/ShoppingCart';
import { shopContext } from '../../contexts/shopContext/ShopContext';
import DropdowMenu from '../dropdownMenu/DropdownMenu';
import IconButton from '../iconButton/IconButton';
import ProdutoCarrinho from '../produtoCarrinho/ProdutoCarrinho';
import styles from './Header.scss';
import { useNavigate } from 'react-router-dom';
const { rootClassName } = styles;

export default function Header() {
  const [opened, setOpened] = useState<boolean>(false);
  const { carrinho, adicionarAoCarrinho, removerUnidadeProdutoDoCarrinho } =
    useContext(shopContext);

  const arrCarrinho = useMemo(() => {
    return Object.values(carrinho);
  }, [carrinho]);

  const subtotal = useMemo(() => {
    return arrCarrinho.reduce((acumulator, atual) => {
      return acumulator + atual.quantidade * atual.produto.preco;
    }, 0);
  }, [arrCarrinho]);

  const navigate = useNavigate();
  return (
    <header className={rootClassName}>
      <Logo height='40' />
      <DropdowMenu
        opened={opened}
        content={
          <div className={`${rootClassName}-panel`}>
            <div>
              {arrCarrinho.length ? (
                arrCarrinho.map((prod) => {
                  return (
                    <ProdutoCarrinho
                      key={prod.produto.codigo}
                      {...prod}
                      onAdd={() => {
                        adicionarAoCarrinho(prod.produto);
                      }}
                      onRemove={() => {
                        removerUnidadeProdutoDoCarrinho(prod.produto.codigo);
                      }}
                    />
                  );
                })
              ) : (
                <div className='vazio'>Carrinho vazio</div>
              )}
            </div>
            <div className={`${rootClassName}-action`}>
              {arrCarrinho.length ? (
                <div className={`${rootClassName}-subtotal`}>
                  <b>Subtotal: </b>
                  {subtotal.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </div>
              ) : undefined}
              <button
                disabled={arrCarrinho.length === 0}
                onClick={() => {
                  navigate('/checkout');
                }}
              >
                Checkout
              </button>
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
