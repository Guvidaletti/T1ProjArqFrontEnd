import React, { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/container/Container';
import { shopContext } from '../../contexts/shopContext/ShopContext';
import api, { toRequest } from '../../services/api';
import { getEnvironment } from '../../services/environment';
import { CheckoutType } from '../../typings/shopTypes';
import { getRealNumber } from '../../utils/MoedaUtils';
import styles from './Checkout.scss';
const { rootClassName } = styles;

export default function Checkout() {
  const { carrinho, limparCarrinho, carregarProdutos } =
    useContext(shopContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<string | boolean>(false);
  const [endereco, setEndereco] = useState<string>('');
  const [check, setCheck] = useState<CheckoutType | undefined>();

  return (
    <Container>
      <div className={rootClassName}>
        <form
          onSubmit={(evt) => {
            evt.stopPropagation();
            evt.preventDefault();

            setLoading('subtotal');
            toRequest<CheckoutType>(
              api.post,
              [
                `${getEnvironment().api}/vendas/subtotal`,
                {
                  endereco,
                  itens: Object.values(carrinho).map((i) => {
                    return {
                      codigo: i.produto.codigo,
                      quantidade: i.quantidade,
                      produto: i.produto,
                    };
                  }),
                },
              ],
              'subtotal'
            )
              .then(({ data }) => {
                setCheck(data);
              })
              .finally(() => {
                setLoading(false);
              });
          }}
        >
          <div className={`${rootClassName}-endereco`}>
            <span>Endereço:</span>
            <input
              value={endereco}
              onChange={(evt) => setEndereco(evt.target.value)}
              placeholder='Digite o Endereço...'
            />
          </div>
          <div className={`${rootClassName}-action`}>
            <button
              type='submit'
              disabled={!endereco || loading === 'subtotal'}
            >
              {loading === 'subtotal' ? 'Carregando...' : 'Calcular Subtotal'}
            </button>
          </div>
        </form>
        {check ? (
          <Fragment>
            <hr />
            <div className={`${rootClassName}-check`}>
              <div className={`${rootClassName}-valor`}>
                <b>Subtotal</b>
                <span>{getRealNumber(check.subtotal)}</span>
              </div>
              <div className={`${rootClassName}-valor`}>
                <b>Imposto</b>
                <span>{getRealNumber(check.imposto)}</span>
              </div>
              <div className={`${rootClassName}-valor`}>
                <b>Frete</b>
                <span>{getRealNumber(check.frete)}</span>
              </div>
              <div className={`${rootClassName}-valor`}>
                <b>Desconto</b>
                <span>{getRealNumber(check.desconto)}</span>
              </div>
              <div className={`${rootClassName}-valor`}>
                <b>Total</b>
                <span>{getRealNumber(check.total)}</span>
              </div>
            </div>
          </Fragment>
        ) : undefined}
        <hr />
        <div className={`${rootClassName}-action`}>
          <button
            className='secondary'
            onClick={() => {
              limparCarrinho();
              navigate('/');
            }}
          >
            Cancelar
          </button>
          {check ? (
            <button
              disabled={loading === 'confirmacao'}
              onClick={() => {
                setLoading('confirmacao');
                toRequest(
                  api.post,
                  [
                    `${getEnvironment().api}/vendas/confirmacao`,
                    Object.values(carrinho).map((i) => {
                      return {
                        codigo: i.produto.codigo,
                        quantidade: i.quantidade,
                        imposto: check.imposto,
                        custo: i.produto.preco,
                        produto: i.produto,
                      };
                    }),
                  ],
                  'booleanTrue'
                ).then(() => {
                  alert('venda concluída');
                  limparCarrinho();
                  carregarProdutos();
                  navigate('/');
                });
              }}
            >
              {loading === 'confirmacao' ? 'Confirmando..' : 'Confirmar'}
            </button>
          ) : undefined}
        </div>
      </div>
    </Container>
  );
}
