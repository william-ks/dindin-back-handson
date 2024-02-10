import * as bcrypt from 'bcrypt';

export interface IIsInvalid {
  pass: string;
  hash: string;
}

export class HandlePass {
  constructor() {}

  async encrypt(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, 10);

    return hash;
  }

  async isInvalid({ pass, hash }: IIsInvalid): Promise<boolean> {
    const isValid = await bcrypt.compare(pass, hash);

    return !isValid;
  }
}
