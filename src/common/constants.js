/**
 * Colors
 */
export const COLOR_RED = "#d63031";
export const COLOR_YELLOW = "#fdcb6e";
export const COLOR_GREEN = "#55efc4";

/**
 * Endpoints
 */

const url = "https://min-api.cryptocompare.com/data";
const api_key =
  "6e1330d56cc357bcc4e53258421ae7cc6e18b719164159b5ccad3ed61fba0bd0";

export const endpoints = [
  `${url}/v2/histohour?fsym=BTC&tsym=USD&limit=10&api_key=${api_key}`,
  `${url}/exchange/histohour?tsym=BTC&limit=10&api_key=${api_key}`,
];
