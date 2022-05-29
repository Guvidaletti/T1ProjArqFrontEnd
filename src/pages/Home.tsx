import React, { useContext } from 'react';
import Container from '../components/container/Container';
import Produto from '../components/produto/Produto';
import { shopContext } from '../contexts/shopContext/ShopContext';
import styles from './Home.scss';
const { rootClassName } = styles;
export default function Home() {
  const { produtos, loading, adicionarAoCarrinho } = useContext(shopContext);
  return (
    <Container>
      <div className={rootClassName}>
        <div>{loading ? 'loading...' : undefined}</div>
        {!loading && produtos.length ? (
          <div className={`${rootClassName}-produtos`}>
            {produtos!?.map((produto) => {
              return (
                <Produto
                  {...produto}
                  key={produto.codigo}
                  handleAddToCart={() => {
                    adicionarAoCarrinho(produto);
                  }}
                />
              );
            })}
          </div>
        ) : undefined}
        {!loading && !produtos.length ? (
          <div>Nenhum produto encontrado</div>
        ) : undefined}
      </div>
    </Container>
  );
}
