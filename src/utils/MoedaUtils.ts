export const getRealNumber = (num: number) =>
  num.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
