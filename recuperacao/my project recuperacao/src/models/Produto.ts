
export {Carrinho} from "../models/Carrinho"
export class Produto {
  readonly nome: string; 
  private Produtopreco: number;
  
  constructor(
    nome: string,
    preco: number,
 ){
    this.nome = nome;
    this.Preco = preco >= 0 ? preco: 0;
 }
 set Preco(preco: number): void {
    if (preco >= 0 ) {
        this.Preco = preco;
    } else {
        console.error("Preço inválido!");
    } 
 }
  private calcularDesconto(): number {

    return this.Preco * 0.9;
  }
  get precoComDesconto(): number{
    return this.calcularDesconto();
  }
}
 
