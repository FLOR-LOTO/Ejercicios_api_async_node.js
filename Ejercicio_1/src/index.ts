import { fetchData } from "./model";

const main = async (city: string, date: string) => {
  console.log(await fetchData(city, date));
};

main("paris", "2024-07-15");
