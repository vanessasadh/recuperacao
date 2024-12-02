import { Produto } from "./Produto";


export class Carrinho {
    private produtos: Produto[] = [];

    adicionarProduto(produto: Produto): void {
        this.produtos.push(produto);
    }
    calcularTotal():number {
        return this.produtos.reduce((total, produtos)=> total + produtos.getPrecoComDesconto(), 0);
    }
}