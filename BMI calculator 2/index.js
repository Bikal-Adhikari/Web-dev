function bmiCalculator(weight, height) {
  var bmiCalc = weight / (height * height);
  if (bmiCalc < 18.5) {
    return "Your BMI is " + Math.round(bmiCalc) + ", so you are underweight.";
  }
  if (bmiCalc >= 18.5 && bmiCalc <= 24.9) {
    return (
      "Your BMIi is " + Math.round(bmiCalc) + ", so you have a normal weight."
    );
  }
  if (bmiCalc > 24.9) {
    return "Your BMI is " + Math.round(bmiCalc) + ", so you are overweight.";
  }
}

var bmi = bmiCalculator(65, 1.8);
