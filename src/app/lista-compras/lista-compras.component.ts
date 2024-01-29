import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.scss']
})
export class ListaComprasComponent {
  produtos: { nome: string, precoUnitario: number, quantidade: number }[] = [];
  novoProdutoNome: string = '';
  novoProdutoPrecoUnitario: number = 0;
  novoProdutoQuantidade: number = 1;

  adicionarProduto() {
    if (this.novoProdutoNome && this.novoProdutoPrecoUnitario > 0 && this.novoProdutoQuantidade > 0) {
      this.produtos.push({
        nome: this.novoProdutoNome,
        precoUnitario: this.novoProdutoPrecoUnitario,
        quantidade: this.novoProdutoQuantidade
      });
      this.novoProdutoNome = '';
      this.novoProdutoPrecoUnitario = 0;
      this.novoProdutoQuantidade = 1;
    }
  }

  calcularTotal(): number {
    return this.produtos.reduce((total, produto) => total + produto.precoUnitario * produto.quantidade, 0);
  }
}
