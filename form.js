let currentStep = 0;
const steps = document.querySelectorAll(".form-step");
const stepIndicators = document.querySelectorAll(".steps li");

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    steps[currentStep].classList.remove("active");
    stepIndicators[currentStep].classList.remove("active");
    currentStep++;
    steps[currentStep].classList.add("active");
    stepIndicators[currentStep].classList.add("active");
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentStep > 0) {
    steps[currentStep].classList.remove("active");
    stepIndicators[currentStep].classList.remove("active");
    currentStep--;
    steps[currentStep].classList.add("active");
    stepIndicators[currentStep].classList.add("active");
  }
});
