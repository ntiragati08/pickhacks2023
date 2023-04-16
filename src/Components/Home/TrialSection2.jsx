import "./TrialSection.scss";
import Footer from "./Footer";
import React, { useState, useEffect, useCallback } from "react";

function TrialSection() {
  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [N_value, setN_value] = useState('');
    const [P_value, setP_value] = useState('');
    const [K_value, setK_value] = useState('');
    const [Ph_value, setPh_value] = useState('');
    const [Moisture_value, setMoisture_value] = useState('');
    const [CropType_value, setCropType_value] = useState('0');
    const [SoilType_value, setSoilType_value] = useState('0');
    const [Temperature_value, setTemperature_value] = useState('');
    const [Humidity_value, setHumidity_value] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/api/v1/predict", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => setResponseData(data))
      .catch((error) => console.error(error));
    const data = await response.json();
    console.log(data);
    <p>data.result</p>;
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="section trailSection">
      <div className="trailSectionRight">
        <form onSubmit={handleSubmit}>
        <h2>Soil Data</h2>
                    <div className="inputRow">
                        <div className="inputDiv">
                            <label htmlFor="nitrogen2">Nitrogen value</label>
                            <input name="nitrogen2" type="text" placeholder="Enter value" value={N_value}
                                onInput={e => setN_value(e.target.value)} />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="phosphorus2">Phosphorus value</label>
                            <input name="phosphorus2" type="text" placeholder="Enter value" value={P_value}
                                onInput={e => setP_value(e.target.value)} />
                        </div>
                    </div>
                    <div className="inputRow">
                        <div className="inputDiv">
                            <label htmlFor="potassium2">Potassium value</label>
                            <input name="potassium2" type="text" placeholder="Enter value" value={K_value}
                                onInput={e => setK_value(e.target.value)} />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="moisture2">Moisture value</label>
                            <input name="moisture2" type="text" placeholder="Enter value" value={Moisture_value}
                                onInput={e => setMoisture_value(e.target.value)} />
                        </div>
                    </div>
                    <div className="inputRow">
                        <div className="inputDiv">
                        <label htmlFor="temperature2">Temperature value</label>
                            <input name="temperature2" type="text" placeholder="Enter value" value={Temperature_value}
                                onInput={e => setTemperature_value(e.target.value)} />
                        </div>
                        <div className="inputDiv">
                          <label htmlFor="humidity2">Humidity value</label>
                            <input name="humidity2" type="text" placeholder="Enter value" value={Humidity_value}
                                onInput={e => setHumidity_value(e.target.value)} />
                        </div>
                    </div>
                    <div className="inputRow">
                        
                        <div className="inputDiv">
                            <label htmlFor="soilType2">Soil type</label>

                            <select
                            onChange={e => {setSoilType_value(e.target.value)}} >
                                <option value="0">Black</option>
                                <option value="1">Clayey</option>
                                <option value="2">Loamy</option>
                                <option value="3">Red</option>
                                <option value="4">Sandy</option>
                            </select>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="cropType2">Crop type</label>

                            <select
                            onChange={e => {setCropType_value(e.target.value)}} >
                                <option value="0">Barley</option>
                                <option value="1">Cotton</option>
                                <option value="2">Ground Nuts</option>
                                <option value="3">Maize</option>
                                <option value="4">Millets</option>
                                <option value="5">Oil seeds</option>
                                <option value="6">Paddy</option>
                                <option value="7">Pulses</option>
                                <option value="8">Sugarcane</option>
                                <option value="9">Tobacco</option>
                                <option value="10">Wheat</option>
                            </select>

                        </div>
                    </div>
          {/* <input
            type="text"
            id="search-input"
            value={inputValue}
            onChange={handleInputChange}
          /> */}
          <button type="submit">Submit</button>
        </form>
        <div className="resultDiv">{responseData && <p>Recommended fertilizer: {responseData.result}</p>}</div>
      </div>

      <div
        className="trailSectionLeft"
        style={{
          backgroundColor: "black",
          backgroundImage: `url("https://farmersedge.ca/wp-content/uploads/2022/02/Fertilizer-Nitrogen-scaled.jpg")`,
        }}
      >
        <h1>Fertilizer</h1>
        <h3>Enter your soil information and get a fertilizer recommendation</h3>
      </div>
    </div>
  );
}

export default TrialSection;
