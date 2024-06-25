export interface IList {
  infos: Info;
  results: {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    created: string;
  }[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: number;
}
