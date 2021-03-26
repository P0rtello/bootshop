import {Product} from './product';

export class ShoppingcartEntry {
  constructor(
    public product: Product,
    public amount: number
  ) { }
}
