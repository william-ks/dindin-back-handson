import { uuid } from 'uuidv4';

export class User {
  public readonly id: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
