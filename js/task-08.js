const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", (event) => {
  event.preventDefault();
  const userData = {};
  for (const element of loginFormRef.elements) {
    if (element.name) {
      userData[element.name] = element.value;
    }
  }
  if (userData.email && userData.password) {
    console.log(userData);
    loginFormRef.reset();
  } else {
    alert("Всі поля повинні бути заповнені");
  }
});
