import React from 'react';
import { ProdutoCarrinhoType } from '../../typings/shopTypes';
import styles from './ProdutoCarrinho.scss';
const { rootClassName } = styles;
interface ProdutoCarrinhoProps extends ProdutoCarrinhoType {
  onAdd: () => void;
  onRemove: () => void;
}

export default function ProdutoCarrinho(props: ProdutoCarrinhoProps) {
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}-nome`}>{props.produto.descricao}</div>
      <div className={`${rootClassName}-action`}>
        <button
          disabled={props.quantidade >= props.produto.quantidade}
          onClick={props.onAdd}
        >
          +
        </button>
        <span>{props.quantidade}</span>
        <button
          className={props.quantidade === 1 ? 'alert' : ''}
          onClick={props.onRemove}
          disabled={props.quantidade === 0}
        >
          -
        </button>
      </div>
    </div>
  );
}
