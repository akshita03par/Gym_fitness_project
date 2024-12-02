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
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  if (weight && height) {
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    document.getElementById('bmi-value').textContent = bmi;

    let category = '';
    let exerciseSuggestions = '';
    
    if (bmi < 18.5) {
      category = 'Underweight';
      exerciseSuggestions = 'Focus on strength training and eat high-calorie foods. Try yoga for flexibility and core strength, like Sun Salutations and Warrior poses.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
      exerciseSuggestions = 'Maintain your weight with regular exercise. Incorporate cardio, strength training, and yoga for flexibility and overall health.';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
      exerciseSuggestions = 'Focus on cardio exercises like walking, jogging, or swimming to burn fat. Yoga poses like Downward Dog and Plank will help improve strength.';
    } else {
      category = 'Obesity';
      exerciseSuggestions = 'Focus on low-impact cardio exercises such as walking or cycling to avoid joint stress. Try yoga for relaxation, like Child’s Pose and Gentle Flow.';
    }

    document.getElementById('bmi-category').textContent = `Category: ${category}`;
    document.getElementById('exercise-suggestions').textContent = exerciseSuggestions;
  } else {
    alert('Please enter both weight and height!');
  }
}
