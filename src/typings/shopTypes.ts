export interface ProdutoType {
  codigo: number;
  descricao: string;
  preco: number;
  quantidade: number;
  urlImagem: string;
  situacao: string;
}

export interface ProdutoDTO {
  codigo: number;
  quantidade: number;
}

export interface CarrinhoDTO {
  subtotal: number;
  imposto: number;
  frete: number;
  desconto: number;
  total: number;
}