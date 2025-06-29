// Task 6: Client-side form validation

document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual form submission

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  // Input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let isValid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Submit if valid
  if (isValid) {
    alert("Form submitted successfully!");
    // Here you can send data to the server if needed
    document.getElementById("registrationForm").reset();
  }
});