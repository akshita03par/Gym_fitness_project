let menu = document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

menu.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// body max index 

function calculateBMI() {
  // Get input values
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // cm to meters
  const gender = document.getElementById("gender").value;

  // Validate inputs
  if (!weight || !height || !gender) {
    alert("Please fill in all fields correctly!");
    return;
  }

  // Calculate BMI
  const bmi = weight / (height * height);
  const bmiRounded = bmi.toFixed(1);

  // Determine BMI category
  let category = "";
  let suggestion = "";

  if (bmi < 18.5) {
    category = "Underweight";
    suggestion = "Focus on strength training and a calorie-rich diet.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
    suggestion = "Maintain a balanced diet and regular exercise.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
    suggestion = "Include cardio workouts and monitor diet.";
  } else if (bmi >= 30 && bmi <= 34.9) {
    category = "Obese (Class I)";
    suggestion = "Consult a nutritionist and do moderate exercises.";
  } else if (bmi >= 35 && bmi <= 39.9) {
    category = "Obese (Class II)";
    suggestion = "Focus on low-impact exercises and a strict diet plan.";
  } else {
    category = "Obese (Class III)";
    suggestion = "Seek medical advice for weight management.";
  }

  // Update the result in HTML
  document.getElementById("bmi-value").textContent = bmiRounded;
  document.getElementById("bmi-category").textContent = category;
  document.getElementById("exercise-suggestions").textContent = suggestion;
}
