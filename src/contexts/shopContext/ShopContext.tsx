import React, {
  createContext,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import api, { toRequest } from '../../services/api';
import { getEnvironment } from '../../services/environment';
import { ProdutoCarrinhoType, ProdutoType } from './../../typings/shopTypes';

export interface ShopContextType {
  produtos: ProdutoType[];
  carrinho: { [index: number]: ProdutoCarrinhoType };
  adicionarAoCarrinho: (produto: ProdutoType) => void;
  removerProdutoDoCarrinho: (codigo: number) => void;
  loading: boolean;
}

export const shopContext = createContext<ShopContextType>({
  produtos: [],
  carrinho: {},
  adicionarAoCarrinho: () => {},
  removerProdutoDoCarrinho: () => {},
  loading: false,
});

export default function ShopContextProvider({ children }: any): ReactElement {
  const [carrinho, setCarrinho] = useState<{
    [index: number]: ProdutoCarrinhoType;
  }>({});
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const adicionarAoCarrinho = useCallback(
    (produto: ProdutoType) => {
      const carr = { ...carrinho };
      let quantidade = carrinho[produto.codigo]!?.quantidade || 0;
      quantidade++;
      carr[produto.codigo] = { produto, quantidade };
      setCarrinho(carr);
    },
    [carrinho]
  );

  const removerProdutoDoCarrinho = useCallback(
    (codigo: number) => {
      const carr = { ...carrinho };
      if (codigo in carr) {
        delete carr[codigo];
      }
      setCarrinho(carr);
    },
    [carrinho]
  );

  useEffect(() => {
    toRequest(api.get, [`${getEnvironment().api}/produtos`], 'produtos')
      .then(({ data }) => {
        setProdutos(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <shopContext.Provider
      value={{
        produtos,
        loading,
        carrinho,
        adicionarAoCarrinho,
        removerProdutoDoCarrinho,
      }}
    >
      {children}
    </shopContext.Provider>
  );
}
