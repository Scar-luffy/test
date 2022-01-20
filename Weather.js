import React, { useState, useEffect } from "react";

function Weather() {
  const [city, setCity] = useState("");
  
  useEffect(() => {
    console.log(city);
    console.log();
    fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=UXD7Nf6z4Tyu7cFfVaPRpjD5M0Dh6G2E&q=${city}`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        fetch(
          `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${response[0].Key}?apikey=UXD7Nf6z4Tyu7cFfVaPRpjD5M0Dh6G2E`
        )
          .then((response) => {
            return response.json();
          })
          .then((response) => console.log(response)
          );
          
      });
  }, [city], );

  


  function handleCityChange(e) {
    if (e.key === "Enter") {
      setCity(e.target.value);
    }
  }
  return (
    <div>
      <input
        type="text"
        id="city"
        name="city"
        placeholder="Enter the City's name"
        onKeyDown={handleCityChange}
      ></input>
    </div>
  );
}

export default Weather;
