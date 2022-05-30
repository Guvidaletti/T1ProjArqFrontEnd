import React, { useContext, useState } from 'react';
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
  const { carrinho, limparCarrinho } = useContext(shopContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [endereco, setEndereco] = useState<string>('');
  const [check, setCheck] = useState<CheckoutType | undefined>();

  return (
    <Container>
      <div className={rootClassName}>
        <div className={`${rootClassName}-endereco`}>
          <span>Endereço:</span>
          <input
            value={endereco}
            onChange={(evt) => setEndereco(evt.target.value)}
            placeholder='Digite o Endereço...'
          />
        </div>
        <div>
          <button
            disabled={!endereco}
            onClick={() => {
              setLoading(true);
              toRequest<CheckoutType>(
                api.post,
                [
                  `${getEnvironment().api}/vendas/subtotal`,
                  {
                    endereco,
                    itens: Object.values(carrinho),
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
            {loading ? 'Carregando...' : 'Calcular Subtotal'}
          </button>
        </div>
        {check ? (
          <div>
            <hr />
            <div>
              <b>Subtotal</b>
              <span>{getRealNumber(check.subtotal)}</span>
            </div>
            <hr />
            <div>
              <b>Imposto</b>
              <span>{getRealNumber(check.imposto)}</span>
            </div>
            <hr />
            <div>
              <b>Frete</b>
              <span>{getRealNumber(check.frete)}</span>
            </div>
            <hr />
            <div>
              <b>Total</b>
              <span>{getRealNumber(check.total)}</span>
            </div>
          </div>
        ) : undefined}

        <hr />
        <div>
          <button
            onClick={() => {
              limparCarrinho();
              navigate('/');
            }}
          >
            Cancelar
          </button>
          <button
            onClick={() => {
              toRequest(
                api.post,
                [
                  `${getEnvironment()}/vendas/confirmacao`,
                  {
                    endereco,
                    itens: Object.values(carrinho).map((i) => {
                      return {
                        codigo: i.produto.codigo,
                        quantidade: i.quantidade,
                      };
                    }),
                  },
                ],
                'booleanTrue'
              ).then(() => {
                console.log('venda concluída');
                limparCarrinho();
                navigate('/');
              });
            }}
          >
            Confirmar
          </button>
        </div>
      </div>
    </Container>
  );
}
