const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const bmi = document.querySelector(".result");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const weightValue = parseFloat(weight.value);
  const heightValue = parseFloat(height.value) / 100;

  if (
    isNaN(weightValue) ||
    isNaN(heightValue) ||
    weightValue <= 0 ||
    heightValue <= 0
  ) {
    bmi.textContent = "Please enter valid weight and height.";
    bmi.classList.remove("hide");
    bmi.classList.add("large");
    return;
  }
  const bmiValue = weightValue / (heightValue * heightValue);

  let textValue;
  if (bmiValue < 18.5) {
    textValue = "Underweight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    textValue = "Normal Weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.99) {
    textValue = "Overweight";
  } else {
    textValue = "Obesity";
  }
  bmi.textContent = `${bmiValue.toFixed(2)} (${textValue})`;
  bmi.classList.remove("hide");
  bmi.classList.add("large");
});
