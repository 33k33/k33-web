export interface Navigation {
  key: string;
  label: string;
  url: string;
  children?: Array<Navigation>;
}

export interface Payments {
  productId: string;
  prices: Array<string>;
}

export interface AppStructure {
  navigation: Array<Navigation>;
  payments: Payments;
}

// export interface PageTab {
//   key: string;
//   label: string;
// }

// export type PageTabs = Array<PageTab>;

export type Navigations = Array<Navigation>;

export type DividerConfig = boolean | { hideLast: boolean; hideFirst: boolean };
