import {PessoaErrorMessages } from "../enums/PessoaErrorMessages";
import {PessoaCreationError } from "../errors/PessoaCreationError";
import { Pessoa } from "./Pessoa";


describe("Tests over Pessoa  class", () => {
  it("should create a pessoa with valid inputs", () => {
    const nomeValue = "vanessa";
    const idadeValue = "40";

    const pessoa = new Pessoa(
      nomeValue,
      idadeValue;
        );

  expect(Pessoa.nome).toBe(nomeValue);
  expect(Pessoa.dade).toBe(idadeValue);
});

it("should not create a person with invalid name", () => {
  const nomeValue = " Vanessa";
  const idadeValue = "40 ";

  try {
    const pessoa = new Pessoa(nomeValue, idadeValue);
    fail("It allowed to set an invalid name");
  } catch (err) {
    expect(err).toBeInstanceOf(PessoaCreationError);
    expect(err.message).toBe(PessoaErrorMessages.NAME_ERROR_MESSAGE);
  }
});
        });



