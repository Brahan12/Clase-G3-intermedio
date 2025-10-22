function Access() {
  const user = document.getElementById("username").value.trim(); // ''
  const pass = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

  if (!user || !pass) {
    msg.textContent = "Por favor, completa todos los campos.";
    msg.style.color = "red";
  } else if (!regex.test(pass)) {
    msg.textContent = "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula y un carácter especial.";
    msg.style.color = "red";
  } else {
    msg.textContent = "¡Bienvenido, " + user + "!";
    msg.style.color = "green";
  }  
}
