import { Repository } from 'typeorm';

export interface ItemService<E, D> {
  repo: Repository<E>;

  createNewEntity: () => E;

  serialize: (item: E) => D;
}
