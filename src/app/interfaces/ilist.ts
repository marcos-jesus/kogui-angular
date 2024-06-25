export interface IList {
  infos: Info;
  results: Item[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: number;
}

export interface Item {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
}
