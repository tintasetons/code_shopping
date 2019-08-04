export interface CategoryInterface {
  id?: number,
  name: string,
  readonly slug?: string,
  active: boolean,
  readonly created_at?: { date: string },
  readonly updated_at?: { date: string }
}

export interface PaginateInterface {
  current_page: number,
  per_page: number,
  total: number,
}
