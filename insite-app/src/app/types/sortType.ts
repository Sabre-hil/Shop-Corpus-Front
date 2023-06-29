export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  TITLE_DESC = 'title',
  PRICE_DESC = 'price',
}

export interface SortType {
  name: string;
  sortProperty: SortPropertyEnum
}