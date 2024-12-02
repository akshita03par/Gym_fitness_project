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
      if (bmi < 18.5) {
        category = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
      } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
      } else {
        category = 'Obesity';
      }
      document.getElementById('bmi-category').textContent = `Category: ${category}`;
    } else {
      alert('Please enter both weight and height!');
    }
  }

