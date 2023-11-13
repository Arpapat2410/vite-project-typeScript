import { useState } from "react";
import BMICalculator from "./BMICalculator";

function BMICalculatorComponent() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBMI] = useState<string>("");
  const [interpretation, setInterpretation] = useState<string>("");

  const handleCalculate = () => {
    const calculator = new BMICalculator();
    const bmiValue: number | string = calculator.calculateBMI(
      parseFloat(weight),
      parseFloat(height)
    );

    if (typeof bmiValue === "number") {
      const interpretationValue: string = calculator.interpretBMI(bmiValue);
      setBMI(bmiValue.toFixed(2));
      setInterpretation(interpretationValue);
    } else {
      setBMI("");
      setInterpretation(bmiValue);
    }
  };

  return (
    <div className="container mx-auto flex justify-center item-center card w-96 bg-neutral text-neutral-content mt-10 w-[40%]">
      <div className="card-body items-center text-center" >
        <h2 className="card-title text-5xl mt-3">BMI Calculator!</h2>
        <h2 className="card-title text-2xl mt-3 mb-3">(TypeScript)</h2>
        <div className="mt-5">
          <label>Weight (kg):</label>
          <input 
            className="input input-bordered input-primary w-full max-w-xs mt-3" 
            type="number"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label>Height (m):</label>
          <input
            className="input input-bordered input-primary w-full max-w-xs mt-3" 
            type="number"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="card-actions justify-end mt-5">
          <button className="btn btn-primary" onClick={handleCalculate}>Calculate BMI</button>
        </div>  
        <div className="mt-6">
          {bmi && <p>Your BMI is : {bmi}</p>}
          {interpretation && <p>Interpretation: {interpretation}</p>}
        </div>
      </div>
    </div>
  );
}

export default BMICalculatorComponent;