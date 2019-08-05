export interface CategoryInterface {
  id?: number,
  name: string,
  readonly slug?: string,
  active: boolean,
  readonly created_at?: { date: string },
  readonly updated_at?: { date: string }
}

export interface ProductInterface {
  id?: number,
  name: string,
  description: string,
  price: number,
  readonly slug?: string,
  active: boolean,
  readonly created_at?: { date: string },
  readonly updated_at?: { date: string }
}

export interface ProductCategoryInterface {
  product: ProductInterface,
  categories: CategoryInterface[]
}

export interface UserInterface {
  id?: number,
  name: string,
  email: string,
  password?: string,
  readonly created_at?: { date: string },
  readonly updated_at?: { date: string }  
  
}
