
import {} from "../enums/PessoaErrorMessages";
import {} from "../errors/PessoaCreationError"
export class Pessoa {
  private_nome: string;
  private_idade: number;


  constructor(
    nome : string,
    idade: number,
  ) {
    this.nome = nome;
    this.idade = idade >= 0 ? idade: 0;
  }
set nome(nome: string):void {
  this.nome = nome;
}
get nome(): string {
  return this.nome;
}
set idade(idade: number): void {
  if(idade >= 0) {
    this.idade = idade;
  }
  get idade(): Number {
    return this.idade;
  }
  

  }
}
}