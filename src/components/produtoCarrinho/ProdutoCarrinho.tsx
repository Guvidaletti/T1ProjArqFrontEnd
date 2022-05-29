import React from 'react';
import { ProdutoCarrinhoType } from '../../typings/shopTypes';
import styles from './ProdutoCarrinho.scss';
const { rootClassName } = styles;

export default function ProdutoCarrinho(props: ProdutoCarrinhoType) {
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}-nome`}>{props.produto.descricao}</div>
      <div className={`${rootClassName}-action`}>
        <button>+</button>
        <span>{props.quantidade}</span>
        <button>-</button>
      </div>
    </div>
  );
}
