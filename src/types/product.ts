export interface IFilter<TItem> {
  entities: TItem[];
  pageItemsCount: number;
  totalItemsCount: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
