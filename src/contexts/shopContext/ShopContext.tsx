import React, { createContext, ReactElement, useEffect, useState } from 'react';
import { ProdutoType } from './../../typings/shopTypes';

export interface ShopContextType {
  produtos: ProdutoType[];
}

export const shopContext = createContext<ShopContextType>({
  produtos: [],
});

export default function ShopContextProvider({ children }: any): ReactElement {
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);

  useEffect(() => {
    // Carrinho
    setProdutos([
      {
        codigo: 1,
        descricao: 'teste',
        preco: 39.4,
        quantidade: 5,
        situacao: 'viva',
        urlImagem:
          'https://img.elo7.com.br/product/original/36F76BB/camiseta-masculina-basica-nelville-streetwear-algodao-100.jpg',
      },
      {
        codigo: 2,
        descricao: 'teste',
        preco: 39.4,
        quantidade: 5,
        situacao: 'viva',
        urlImagem:
          'https://img.elo7.com.br/product/original/36F76BB/camiseta-masculina-basica-nelville-streetwear-algodao-100.jpg',
      },
    ]);
  }, []);

  return (
    <shopContext.Provider value={{ produtos }}>{children}</shopContext.Provider>
  );
}
