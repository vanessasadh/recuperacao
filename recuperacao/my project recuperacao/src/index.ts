import { Pessoa } from "./models/Pessoa";

const pessoa = new Pessoa();

try {
  Pessoa.nome = "Vanessa";
} catch (err) {
  console.log(err);
}

const PessoaNome = Pessoa.nome;
console.log(PessoaNome);