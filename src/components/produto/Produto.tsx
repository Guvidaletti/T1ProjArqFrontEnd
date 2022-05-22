import React from 'react';
import ShoppingCart from '../../assets/icons/ShoppingCart';
import { ProdutoType } from '../../typings/shopTypes';
import styles from './Produto.scss';
const { rootClassName } = styles;

export interface ProdutoProps extends ProdutoType {
  handleAddToCart?: () => void;
}

export default function Produto(props: ProdutoProps) {
  return (
    <div className={rootClassName}>
      <img src={props.urlImagem} alt={props.descricao} />
      <div className={`${rootClassName}-nome`}>{props.descricao}</div>
      <div className={`${rootClassName}-preco`}>
        {props.preco.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
      <div className={`${rootClassName}-action`}>
        <button onClick={props.handleAddToCart}>
          <ShoppingCart />
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
