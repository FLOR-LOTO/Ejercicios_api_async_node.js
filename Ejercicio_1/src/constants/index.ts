const URL_API = "https://api.weatherapi.com/v1/";

const KEY = "key=f0dd881d49d448e5b9803901242906";

const constructorUrl = (url: string, request: string, key: string) => {
  return `${url}/${request}?${key}&q=`;
};

export { URL_API, KEY, constructorUrl };
