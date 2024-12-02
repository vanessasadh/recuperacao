

import { Produto } from "./Produto";

describe("Tests over produto  class", () => {
    it("should create a roduto with valid inputs", () => {
      const nomeValue = " ";
      const precoValue = " ";
  
      const produto = new Produto(
        nomeValue,
        precoValue;
        );
  
    expect(Produto.nome).toBe(nomeValue);
    expect(Produto.preco).toBe(precoValue);
  });
  
  it("should not create a product with invalid name", () => {
    const nomeValue = " ";
    const precoValue = " ";
  
    try {
      const produto = new Produto(nomeValue, precoValue);
      fail("It allowed to set an invalid price");
    } catch (error) {
      expect(error).toBeInstanceOf(ProdutoCreationError);
      expect(error.message).toBe(ProdutoErrorMessages.NAME_ERROR_MESSAGE);
    }
  });
          });
  
  
  