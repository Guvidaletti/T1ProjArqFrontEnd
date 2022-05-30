import React from 'react';
import Container from '../../components/container/Container';
import styles from './Checkout.scss';
const { rootClassName } = styles;

export default function Checkout() {
  return (
    <Container>
      <div className={rootClassName}>Checkout</div>
    </Container>
  );
}
