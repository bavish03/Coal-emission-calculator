import React, { useState } from 'react';

const emissionFactors = {
  CO2: 2460,
  SO2: 40,
  NOx: 4,
  PM: 2.5,
};
<div>
    
</div>
const Calculator = () => {
  const [coal, setCoal] = useState('');
  const [results, setResults] = useState(null);

  const handleCalculate = () => {
    const amount = Number(coal);

    if (!amount) {
      alert("Please enter a valid number.");
      return;
    }

    setResults({
      CO2: amount * emissionFactors.CO2,
      SO2: amount * emissionFactors.SO2,
      NOx: amount * emissionFactors.NOx,
      PM: amount * emissionFactors.PM,
    });
  };

  const handleReset = () => {
    setCoal();
    setResults(null);
  };

  return (
    <div my="auto">
        <div className="container mt-5 p-4 bg-white rounded shadow">
      <h2 className="mb-4 text-center">Coal Emission Calculator</h2>

      <div className="mb-3">
        <label className="form-label">Amount of Coal Burned (tons)</label>
        <input
          type="number"
          className="form-control"
          value={coal}
          onChange={(e) => setCoal(e.target.value)}
          placeholder="Enter coal amount"
        />
      </div>

      <div className="mb-4">
        <button className="btn btn-primary me-2" onClick={handleCalculate}>
          Calculate
        </button>
        <button className="btn btn-secondary" onClick={handleReset}>
          Reset
        </button>
      </div>

      {results && (
        <div>
          <h5>Estimated Emissions:</h5>
          <ul className="list-group">
            <li className="list-group-item">CO₂: {results.CO2.toFixed(2)} kg</li>
            <li className="list-group-item">SO₂: {results.SO2.toFixed(2)} kg</li>
            <li className="list-group-item">NOₓ: {results.NOx.toFixed(2)} kg</li>
            <li className="list-group-item">PM: {results.PM.toFixed(2)} kg</li>
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};


export default Calculator;
