import React, { useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api'

import ReactLoading from 'react-loading'

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const fetchedData = async () => {
      setData(await fetchData());
      setIsLoad(false);
    };
    fetchedData();
  }, []);

  const handleCountry = async (country) => {
    setData(await fetchData(country));
    setCountry(country);
    setIsLoad(false);
  }

  if (isLoad) {
    return <div style={{ margin: '20% 50%' }}>
      <ReactLoading type='spinningBubbles' color='#23a699' height={70} width={80} />
    </div>
  }

  return (
    <div className={styles.container}>
      <img src='https://i.ibb.co/7QpKsCX/image.png' alt='COVID_19' className={styles.image} />

      <Cards data={data} />
      <CountryPicker handleCountry={handleCountry} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
