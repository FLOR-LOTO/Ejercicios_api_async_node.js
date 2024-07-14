import { URL_API, KEY } from "../constants";

const fetchData = async (city: string, date: string) => {
  const response = await fetch(
    `${URL_API}/forecast.json${KEY}${city}&dt=${date}`
  );
  const data = await response.json();
  const { maxtemp_c, mintemp_c } = data.forecast.forecastday[0].day;
  return { maxtemp_c, mintemp_c };
};

export { fetchData };
