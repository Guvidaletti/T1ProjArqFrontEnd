import React, { useContext } from 'react';
import Produto from '../components/produto/Produto';
import { shopContext } from '../contexts/shopContext/ShopContext';
import styles from './Home.scss';
const { rootClassName } = styles;
export default function Home() {
  const { produtos } = useContext(shopContext);
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}-produtos`}>
        {produtos!?.map((produto) => {
          return <Produto {...produto} key={produto.codigo} />;
        })}
      </div>
    </div>
  );
}
