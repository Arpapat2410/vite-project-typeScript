class BMICalculator {
    calculateBMI(weightInKg: number, heightInMeters: number): number | string {
      if (heightInMeters <= 0 || weightInKg <= 0) {
        return "Invalid input. Weight and height must be positive values.";
      }
  
      const bmi: number = weightInKg*10000 / (heightInMeters * heightInMeters);
      return bmi;
    }
  
    interpretBMI(bmi: number): string {
      if (bmi < 18.5) {
        return "Underweight";
      } else if (bmi < 24.9) {
        return "Normal weight";
      } else if (bmi < 29.9) {
        return "Overweight";
      } else {
        return "Obese";
      }
    }
  }
  
  export default BMICalculator;