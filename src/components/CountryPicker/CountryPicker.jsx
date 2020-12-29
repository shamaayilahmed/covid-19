import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountry }) => {
  const [fetchCountry, setFetchCountry] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      setFetchCountry(await fetchCountries());
    };
    fetchedData();
  }, [setFetchCountry]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountry(e.target.value)}
      >
        <option value="">Global</option>
        {fetchCountry.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
