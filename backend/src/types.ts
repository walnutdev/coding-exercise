export type CurrencyPair = "USDBRL" | "EURBRL" | "GBPBRL" | "AUDBRL";

export interface ExchangeRate {
  // TODO
}

export type ExchangeRatesResponse = Record<CurrencyPair, ExchangeRate>;
