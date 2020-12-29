import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';
export const fetchData = async (country) => {
  let change = url;
  if (country) {
    change = `${url}/countries/${country}`
  }
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(change);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {

  }
}


export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modified = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modified;
  } catch (error) {

  }
}


export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {

  }
}