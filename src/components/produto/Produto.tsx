import React, { useState } from 'react';
import ShoppingCart from '../../assets/icons/ShoppingCart';
import { ProdutoType } from '../../typings/shopTypes';
import { getRealNumber } from '../../utils/MoedaUtils';
import styles from './Produto.scss';
const { rootClassName } = styles;

export interface ProdutoProps extends ProdutoType {
  handleAddToCart?: () => void;
  disabled?: boolean;
}

export default function Produto(props: ProdutoProps) {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className={rootClassName}>
      {loading ? (
        <div className={`${rootClassName}-loading`}>Carregando...</div>
      ) : undefined}
      <img
        draggable={false}
        src={props.urlImagem}
        alt={props.descricao}
        onLoad={() => setLoading(false)}
      />
      <div className={`${rootClassName}-nome`}>{props.descricao}</div>
      <div className={`${rootClassName}-preco`}>
        {getRealNumber(props.preco)}
      </div>
      <div className={`${rootClassName}-action`}>
        <button onClick={props.handleAddToCart} disabled={props.disabled}>
          <ShoppingCart />
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
