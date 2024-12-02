import { PessoaErrorMessages } from "../enums/PessoaErrorMessages";

export class PessoaCreationError extends Error {
  constructor(message: PessoaErrorMessages) {
    super(message);
  }
}
